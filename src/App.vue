<script setup lang="ts">
import { ref } from 'vue'
import { mdiInformationOutline } from '@mdi/js'
import { mdiAccount } from '@mdi/js'

//buttons(3)
import BasicButton from './components/global/buttons/BasicButton.vue'
import LinkButton from './components/global/buttons/LinkButton.vue'
import PushButton from './components/global/buttons/PushButton.vue'

// displays (7)
import CardFlame from './components/global/displays/CardFlame.vue'
import ChipText from './components/global/displays/ChipText.vue'
import CustomMessage from './components/global/displays/CustomMessage.vue'
import LoadingLoader from './components/global/displays/LoadingLoader.vue'
import ModalDialog from './components/global/displays/ModalDialog.vue'
import PageTitle from './components/global/displays/PageTitle.vue'
import TabPanel from './components/global/displays/TabPanel.vue'
import ToolTip from './components/global/displays/ToolTip.vue'

//fields(12)
import CheckBoxField from './components/global/fields/CheckBoxField.vue'
import ColorField from './components/global/fields/ColorField.vue'
import DateField from './components/global/fields/DateField.vue'
import FileField from './components/global/fields/FileField.vue'
import FileDnd from './components/global/fields/FileDnd.vue'
import MoneyField from './components/global/fields/MoneyField.vue'
import NumberField from './components/global/fields/NumberField.vue'
import RadioField from './components/global/fields/RadioField.vue'
import RangeField from './components/global/fields/RangeField.vue'
import SelectField from './components/global/fields/SelectField.vue'
import TextField from './components/global/fields/TextField.vue'
import MultiLineField from './components/global/fields/MultiLineField.vue'
import ToggleSwitch from './components/global/fields/ToggleSwitch.vue'

//icons (2)
import ImgIcon from './components/global/icons/ImgIcon.vue'
import SvgIcon from './components/global/icons/SvgIcon.vue'

//layouts(7)
import GridColumn from './components/global/layouts/GridColumn.vue'
import GridRow from './components/global/layouts/GridRow.vue'
import LayoutFooter from './components/global/layouts/LayoutFooter.vue'
import LayoutHeader from './components/global/layouts/LayoutHeader.vue'
import LayoutWrapper from './components/global/layouts/LayoutWrapper.vue'
import NavBar from './components/global/layouts/NavBar.vue'
import NavBarItem from './components/global/layouts/NavBarItem.vue'

//lists(5)
import AccordionMenu from './components/global/lists/AccordionMenu.vue'
import BasicList from './components/global/lists/BasicList.vue'
import BreadcrumbList from './components/global/lists/BreadcrumbList.vue'
import PaginateList from './components/global/lists/PaginateList.vue'
import TreeList from './components/global/lists/TreeList.vue'

// tables(1)
import DataTable from './components/global/tables/DataTable.vue'
import ToDoList from './components/global/lists/ToDoList.vue'

/*======Fields:start=====*/
const text = ref('text')
const text2 = ref('text2')
const numberValue = ref(100)
const moneyValue = ref(50)
const checkedItem = ref('')
const checkBoxChecked = ref(true)
const radioCheckedItem = ref('Option 1')
const rangeValue = ref(123)
const radioItems = ref(['Option 1', 'Option 2', 'Option 3'])
const selectedItem = ref('C3')
const optionItems = [
  { text: 'Option 1', value: 'A1' },
  { text: 'Option 2', value: 'B2' },
  { text: 'Option 3', value: 'C3' }
]
const fileData = ref<File[]>([])
const selectedFiles = ref<File[]>([])
const selectedColor = ref('#444')
const dateValue = ref('2024-04-03')
const toggleSwitchChecked = ref(false)
const longTextValue = ref('long text \n test')
/*======Fields:end=====*/

/*======PaginateList:start=====*/
const items = ref([
  { id: 1, name_en: 'coffee' },
  { id: 2, name_en: 'espresso' },
  { id: 3, name_en: 'cappuccino' },
  { id: 4, name_en: 'mocha' },
  { id: 5, name_en: 'tea' },
  { id: 6, name_en: 'sandwich' },
  { id: 7, name_en: 'hotdog' },
  { id: 8, name_en: 'omelette' },
  { id: 9, name_en: 'salad' },
  { id: 10, name_en: 'curry' }
])

