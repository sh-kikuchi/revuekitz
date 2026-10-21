## Revuekitz

<small> Powered by Re:vue</small>

### 1. Overview

- "revuekitz" is a UI component library for Vue.js. I collected atomic and molecular level components based on atomic design from my site called [Re:vue](https://sh-revue.net/) and turned them into a library.  
  "revuekitz" は Vue.js 向けの UI コンポーネントライブラリです。私のサイト [Re:vue](https://sh-revue.net/) で提供していた Atomic / Molecular レベルのコンポーネントをまとめ、ライブラリ化しました。

### 2. Project Code is "Ranunculus"

- In the language of flowers, the ranunculus symbolizes radiant charm and attractiveness. This symbolism perfectly mirrors our aspiration for the revuekitz library: to bring a radiant charm to web development and empower developers to create visually appealing and highly functional interfaces effortlessly. Just as the ranunculus flower stands out with its beauty, we aim for revuekitz to stand out with its elegance and efficiency in the world of UI components.  
  花言葉で「ラナンキュラス」は輝く魅力や華やかさを象徴します。この象徴性は、revuekitz ライブラリの目指すところと完全に一致します。ウェブ開発に華やかさをもたらし、開発者が美しく機能的な UI を簡単に構築できるようにすることが目標です。ラナンキュラスの花がその華やかさで際立つように、revuekitz もその優雅さと高い効率性で際立つライブラリを目指しています。

### 3. How to Use

> [!IMPORTANT] > **Stylesheet path changed (v1.4.3~)**
> The CSS file is now `revuekitz/dist/revuekitz.css`. The old path `revuekitz/dist/style.css` still works for now, but it is deprecated and will be removed in a future major version. Please update your import.  
> CSS ファイルのパスが `revuekitz/dist/revuekitz.css` に変わりました。旧パス `revuekitz/dist/style.css` も当面は使えますが非推奨で、今後のメジャーバージョンで削除予定です。import の書き換えをお願いします。
>
> ```js
> // Before
> import 'revuekitz/dist/style.css'
> // After
> import 'revuekitz/dist/revuekitz.css'
> ```

```js
npm install revuekitz
```

When importing components

```js
import 'revuekitz/dist/revuekitz.css' // Import styles
import { BasicButton } from 'revuekitz'
```

### 4. UI Kitz

#### Buttons

- [BasicButton](https://sh-revue.net/documents/revuekitz/101_basic_button)
- [LinkButton](https://sh-revue.net/documents/revuekitz/102_link_button)
- [PushButton](https://sh-revue.net/documents/revuekitz/103_push_button)

#### Displays

- [CardFlame](https://sh-revue.net/documents/revuekitz/201_card_flame)
- [ChipText](https://sh-revue.net/documents/revuekitz/202_chip_text)
- [CustomMessage](https://sh-revue.net/documents/revuekitz/203_custom_message)
- [LoadingLoader](https://sh-revue.net/documents/revuekitz/204_loading_loader)
- [ModalDialog](https://sh-revue.net/documents/revuekitz/205_modal_dialog)
- [PageTitle](https://sh-revue.net/documents/revuekitz/206_page_title)
- [TabPanel](https://sh-revue.net/documents/revuekitz/207_tab_panel)
- [ToolTip](https://sh-revue.net/documents/revuekitz/208_tool_tip)

#### Fields

- [CheckBoxField](https://sh-revue.net/documents/revuekitz/301_check_box_field)
- [ColorField](https://sh-revue.net/documents/revuekitz/302_color_field)
- [DateField](https://sh-revue.net/documents/revuekitz/303_date_field)
- [FileDnd](https://sh-revue.net/documents/revuekitz/304_file_dnd)
- [FileField](https://sh-revue.net/documents/revuekitz/305_file_field)
- [MoneyField](https://sh-revue.net/documents/revuekitz/306_money_field)
- [MultiLineField](https://sh-revue.net/documents/revuekitz/307_multi_line_field)
- [NumberField](https://sh-revue.net/documents/revuekitz/308_number_field)
- [RadioField](https://sh-revue.net/documents/revuekitz/309_radio_field)
- [RangeField](https://sh-revue.net/documents/revuekitz/310_range_field)
- [SelectField](https://sh-revue.net/documents/revuekitz/311_select_field)
- [TextField](https://sh-revue.net/documents/revuekitz/312_text_field)
- [ToggleSwitch](https://sh-revue.net/documents/revuekitz/313_toggle_switch)

#### Icons

- [ImgIcon](https://sh-revue.net/documents/revuekitz/401_img_icon)
- [SvgIcon](https://sh-revue.net/documents/revuekitz/402_svg_icon)

#### Layouts

- [GridColumn](https://sh-revue.net/documents/revuekitz/501_grid_column)
- [GridRow](https://sh-revue.net/documents/revuekitz/502_grid_row)
- [LayoutFooter](https://sh-revue.net/documents/revuekitz/503_layout_footer)
- [LayoutHeader](https://sh-revue.net/documents/revuekitz/504_layout_header)
- [LayoutWrapper](https://sh-revue.net/documents/revuekitz/505_layout_wrapper)
- [NavBar](https://sh-revue.net/documents/revuekitz/506_nav_bar)
- [NavBarItem](https://sh-revue.net/documents/revuekitz/507_nav_list_item)

#### Lists

- [AccordionMenu](https://sh-revue.net/documents/revuekitz/601_accordion_menu)
- [BasicList](https://sh-revue.net/documents/revuekitz/602_basic_list)
- [BreadcrumbList](https://sh-revue.net/documents/revuekitz/603_breadcumb_list)
- [PaginateList](https://sh-revue.net/documents/revuekitz/604_paginate_list)
- [TreeList](https://sh-revue.net/documents/revuekitz/605_tree_list)
- [ToDoList](https://sh-revue.net/documents/revuekitz/606_to_do_list)

#### Tables

- [DataTable](https://sh-revue.net/documents/revuekitz/701_data_table)

#### Calendars

- [EventCalendar](https://sh-revue.net/documents/revuekitz/801_event_calendar)

### 5. Release Note

#### # Updates in v1.4.4

<small>Released on 2026-10-21</small>

##### RadioField Improvements (Fix/Add/Update)

- Fixed the selected state so it is driven only by `modelValue`. The initial value is now reflected reliably, and the selection follows when the parent changes `modelValue` after mount.
  選択状態を`modelValue`だけで決めるように修正しました。初期値が確実に反映され、マウント後に親から`modelValue`を変更した場合も選択が追従します。

- Fixed `name` being split into one character per radio, which prevented the radios from forming a single group. All radios now share the same `name` (no `name` attribute when it is not specified).
  `name`が1文字ずつ各ラジオに割り当てられ、ラジオが1つのグループにまとまっていなかった不具合を修正しました。全ラジオに同じ`name`が付きます（未指定時は`name`属性なし）。

- `isReadonly` now prevents the selection from changing on click, since native `readonly` has no effect on radio buttons.
  ラジオボタンではネイティブの`readonly`が効かないため、`isReadonly`指定時はクリックで選択が変わらないようにしました。

- `items` now accepts `{ text, value }` objects in addition to strings, so the label and value can differ. Strings keep working as before, and both forms can be mixed.
  `items`に文字列に加えて`{ text, value }`形式のオブジェクトも渡せるようにし、ラベルと値を別々に指定できるようにしました。従来の文字列もそのまま使え、混在も可能です。

- **Breaking:** The `id` of each radio input changed from the item value to `{id}-{index}` (an auto-generated unique prefix is used when `id` is not set). This prevents duplicate ids when the same items are used in multiple fields. If your CSS or tests relied on the old ids, please update them.
  **破壊的変更：** 各ラジオの`id`を、項目の値から`{id}-{index}`の形式に変更しました（`id`未指定時は自動生成の一意な接頭辞を使用）。同じ選択肢のRadioFieldを複数置いても`id`が重複しなくなります。旧`id`に依存したCSSやテストがある場合は修正してください。

###### Usage / 使用例

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { RadioField } from 'revuekitz'

// Pattern 1: string items (label = value) / 文字列（ラベル＝値）
const color = ref('Blue')
const colorItems = ['Red', 'Blue', 'Green']

// Pattern 2: { text, value } items (label ≠ value) / ラベルと値を分ける
const plan = ref('pro')
const planItems = [
  { text: 'Free plan', value: 'free' },
  { text: 'Pro plan', value: 'pro' }
]
</script>

<template>
  <RadioField v-model="color" name="color" :items="colorItems" />
  <RadioField v-model="plan" name="plan" :items="planItems" />
  <!-- plan === 'pro' → "Pro plan" is selected / 「Pro plan」が選択された状態で表示 -->
</template>
```
