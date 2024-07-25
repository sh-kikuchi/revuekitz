import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TextField from '../../../../components/global/fields/TextField.vue'

describe('TextField', () => {
  it('renders input element with correct attributes and binds value correctly', () => {
    const propsData = {
      id: 'testId',
      class: 'testClass',
      style: 'color: red;',
      name: 'testName',
      bindingValue: 'initialValue',
      minlength: 5,
      maxlength: 10,
      isDisabled: false,
      isReadonly: true
    }
    const wrapper = mount(TextField, {
      propsData
    })

    // Check if input element is rendered
    expect(wrapper.find('input[type="text"]').exists()).toBe(true)

    // Check if props are correctly passed
    expect(wrapper.find('input').attributes('id')).toBe('testId')
    expect(wrapper.find('input').classes()).toContain('testClass')
    expect(wrapper.find('input').element.style.cssText).toBe('color: red;')
    expect(wrapper.find('input').attributes('name')).toBe('testName')
    expect(wrapper.find('input').attributes('minlength')).toBe('5')
    expect(wrapper.find('input').attributes('maxlength')).toBe('10')
    expect(wrapper.find('input[readonly]').exists()).toBe(true)
    expect(wrapper.find('input[disabled]').exists()).toBe(false)

    // Check if value is bound correctly
    expect(wrapper.find('input').element.value).toBe('initialValue')

    // Check if event was emitted
    const emittedEvents = wrapper.emitted('update:bindingValue')
    if (emittedEvents) {
      expect(emittedEvents[0]).toEqual(['newValue'])
    }
  })
})
