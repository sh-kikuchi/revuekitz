<script setup lang="ts">
import { ref, computed } from 'vue'

// Define the structure of an event object
interface Event {
  name: string // Event title
  start: string // Event start date string
  end: string // Event end date string
  color: string // Event color for display
  row?: number // Row position in the week (for stacking)
  offset?: number // Day offset in the week (0=Sun, 6=Sat)
  span?: number // Number of days the event spans in the week
}

// Props expected by this component
const props = defineProps<{
  events: Event[] // Array of events
  modelValue: Event | null // Currently selected event
}>()

// Emits for v-model support
const emit = defineEmits(['update:modelValue'])

const MS_PER_DAY = 24 * 60 * 60 * 1000 // Milliseconds in a day
const currentDate = ref(new Date()) // The currently displayed month
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] // Weekday labels

const BAR_HEIGHT = 20 // Height of each event bar
const BAR_GAP = 3 // Vertical gap between event bars

// Calculate the first date to display in the calendar (start of the week of 1st of month)
const getStartDate = () => {
  const date = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), 1)
  date.setDate(date.getDate() - date.getDay()) // Move back to the previous Sunday
  return date
}

// Calculate the last date to display in the calendar (end of the week of last day of month)
const getEndDate = () => {
  const date = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 0)
  date.setDate(date.getDate() + (6 - date.getDay())) // Move forward to the next Saturday
  return date
}

// Arrange events for a single week
const getWeekEvents = (weekStart: Date) => {
  const weekEnd = new Date(weekStart)
  weekEnd.setDate(weekEnd.getDate() + 6) // Calculate the end of this week (Saturday)

  // Filter events that intersect this week
  const eventsInWeek = props.events
    .filter((event) => {
      const start = new Date(event.start + 'T00:00:00')
      const end = new Date(event.end + 'T23:59:59')
      return end >= weekStart && start <= weekEnd // Only events that overlap this week
    })
    .map((event) => {
      const start = new Date(event.start + 'T00:00:00')
      const end = new Date(event.end + 'T23:59:59')
      const eventStart = start < weekStart ? weekStart : start // Clip start to week start
      const eventEnd = end > weekEnd ? weekEnd : end // Clip end to week end
      const offset = Math.floor(eventStart.getDay())
      const span = Math.floor(Math.min(eventEnd.getDay() - eventStart.getDay() + 1, 7 - offset))
      return { ...event, offset, span }
    })

  // Assign rows to prevent overlapping bars
  const slots = []
  eventsInWeek.forEach((event) => {
    let row = 1
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const conflict = slots.some(
        (e) =>
          e.row === row && e.offset < event.offset + event.span && e.offset + e.span > event.offset
      )
      if (!conflict) break
      row++ // Increment row if there is a conflict
    }
    event.row = row // Assign row to event
    slots.push(event)
  })

  return eventsInWeek
}

// Generate the full calendar for the current month
const getCalendar = () => {
  const startDate = getStartDate() // First date to display
  const endDate = getEndDate() // Last date to display
  const diffDays = Math.ceil((endDate.getTime() - startDate.getTime()) / MS_PER_DAY) + 1
  const weekNumber = Math.ceil(diffDays / 7) // Number of weeks to render

  const calendars = []
  let current = new Date(startDate)

  for (let w = 0; w < weekNumber; w++) {
    const weekRow = []
    for (let d = 0; d < 7; d++) {
      weekRow.push({
        date: new Date(current), // Full date object
        day: current.getDate(), // Day of month
        isCurrentMonth: current.getMonth() === currentDate.value.getMonth(), // Flag for styling
        weekDay: current.getDay() // Day index (0=Sun, 6=Sat)
      })
      current.setDate(current.getDate() + 1) // Move to next day
    }
    calendars.push(weekRow)
  }

  return calendars
}

const calendars = computed(() => getCalendar()) // Computed property for calendar weeks
const yearMonth = computed(
  () => `${currentDate.value.getFullYear()} / ${currentDate.value.getMonth() + 1}` // Displayable year/month
)

