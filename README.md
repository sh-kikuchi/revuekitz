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

#### Tables

- [DataTable](https://sh-revue.net/documents/revuekitz/701_data_table)

#### Calendars

- [EventCalendar](https://sh-revue.net/documents/revuekitz/801_event_calendar)

### 5. Release Note

#### # Updates in v1.4.1

<small>Released on 2026-10-10</small>

##### Required Validation (Add)

- Added an `isRequired` prop to `TextField`, `MultiLineField`, `DateField`, `NumberField`, `SelectField`, `RadioField`, `CheckBoxField`, `FileField`, and `MoneyField`, mapped to the native HTML `required` attribute.
  `TextField`・`MultiLineField`・`DateField`・`NumberField`・`SelectField`・`RadioField`・`CheckBoxField`・`FileField`・`MoneyField`に`isRequired`propを追加し、ネイティブのHTML`required`属性と連動するようにしました。

- `MoneyField` previously always rendered with a hardcoded `required` attribute; this is now controlled by `isRequired` (default `false`). If you relied on the old always-required behavior, pass `:isRequired="true"` explicitly.
  `MoneyField`は以前は`required`属性が常に固定で付与されていましたが、`isRequired`（デフォルト`false`）で制御できるように変更しました。従来の常に必須だった挙動に依存していた場合は、明示的に`:isRequired="true"`を指定してください。

##### Disabled / Readonly Consistency (Add)

- Added `isDisabled` / `isReadonly` props to `ColorField`, `ToggleSwitch`, `SelectField`, and `FileDnd`, matching the other field components. Since native `readonly` has no effect on checkboxes and `<select>`, readonly behavior for `ToggleSwitch` and `SelectField` is enforced by reverting the value on change.
  `ColorField`・`ToggleSwitch`・`SelectField`・`FileDnd`に`isDisabled`/`isReadonly`propを追加し、他のFieldコンポーネントと仕様を揃えました。チェックボックスや`<select>`はネイティブの`readonly`が効かないため、`ToggleSwitch`と`SelectField`では変更イベント側で値を戻すことで読み取り専用の挙動を実現しています。

##### MultiLineField Improvements (Fix/Add)

- Fixed `resize`, which was previously bound as an invalid HTML attribute and had no effect; it is now merged into `style` correctly.
  これまで無効なHTML属性としてバインドされ効果がなかった`resize`を、`style`に正しくマージされるように修正しました。

- Added a character counter (`current length / maxlength`) shown below the textarea when `maxlength` is set, turning blue while under `minlength` and red once `maxlength` is reached.
  `maxlength`を設定した場合にテキストエリア下へ文字数カウンター（`現在の文字数 / maxlength`）を表示するようにしました。`minlength`未達時は青字、`maxlength`到達時は赤字になります。

##### DataTable Width Options (Add)

- Added `tableWidth` and `columnWidths` props to control the overall table width and per-column widths via `<colgroup>`.
  テーブル全体の幅と列ごとの幅を`<colgroup>`で指定できる`tableWidth`・`columnWidths`propを追加しました。

#### # Updates in v1.4.0

<small>Released on 2026-07-31</small>

##### TypeScript Support (Update)

- Improved TypeScript support across RevueKitz components.
  RevueKitz全体でTypeScript対応を強化しました。

- Added and refined type definitions for props, events, and component APIs.
  Props・イベント・コンポーネントAPIの型定義を追加・改善しました。

- Fixed various TypeScript errors and warnings to improve compatibility with modern Vue tooling.
  最新のVue開発環境で発生するTypeScriptのエラーや警告を修正しました。

##### Vue Ecosystem Upgrade

- Upgraded the project to the latest Vue 3 ecosystem.
  Vue 3エコシステムを最新バージョンへアップデートしました。

- Updated development dependencies, including Vite, Vue Plugin, TypeScript, and related tooling.
  Vite・Vue Plugin・TypeScriptをはじめとする開発ツールを最新版へ更新しました。

- Improved compatibility with recent versions of Vue, Vite, and `vue-tsc`.
  最新のVue・Vite・`vue-tsc`との互換性を向上させました。

##### Internal Improvements

- Refactored component typings for better IDE autocompletion and type inference.
  コンポーネントの型定義を見直し、IDEでの補完や型推論を改善しました。

- Improved maintainability and developer experience for future component development.
  保守性および開発体験（Developer Experience）を向上させました。

##### Notes

- This release mainly focuses on TypeScript support and dependency updates. No major API changes have been introduced.
  今回のリリースは、TypeScript対応と依存ライブラリの更新が中心です。大きなAPI変更はありません。
