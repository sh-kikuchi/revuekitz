// src/index.ts
import { App } from 'vue'

// buttons
import BasicButton from './components/global/buttons/BasicButton.vue'
import LinkButton from './components/global/buttons/LinkButton.vue'
import PushButton from './components/global/buttons/PushButton.vue'

// displays
import CardFlame from './components/global/displays/CardFlame.vue'
import ChipText from './components/global/displays/ChipText.vue'
import CustomMessage from './components/global/displays/CustomMessage.vue'
import LoadingLoader from './components/global/displays/LoadingLoader.vue'
import ModalDialog from './components/global/displays/ModalDialog.vue'
import PageTitle from './components/global/displays/PageTitle.vue'
import TabPanel from './components/global/displays/TabPanel.vue'
import ToolTip from './components/global/displays/ToolTip.vue'

// fields
import CheckBoxField from './components/global/fields/CheckBoxField.vue'
import ColorField from './components/global/fields/ColorField.vue'
import DateField from './components/global/fields/DateField.vue'
import FileDnd from './components/global/fields/FileDnd.vue'
import FileField from './components/global/fields/FileField.vue'
import MoneyField from './components/global/fields/MoneyField.vue'
import MultiLineField from './components/global/fields/MultiLineField.vue'
import NumberField from './components/global/fields/NumberField.vue'
import RadioField from './components/global/fields/RadioField.vue'
import RangeField from './components/global/fields/RangeField.vue'
import SelectField from './components/global/fields/SelectField.vue'
import TextField from './components/global/fields/TextField.vue'
import ToggleSwitch from './components/global/fields/ToggleSwitch.vue'

// icons
import ImgIcon from './components/global/icons/ImgIcon.vue'
import SvgIcon from './components/global/icons/SvgIcon.vue'

// layouts
import GridColumn from './components/global/layouts/GridColumn.vue'
import GridRow from './components/global/layouts/GridRow.vue'
import LayoutFooter from './components/global/layouts/LayoutFooter.vue'
import LayoutHeader from './components/global/layouts/LayoutHeader.vue'
import LayoutWrapper from './components/global/layouts/LayoutWrapper.vue'
import NavBar from './components/global/layouts/NavBar.vue'
import NavBarItem from './components/global/layouts/NavBarItem.vue'

// lists
import AccordionMenu from './components/global/lists/AccordionMenu.vue'
import BasicList from './components/global/lists/BasicList.vue'
import BreadcrumbList from './components/global/lists/BreadcrumbList.vue'
import PaginateList from './components/global/lists/PaginateList.vue'
import TreeList from './components/global/lists/TreeList.vue'
import ToDoList from './components/global/lists/ToDoList.vue'

// tables
import DataTable from './components/global/tables/DataTable.vue'

const components = {
  BasicButton,
  LinkButton,
  PushButton,
  CardFlame,
  ChipText,
  CustomMessage,
  LoadingLoader,
  ModalDialog,
  PageTitle,
  TabPanel,
  ToolTip,
  CheckBoxField,
  ColorField,
  DateField,
  FileDnd,
  FileField,
  MoneyField,
  NumberField,
  RadioField,
  RangeField,
  SelectField,
  TextField,
  MultiLineField,
  ToggleSwitch,
  ImgIcon,
  SvgIcon,
  GridColumn,
  GridRow,
  LayoutFooter,
  LayoutHeader,
  LayoutWrapper,
  NavBar,
  NavBarItem,
  AccordionMenu,
  BasicList,
  BreadcrumbList,
  PaginateList,
  TreeList,
  DataTable,
  ToDoList
}

export default {
  install(app: App) {
    Object.keys(components).forEach((key) => {
      app.component(key, components[key])
    })
  }
}

export {
  BasicButton,
  LinkButton,
  PushButton,
  CheckBoxField,
  ColorField,
  DateField,
  FileDnd,
  FileField,
  MoneyField,
  NumberField,
  RadioField,
  RangeField,
  SelectField,
  TextField,
  MultiLineField,
  ToggleSwitch,
  GridColumn,
  GridRow,
  LayoutWrapper,
  BreadcrumbList,
  TabPanel,
  NavBar,
  NavBarItem,
  PaginateList,
  LayoutFooter,
  LayoutHeader,
  PageTitle,
  ChipText,
  CardFlame,
  CustomMessage,
  LoadingLoader,
  DataTable,
  AccordionMenu,
  BasicList,
  TreeList,
  ToolTip,
  ModalDialog,
  ImgIcon,
  SvgIcon,
  ToDoList
}