// Navigate to next month
const nextMonth = () => {
  currentDate.value.setMonth(currentDate.value.getMonth() + 1)
  currentDate.value = new Date(currentDate.value) // Trigger reactivity
}

// Navigate to previous month
const prevMonth = () => {
  currentDate.value.setMonth(currentDate.value.getMonth() - 1)
  currentDate.value = new Date(currentDate.value) // Trigger reactivity
}

// Handle click on an event
const onEventClick = (event) => {
  emit('update:modelValue', event) // Emit the selected event
}
</script>

<template>
  <div class="revuekitz-event-calendar-container">
    <div class="revuekitz-event-calendar-nav-buttons">
      <div class="revuekitz-event-calendar-arrow" @click="prevMonth">&lt;</div>
      <h4>{{ yearMonth }}</h4>
      <div class="revuekitz-event-calendar-arrow" @click="nextMonth">&gt;</div>
    </div>

    <div class="revuekitz-event-calendar-grid">
      <!-- weekday -->
      <div class="revuekitz-event-calendar-week-header">
        <div
          v-for="(day, index) in weekDays"
          :key="index"
          :class="[
            'revuekitz-event-calendar-week-day',
            index === 0 ? 'sun' : index === 6 ? 'sat' : ''
          ]"
        >
          {{ day }}
        </div>
      </div>

      <!-- row per week -->
      <div
        v-for="(week, wIndex) in calendars"
        :key="wIndex"
        class="revuekitz-event-calendar-week-row"
      >
        <div class="revuekitz-event-calendar-week-cells">
          <div
            v-for="(day, dIndex) in week"
            :key="dIndex"
            :class="[
              'revuekitz-event-calendar-day-cell',
              day.isCurrentMonth ? 'current-month' : 'other-month'
            ]"
          >
            {{ day.day }}
          </div>

          <div
            v-for="(event, index) in getWeekEvents(week[0].date)"
            :key="index"
            class="revuekitz-event-calendar-event"
            :style="{
              left: Math.round(event.offset * 120) + 'px',
              width: Math.round(event.span * 120) + 'px',
              top: event.row * (BAR_HEIGHT + BAR_GAP) + 'px',
              height: BAR_HEIGHT + 'px',
              backgroundColor: event.color
            }"
            @click="onEventClick(event)"
          >
            {{ event.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.revuekitz-event-calendar-container {
  width: 840px;
  margin: auto;
}

.revuekitz-event-calendar-nav-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.revuekitz-event-calendar-week-header {
  display: flex;
  width: 840px;
  border-bottom: 1px solid gray;
}
.revuekitz-event-calendar-week-day {
  width: 120px;
  text-align: center;
}
.revuekitz-event-calendar-week-day.sun {
  color: red;
}
.revuekitz-event-calendar-week-day.sat {
  color: blue;
}

.revuekitz-event-calendar-week-row {
  position: relative;
  display: flex;
  border-left: 1px solid gray;
  margin: 0;
}
.revuekitz-event-calendar-week-cells {
  display: flex;
  width: 840px;
}

.revuekitz-event-calendar-day-cell,
.revuekitz-event-calendar-event {
  box-sizing: border-box;
}

.revuekitz-event-calendar-day-cell {
  flex: none;
  width: 120px;
  min-height: 120px;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
  position: relative;
  text-align: center;
}
.revuekitz-event-calendar-day-cell.current-month {
  background: white;
}
.revuekitz-event-calendar-day-cell.other-month {
  background: #f3f3f3;
}

.revuekitz-event-calendar-event {
  font-size: 12px;
  position: absolute;
  line-height: 25px;
  color: white;
  border-radius: 4px;
  padding: 0 1px;
  white-space: nowrap;
  z-index: 1;
  cursor: pointer;
}

.revuekitz-event-calendar-arrow {
  font-size: 22px;
  cursor: pointer;
}
</style>
