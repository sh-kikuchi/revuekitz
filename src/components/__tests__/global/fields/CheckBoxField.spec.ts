import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CheckBoxField from '../../../../components/global/fields/CheckBoxField.vue'

describe('CheckBoxField', () => {
  it('should render correctly with default props', () => {
    const wrapper = mount(CheckBoxField, {
      props: {
        item: 'Test Item'
      }
    })

    const input = wrapper.find('input[type="checkbox"]')
    const label = wrapper.find('label')

    // 正しくレンダリングされているか確認
    expect(input.exists()).toBe(true)
    expect(label.text()).toBe('')
  })

  it('should apply class and style correctly', () => {
    const wrapper = mount(CheckBoxField, {
      props: {
        item: 'Test Item',
        class: 'test-class',
        style: 'color: red;'
      }
    })

    const input = wrapper.find('input[type="checkbox"]')

    // クラスとスタイルが適用されているか確認
    expect(input.classes()).toContain('test-class')
    expect(input.attributes('style')).toBe('color: red;')
  })

  it('should be disabled or readonly based on props', () => {
    const wrapper = mount(CheckBoxField, {
      props: {
        item: 'Test Item',
        isDisabled: true,
        isReadonly: true
      }
    })

    const input = wrapper.find('input[type="checkbox"]')

    // disabledとreadonlyが正しく適用されているか確認
    expect(input.attributes('disabled')).toBeDefined()
    expect(input.attributes('readonly')).toBeDefined()
  })
})
