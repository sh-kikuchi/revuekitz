import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import DateField from '../../../../components/global/fields/DateField.vue'

describe('DateField.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(DateField, {
      props: {
        id: 'date-input',
        class: 'custom-class',
        name: 'date',
        style: 'width: 200px;',
        styleReset: false,
        type: 'date',
        dateValue: '',
        minlength: 5,
        maxlength: 10,
        isDisabled: false,
        isReadonly: false
      }
    })
  })

  it('renders with the correct default class', () => {
    expect(wrapper.classes()).toContain('revuekitz-date-field')
    expect(wrapper.classes()).toContain('custom-class')
  })

  it('renders with the correct style', () => {
    expect(wrapper.attributes('style')).toBe('width: 200px;')
  })

  it('emits update:modelValue when input changes', async () => {
    const input = wrapper.find('input')
    await input.setValue('2024-07-31')

    expect(wrapper.emitted()['update:modelValue']).toBeTruthy()
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['2024-07-31'])
  })

  it('applies readonly and disabled styles when props are set', async () => {
    await wrapper.setProps({ isReadonly: true })
    expect(wrapper.classes()).toContain('revuekitz-date-field')
    expect(wrapper.classes()).toContain('custom-class')
    expect(wrapper.attributes('readonly')).toBeDefined()

    await wrapper.setProps({ isDisabled: true })
    expect(wrapper.classes()).toContain('revuekitz-date-field')
    expect(wrapper.classes()).toContain('custom-class')
    expect(wrapper.attributes('disabled')).toBeDefined()
  })
})
