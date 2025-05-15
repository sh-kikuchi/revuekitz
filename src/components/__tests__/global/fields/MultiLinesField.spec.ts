import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MultiLineField from '../../../../components/global/fields/MultiLineField.vue'

describe('MultiLineField', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(MultiLineField)

    // Check if the MultiLineField element exists
    expect(wrapper.find('textarea').exists()).toBe(true)

    // Check default props
    expect(wrapper.props('id')).toBe('')
    expect(wrapper.props('class')).toBe('')
    expect(wrapper.props('name')).toBe('')
    expect(wrapper.props('isDisabled')).toBe(false)
    expect(wrapper.props('isReadonly')).toBe(false)
    expect(wrapper.props('placeholder')).toBe('')
    expect(wrapper.props('maxlength')).toBe(null)
    expect(wrapper.props('minlength')).toBe(0)
    expect(wrapper.props('rows')).toBe(5)
    expect(wrapper.props('cols')).toBe(30)
    expect(wrapper.props('text')).toBe('')
  })

  it('emits input event with updated value', async () => {
    const wrapper = mount(MultiLineField)

    // Simulate user input
    await wrapper.find('textarea').setValue('Updated value')

    // Check if the emitted event is correct
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    const emittedEvent = wrapper.emitted('update:modelValue')
    expect(emittedEvent).toBeTruthy()
    if (emittedEvent) {
      expect(emittedEvent[0]).toEqual(['Updated value'])
    }
  })

  it('renders correctly when disabled or readonly', async () => {
    const wrapper = mount(MultiLineField, {
      props: {
        isDisabled: true,
        isReadonly: true
      }
    })

    expect(wrapper.find('textarea[readonly]').exists()).toBe(true)
    expect(wrapper.find('textarea[disabled]').exists()).toBe(true)
  })

  // Add more test cases as needed
})
