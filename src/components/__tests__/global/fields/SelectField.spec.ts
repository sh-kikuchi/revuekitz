import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SelectField from '../../../../components/global/fields/SelectField.vue'

describe('SelectField', () => {
  it('renders the select component with default values', () => {
    const wrapper = mount(SelectField, {
      props: {
        items: [
          { text: 'One', value: 'A' },
          { text: 'Two', value: 'B' },
          { text: 'Three', value: 'C' }
        ],
        class: 'test'
      }
    })

    // Check if select element exists
    const selectElement = wrapper.find('select')
    expect(selectElement.exists()).toBe(true)

    // Check if default option is rendered
    const defaultOption = selectElement.find('option')
    expect(defaultOption.text()).toBe('選択してください')
    expect(defaultOption.attributes('value')).toBe('選択してください')

    // Check if options are rendered correctly
    const options = selectElement.findAll('option')
    expect(options.length).toBe(4) // 3 options + 1 default
    expect(options[1].text()).toBe('One')
    expect(options[1].attributes('value')).toBe('A')
    expect(options[2].text()).toBe('Two')
    expect(options[2].attributes('value')).toBe('B')
    expect(options[3].text()).toBe('Three')
    expect(options[3].attributes('value')).toBe('C')

    // Check if default props are applied correctly
    expect(selectElement.attributes('id')).toBe('radio')
    // expect(selectElement.classes()).toContain('test')
    expect(selectElement.attributes('name')).toBe('')
  })

  it('emits update:modelValue event on change', async () => {
    const wrapper = mount(SelectField, {
      props: {
        items: [
          { text: 'One', value: 'A' },
          { text: 'Two', value: 'B' },
          { text: 'Three', value: 'C' }
        ]
      }
    })

    // Simulate selection change
    await wrapper.find('select').setValue('B')

    // Check if update:modelValue event is emitted with correct value
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['B'])
  })
})
