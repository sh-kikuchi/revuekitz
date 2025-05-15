import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MoneyField from '../../../../components/global/fields/MoneyField.vue'

describe('MoneyField', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(MoneyField)
    expect(wrapper.exists()).toBe(true)
    // You can add tests to verify that the component renders correctly with default props
  })

  it('formats the money value correctly', async () => {
    const wrapper = mount(MoneyField, {
      props: {
        modelValue: 1000
      }
    })
    await wrapper.vm.$nextTick() // Wait for the rendering to complete

    const input = wrapper.find('input')
    expect(input.element.value).toBe('1,000') // Verify that the money value is formatted correctly
  })

  it('emits update:modelValue event when value changes', async () => {
    const wrapper = mount(MoneyField)
    const input = wrapper.find('input')
    await input.setValue('2000') // Change the value of the input

    expect(wrapper.emitted('update:modelValue')).toBeTruthy() // Check that the update:modelValue event was emitted
    expect(wrapper.emitted('update:modelValue')?.at(0)?.at(0)).toBe('2,000') // Verify that the emitted value is correct
  })

  // Additional test cases can be added here
})