const displayItems = ref([])

const getDispItems = (dispArray) => {
  displayItems.value = dispArray
}
/*======PaginateList:end=====*/

/*======NavBar:start======*/
const navBarVisible = ref(false)
const showNavBar = () => {
  navBarVisible.value = true
}
const closeNavBar = () => {
  navBarVisible.value = false
}
/*======NavBar:end======*/

/*======Modal:start=====*/
const isModalVisible = ref(false)

const toggleModal = () => {
  isModalVisible.value = !isModalVisible.value
}

const closeModal = () => {
  isModalVisible.value = false
}

/*=======Modal:end======*/

/*======DataTable:start=====*/
const tableItems = ref([
  { date: '2024-01-01', title: 'Title 1', content: 'Content 1', author: 'Author 1' },
  { date: '2024-01-02', title: 'Title 2', content: 'Content 2', author: 'Author 2' },
  { date: '2024-01-03', title: 'Title 3', content: 'Content 3', author: 'Author 3' },
  { date: '2024-01-04', title: 'Title 4', content: 'Content 4', author: 'Author 4' },
  { date: '2024-01-05', title: 'Title 5', content: 'Content 5', author: 'Author 5' }
])
const targetData = ref([])

const todos = ref([
  { id: '1', title: 'Todo #1', value: 1, href: '#' },
  { id: '2', title: 'Todo #2', value: 2 }
])
</script>

