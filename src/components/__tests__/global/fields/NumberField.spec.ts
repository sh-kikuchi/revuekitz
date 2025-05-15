import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NumberField from '../../../../components/global/fields/NumberField.vue'

describe('NumberField', () => {
  it('renders input element with correct attributes and binds value correctly', () => {
    const number = 100 // Assuming the number prop is set to 100
    const wrapper = mount(NumberField, {
      props: {
        id: 'testId',
        class: 'testClass',
        style: 'color: red;',
        name: 'testName',
        modelValue: number,
        min: 0,
        max: 100,
        isDisabled: true,
        isReadonly: false
      }
    })

    // Get the target input element
    const inputElement = wrapper.find('input[type="number"]')

    // Check that the element exists
    expect(inputElement.exists()).toBe(true)

    // Verify that each attribute is bound correctly
    expect(inputElement.attributes('id')).toBe('testId')
    expect(inputElement.attributes('class')).toBe('revuekitz-number-field testClass')
    expect(inputElement.attributes('style')).toBe('color: red;')
    expect(inputElement.attributes('name')).toBe('testName')
    expect(wrapper.find('input').element.value).toBe('100')
    expect(inputElement.attributes('min')).toBe('0')
    expect(inputElement.attributes('max')).toBe('100')
    expect(wrapper.find('input[readonly]').exists()).toBe(false)
    expect(wrapper.find('input[disabled]').exists()).toBe(true)
  })

  it('correctly updates value when input changes', async () => {
    const wrapper = mount(NumberField, {
      props: {
        number: 10
      }
    })

    // Get the target input element
    const inputElement = wrapper.find('input[type="number"]')

    // Change the value of the input element
    await inputElement.setValue('20')

    // Verify that the value is updated correctly
    expect(wrapper.find('input').element.value).toBe('20')
  })
})
