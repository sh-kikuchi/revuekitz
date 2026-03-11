import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import EventCalendar from '../../../global/calendars/EventCalendar.vue'
beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date('2025-11-01'))
})
afterEach(() => {
  vi.useRealTimers()
})
describe('EventCalendar', () => {
  it('renders weekday headers correctly', () => {
    const wrapper = mount(EventCalendar, {
      props: {
        events: [],
        modelValue: null
      }
    })

    const headers = wrapper.findAll('.revuekitz-event-calendar-week-day')
    expect(headers).toHaveLength(7)
    const headerTexts = headers.map((h) => h.text())
    expect(headerTexts).toEqual(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])
  })

  it('displays the correct year and month', () => {
    const wrapper = mount(EventCalendar, {
      props: {
        events: [],
        modelValue: null
      }
    })

    const now = new Date()
    const expected = `${now.getFullYear()} / ${now.getMonth() + 1}`
    expect(wrapper.find('h4').text()).toBe(expected)
  })

  it('renders events with correct styles', () => {
    const events = [
      {
        name: 'Test Event',
        start: '2025-11-01',
        end: '2025-11-02',
        color: 'green'
      }
    ]

    const wrapper = mount(EventCalendar, {
      props: {
        events,
        modelValue: null
      }
    })

    const eventBars = wrapper.findAll('.revuekitz-event-calendar-event')
    expect(eventBars.length).toBeGreaterThan(0)

    const event = eventBars[0]
    expect(event.text()).toContain('Test Event')
    expect(event.attributes('style')).toContain('background-color: green')
  })

  it('emits update:modelValue when an event is clicked', async () => {
    const events = [
      {
        name: 'Click Event',
        start: '2025-11-01',
        end: '2025-11-01',
        color: 'red'
      }
    ]

    const wrapper = mount(EventCalendar, {
      props: {
        events,
        modelValue: null
      }
    })

    const event = wrapper.find('.revuekitz-event-calendar-event')
    await event.trigger('click')

    const emitted = wrapper.emitted('update:modelValue')
    expect(emitted).toBeTruthy()
    expect(emitted?.[0][0].name).toBe('Click Event')
  })

  it('navigates to next and previous month correctly', async () => {
    const wrapper = mount(EventCalendar, {
      props: {
        events: [],
        modelValue: null
      }
    })

    const currentMonth = wrapper.find('h4').text()
    await wrapper.findAll('.revuekitz-event-calendar-arrow')[1].trigger('click') // ">" ボタン
    const nextMonth = wrapper.find('h4').text()
    expect(nextMonth).not.toBe(currentMonth)

    await wrapper.findAll('.revuekitz-event-calendar-arrow')[0].trigger('click') // "<" ボタン
    const backToCurrent = wrapper.find('h4').text()
    expect(backToCurrent).toBe(currentMonth)
  })
})