<template>
  <div>
    <PageTitle>RevueKitz</PageTitle>
    <TabPanel
      style="height: 100vh"
      :tabs="['buttons', 'displays', 'fields', 'icons', 'layouts', 'lists', 'tables']"
    >
      <template v-slot:content0>
        <section>
          <h2 class="mb-3">buttons</h2>
          <div>
            <div style="margin-top: 15px; margin-bottom: 15px">
              <h3 class="mr-2">BasicButton</h3>
              <BasicButton
                id="basicButtonId"
                class="basic-button-class"
                name="basic_button_name"
                type="submit"
                :style="{ color: 'white', backgroundColor: 'blue' }"
                :styleReset="false"
                :isDisabled="false"
              >
                BasicButton
              </BasicButton>
            </div>
          </div>
          <div>
            <div style="margin-top: 15px; margin-bottom: 15px">
              <h3 class="mr-2">LinkButton</h3>
              <LinkButton
                id="linkButtonId"
                class="link-button-class"
                name="link_button_name"
                :style="{ backgroundColor: 'tomato' }"
                fontColor="white"
                :styleReset="false"
                :isDisabled="true"
                onclick="alert('hello')"
                >LinkButton</LinkButton
              >
            </div>
          </div>
          <div style="margin-top: 15px; margin-bottom: 15px">
            <h3 class="mr-2">PushButton</h3>
            <PushButton
              id="pushButtonId"
              class="push-button-class"
              name="push_button_name"
              type="button"
              :style="{ color: 'white', backgroundColor: 'bisque' }"
              :styleReset="false"
              :isDisabled="false"
              onclick="alert('hello')"
              >PushButton</PushButton
            >
          </div>
        </section>
      </template>
      <template v-slot:content1>
        <section>
          <h3>Card</h3>
          <CardFlame
            id="cardFlameId"
            class="card-flame-class"
            :style="'background-color: lightgray; width:250px'"
            title="title"
            subtitle="subtitle"
          >
            <p>Enter the content of the card here.</p>
          </CardFlame>
        </section>
        <section>
          <h3>ChipText</h3>
          <div style="margin-top: 15px; margin-bottom: 15px">
            <ChipText
              id="chipTextId"
              class="chip-text-class"
              :style="'background-color: lightgray;'"
              :styleReset="false"
            >
              <span>vue.js</span>
            </ChipText>
          </div>
        </section>
        <section>
          <h3>CustomMessage</h3>
          <div style="margin-top: 15px; margin-bottom: 15px">
            <CustomMessage message="infoメッセージ" mode="info" :duration="3000" />
            <CustomMessage message="warningメッセージ" mode="warning" />
            <CustomMessage message="Errorメッセージ" mode="error" />
          </div>
        </section>
        <section>
          <h2>LoadingLoader</h2>
          <div>
            <small>It shows up during theloading state when mounting.</small>
            <LoadingLoader>
              <div class="loading_text">LoadingLoader</div>
            </LoadingLoader>
          </div>
        </section>
        <section>
          <h3>Modal</h3>
          <div style="margin-top: 15px; margin-bottom: 15px">
            <ModalDialog
              id="modal-dialog-id"
              class="modal-dialog-class"
              :style="{ border: '2px solid blue' }"
              :is-visible="isModalVisible"
              @close="closeModal"
            >
              <p>Display modal content here</p>
            </ModalDialog>
            <button @click="toggleModal">Open Modal</button>
          </div>
        </section>
        <section>
          <h2>page title</h2>
          <div>
            <PageTitle id="pegeTitleId" class="page-title-class" :style="'color: blue;'">
              page title
            </PageTitle>
          </div>
        </section>
        <section>
          <h2>TabPanel</h2>
          <small>This page uses a tab list.</small>
        </section>
        <section>
          <h2>ToolTip</h2>
          <div style="margin-top: 15px; margin-bottom: 15px">
            <ToolTip>
              <template v-slot:toolTipBtn>
                <div class="andmore"><button>TEST</button></div>
              </template>
              <template v-slot:toolTipContent>
                <div class="pa-2">TESTMAN</div>
              </template>
            </ToolTip>
          </div>
        </section>
      </template>
      <template v-slot:content2>
        <div style="text-align: center">
          <small>You can also use required and hidden attributes</small>
        </div>
        <section>
          <h3>CheckBoxField</h3>
          <div>
            <CheckBoxField
              id="checkBoxFieldId"
              class="check-box-field-class"
              style="color: red"
              :styleReset="false"
              name="check_box_field_name"
              label="check-box-field Label"
              type="checkbox"
              :isDisabled="false"
              :isReadonly="false"
              item="check-box-field-item"
              v-model="checkedItem"
              v-model:checked="checkBoxChecked"
            />
          </div>
          <div>{{ checkedItem }}{{ checkBoxChecked }}</div>
        </section>
        <section>
          <h3>ColorField</h3>
          <div style="margin-top: 15px; margin-bottom: 15px">
            <ColorField
              id="colorFieldId"
              class="color-field-class"
              style="border: 1px solid black"
              name="color_field_name"
              v-model="selectedColor"
              :styleReset="false"
            />
          </div>
          <div>{{ selectedColor }}</div>
        </section>
        <section>
          <h3>DateField</h3>
          <div style="margin-top: 15px; margin-bottom: 15px">
            <DateField
              type="date"
              id="dateFieldId"
              class="date-field-class"
              style="border: 1px solid black"
              :styleReset="false"
              name="date_field_name"
              minlength="2024-07-01"
              maxlength="2024-07-26"
              :isDisabled="false"
              :isReadonly="false"
              v-model="dateValue"
            />
          </div>
          <div>{{ dateValue }}</div>
        </section>
        <section>
          <h3>FileDnd</h3>
          <div style="margin-top: 15px; margin-bottom: 15px">
            <FileDnd
              v-model="selectedFiles"
              style="width: 400px;" 
              accept="image/*,.pdf,.docx"
             />
            <p v-if="selectedFiles.length > 0">
              Selected Files:
              <ul>
                <li v-for="(file, i) in selectedFiles" :key="i">
                  {{ file.name }} ({{ (file.size / 1024).toFixed(1) }} KB)
                </li>
              </ul>
            </p>
          </div>
          <div><strong>Selected Files:</strong> {{ selectedFiles.length }}</div>
        </section>
        <section>
          <h3>FileField</h3>
          <div style="margin-top: 15px; margin-bottom: 15px">
            <FileField v-model="fileData" >Files</FileField>
          </div>
          <div>
            <ul>
              <li v-for="file in fileData" :key="file.name">
                {{ file.name }} ({{ file.size }} bytes)
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h3>MoneyField</h3>
          <div>
            <MoneyField
              id="moneyFieldId"
              class="money-field-class"
              style="background-color: blanchedalmond"
              name="money_field_name"
              :min="100"
              :max="100000"
              :isDisabled="false"
              :isReadonly="false"
              v-model="moneyValue"
            />
          </div>
          <div>{{ moneyValue }}</div>
        </section>
        <section>
          <h3>MultiLineField</h3>
          <div style="margin-top: 15px; margin-bottom: 15px">
            <MultiLineField
              id="multiLinesFieldId"
              class="multi-lines-field-class"
              style="width: 300px"
              name="multi_lines_field_name"
              v-model="longTextValue"
              :isDisabled="false"
              :isReadonly="false"
              placeholder="placeholderText"
              :maxlength="500"
              :rows="3"
              :cols="30"
            />
            <div>{{ longTextValue }}</div>
          </div>
        </section>
        <section>
          <h3>NumberField</h3>
          <div>
            <NumberField
              id="numberFieldId"
              class="number-field-class"
              :style="{ backgroundColor: '#f0f0f0', border: '1px solid #ccc' }"
              name="number_field_name"
              :min="0"
              :max="7000"
              :isDisabled="false"
              :isReadonly="false"
              v-model="numberValue"
            />
          </div>
          <div>{{ numberValue }}</div>
        </section>
        <section>
          <h3>RadioField</h3>
          <div>
            <RadioField
              :items="radioItems"
              id="radioFieldId"
              class="radio-field-class"
              name="radio_field_name"
              accentColor="red"
              :isDisabled="false"
              :isReadonly="false"
              v-model="radioCheckedItem"
            />
          </div>
          <div>{{ radioCheckedItem }}</div>
        </section>
        <section>
          <h3>RangeField</h3>
          <div>
            <RangeField
              id="rangeFieldId"
              class="range-field-class"
              style="width: 300px"
              name="range_field_name"
              :min="0"
              :max="500"
              :step="5"
              :isDisabled="false"
              :isReadonly="false"
              v-model="rangeValue"
            />
          </div>
          <div>{{ rangeValue }}</div>
        </section>
        <section>
          <h3>SelectField</h3>
          <div>
            <SelectField
              :initText="'Please select an option'"
              :options="optionItems"
              v-model="selectedItem"
            />
          </div>
          <div>{{ selectedItem }}</div>
        </section>
        <section>
          <h3>TextField</h3>
          <div>
            <TextField
              id="textFieldId"
              class="text-field-class"
              style="width: 300px"
              name="text_field_name"
              :minlength="5"
              :maxlength="10"
              :isDisabled="false"
              :isReadonly="false"
              v-model="text"
              required
            />
          </div>
          <div><TextField type="password" :text="text2" v-model="text2" /></div>
          <div>{{ text }}</div>
          <div>{{ text2 }}</div>
        </section>

        <section>
          <h3>ToggleSwitch</h3>
          <small>There are S, M, and L sizes available.</small>
          <div style="margin-top: 15px; margin-bottom: 15px">
            <ToggleSwitch size="L" backgroundColor="red" v-model="toggleSwitchChecked" />
            <div>Checked：{{ toggleSwitchChecked }}</div>
          </div>
        </section>
      </template>
      <template v-slot:content3>
        <section>
          <h2>Img Icon</h2>
          <small
            >"The icon size can be either '128', '64', '32', or '18'. The default is '64'."</small
          >
          <div style="display: flex; height: 100px; margin-top: 15px; margin-bottom: 20px">
            <ImgIcon
              id="imgIconId"
              class="img-icon-class"
              style="border: 2px solid #000"
              path="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><path d='M10 10 H 90 V 90 H 10 Z' /></svg>"
              size="64"
              alt="Example Image"
            />
          </div>
        </section>
        <section>
          <h2>Svg Icon</h2>
          <small
            >"The icon size can be either '128', '64', '32', or '18'. The default is '64'."</small
          >
          <div>
            <SvgIcon
              id="svgIconId"
              class="svg-icon--class"
              style="color: red"
              :path="mdiAccount"
              size="64"
            />
          </div>
        </section>
      </template>
      <template v-slot:content4>
        <section>
          <h3>GridRow/GridColumn(Grid System)</h3>
          <GridRow>
            <GridColumn :lg_cols="3" :cols="6" :sm_cols="12">
              <p>Left</p>
            </GridColumn>
            <GridColumn :lg_cols="3" :cols="6" :sm_cols="12">
              <p>Right</p>
            </GridColumn>
          </GridRow>
        </section>
        <section>
          <h3>LayoutWrapper</h3>
          <LayoutWrapper style="border: 1px solid black"> LayoutWrapper Area </LayoutWrapper>
        </section>

        <section>
          <h2>LayoutHeader</h2>
          <LayoutHeader>
            <h1 class="ml-2">Re:Vue</h1>
            <div></div>
          </LayoutHeader>
        </section>
        <section>
          <h2>LayoutFooter</h2>
          <div style="margin-top: 15px; margin-bottom: 15px">
            <LayoutFooter><div>Revue</div></LayoutFooter>
          </div>
        </section>
        <section>
          <h2>NavBar</h2>
          <div>
            <div class="three-lines mr-2" @click="showNavBar">&equiv;</div>
          </div>
          <div>
            <NavBar :isVisible="navBarVisible" @close="closeNavBar">
              <NavBarItem to="/TEST" :icon="mdiInformationOutline" linkName="TEST" />
            </NavBar>
          </div>
        </section>
      </template>
      <template v-slot:content5>
        <section>
          <h2>AccordionMenu</h2>
          <div>
            <AccordionMenu
              id="accordionMenuId"
              class="accordion-menu--class"
              :style="{ backgroundColor: 'lightgray' }"
              :styleReset="false"
              :lists="[
                { title: 'リスト1', items: ['aaa', 'bbb', 'ccc'] },
                { title: 'リスト2', items: ['aaa', 'bbb', 'ccc'] }
              ]"
            />
          </div>
        </section>
        <section>
          <h2>Basic Lists</h2>
          <div>
            <BasicList
              id="basicListId"
              class="basic-list-class"
              :style="{ color: 'black' }"
              :styleReset="false"
              :items="[
                { id: '1', title: 'Custom Item #1', value: 1, href: '#' },
                { id: '2', title: 'Custom Item #2', value: 2 }
              ]"
              @update:value="(value) => console.log(value)"
            />
          </div>
        </section>
        <section>
          <h2>Todo Lists</h2>
          <div>
            <ToDoList
              id="toDoList"
              class="todo-list-class"
              :style="{ color: 'black' }"
              :styleReset="false"
              v-model="todos"
            />
            {{ todos }}
          </div>
        </section>
        <section>
          <h2>BreadcrumbList</h2>
          <BreadcrumbList
            :items="[
              { href: '/', name: 'home' },
              { href: '/about', name: 'about' },
              { name: 'current page' }
            ]"
            id="breadcrumbListId"
            class="breadcrumb-list-class"
            :style="{ color: 'tomato' }"
          />
        </section>
        <section>
          <h2>PaginateList</h2>
          <div>
            <ul>
              <li v-for="item in displayItems" :key="item.id">
                <span>{{ item.name_en }}</span>
              </li>
            </ul>
          </div>
          <div>
            <PaginateList
              id="paginateListId"
              :style="{ color: 'tomato' }"
              :items="items"
              steps="4"
              @handleAction="getDispItems"
            />
          </div>
        </section>
        <section>
          <h2>TreeList</h2>
          <div style="margin-top: 15px; margin-bottom: 15px">
            <TreeList
              id="tree-list"
              class="custom-tree-list"
              :style="{ color: 'black' }"
              :styleReset="false"
              :grandparents="[
                {
                  id: '1',
                  title: 'Grandparent #1',
                  href: 'https://example.com/grandparent',
                  parents: [
                    {
                      id: '1',
                      title: 'Parent #1',
                      href: 'https://example.com/parent',
                      children: [
                        {
                          id: '1',
                          title: 'Child #1',
                          href: 'https://example.com/child',
                          items: [
                            {
                              id: '1',
                              title: 'Item #1',
                              href: 'https://example.com/item1'
                            },
                            {
                              id: '2',
                              title: 'Item #2',
                              href: 'https://example.com/item2'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]"
            />
          </div>
        </section>
      </template>
      <template v-slot:content6>
        <section>
          <h3>DataTable</h3>
          <div style="margin-top: 15px; margin-bottom: 15px">
            <DataTable
              :search_mode="true"
              :pagination_mode="true"
              :headers="['Date', 'Title', 'Content']"
              :items="tableItems"
              v-model="targetData"
              steps="5"
            />{{ targetData }}
          </div>
        </section>
      </template>
    </TabPanel>
  </div>
</template>
<style>
section {
  margin: 20px;
}
</style>
