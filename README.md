## Revuekitz

<small> Powered by Re:vue</small>

### 1. Overview

- "revuekitz" is a UI component library for Vue.js. I collected atomic and molecular level components based on atomic design from my site called [Re:vue](https://sh-revue.net/) and turned them into a library.  
  "revuekitz" は Vue.js 向けの UI コンポーネントライブラリです。私のサイト [Re:vue](https://sh-revue.net/) で提供していた Atomic / Molecular レベルのコンポーネントをまとめ、ライブラリ化しました。

### 2. Project Code is "Ranunculus"

- In the language of flowers, the ranunculus symbolizes radiant charm and attractiveness. This symbolism perfectly mirrors our aspiration for the revuekitz library: to bring a radiant charm to web development and empower developers to create visually appealing and highly functional interfaces effortlessly. Just as the ranunculus flower stands out with its beauty, we aim for revuekitz to stand out with its elegance and efficiency in the world of UI components.  
  花言葉で「ラナンキュラス」は輝く魅力や華やかさを象徴します。この象徴性は、revuekitz ライブラリの目指すところと完全に一致します。ウェブ開発に華やかさをもたらし、開発者が美しく機能的な UI を簡単に構築できるようにすることが目標です。ラナンキュラスの花がその華やかさで際立つように、revuekitz もその優雅さと高い効率性で際立つライブラリを目指しています。

### 3. How to Use

```js
npm install revuekitz
```

When importing components

```js
import 'revuekitz/dist/style.css' // Import styles
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

#### Table

- [DataTable](https://sh-revue.net/documents/revuekitz/701_data_table)

### 5. Release Note

#### Updates in v1.2.2

<small>Released on 2025-09-22</small>

- **ToDoList**

  - Fix bug in initial value check
    初期値チェックのバグ修正

<small>Released on 2025-09-21</small>

- **FileField**

  - Minor update for checking default/initial values
    複数ファイル選択 (`multiple`) に対応しました。
  - Supports `v-model` to retrieve the selected file array.  
    `v-model` で選択したファイル配列を取得できるようになりました。
  - Added `accept` property to specify allowed file types.  
    `accept` プロパティで許可するファイルタイプを指定できるようになりました。

- **FileDnd** (New)
  - Introduced a new component that allows selecting files via drag & drop.  
    ドラッグ＆ドロップでファイルを選択できる新しいコンポーネントを追加しました。
  - Supports `v-model` to retrieve the selected file array.  
    `v-model` で選択したファイル配列を取得可能です。
  - Internally uses `FileField`, so traditional file selection via click is still available.  
    内部で `FileField` を使用しているため、従来のクリックによるファイル選択も利用できます。

> With this update, users can now upload files more intuitively, either by clicking to select or by dragging and dropping them directly.  
> このアップデートにより、ユーザーはファイルをクリックして選択する方法に加え、ドラッグ＆ドロップで直感的にアップロードできるようになりました。  
> For more details, please refer to the component documentation.  
> 詳細はコンポーネントのドキュメントをご参照ください。
