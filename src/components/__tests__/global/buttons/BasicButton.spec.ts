import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BasicButton from '../../../../components/global/buttons/BasicButton.vue'

describe('BasicButton.vue', () => {
  it('renders button with default props', () => {
    const wrapper = mount(BasicButton)

    // Asserts
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('button').attributes('type')).toBe('button')
    expect(wrapper.find('button').attributes('class')).toContain('button')
    expect(wrapper.find('button').attributes('style')).toBe('')
  })

  it('renders button with provided props', () => {
    const wrapper = mount(BasicButton, {
      props: {
        id: 'test-id',
        class: 'custom-class',
        name: 'test-name',
        type: 'submit',
        style: 'color: white; background-color: red;'
      }
    })

    // Asserts
    expect(wrapper.find('button').attributes('id')).toBe('test-id')
    expect(wrapper.find('button').attributes('class')).toContain('custom-class')
    expect(wrapper.find('button').attributes('name')).toBe('test-name')
    expect(wrapper.find('button').attributes('type')).toBe('submit')
    expect(wrapper.find('button').attributes('style')).toContain('color: white;')
    expect(wrapper.find('button').attributes('style')).toContain('background-color: red;')
    expect(wrapper.find('button').attributes('disabled')).toBe(undefined)
  })

  it('emits click event when button is clicked', async () => {
    const wrapper = mount(BasicButton)

    // Trigger click
    await wrapper.find('button').trigger('click')

    // Asserts
    expect(wrapper.emitted().click).toBeTruthy()
  })
  it('accepts isDisabled prop', () => {
    const wrapper = mount(BasicButton, {
      props: {
        isDisabled: true
      }
    })
    const button = wrapper.find('button')
    expect(button.attributes('disabled')).toBe('')
  })
})
