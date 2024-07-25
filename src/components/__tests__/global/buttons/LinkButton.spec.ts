import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import LinkButton from '../../../../components/global/buttons/LinkButton.vue'

describe('LinkButton.vue', () => {
  it('renders button with default props', () => {
    const wrapper = mount(LinkButton)

    console.log(wrapper.find('button'))

    // Asserts
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('button').attributes('class')).toContain('button')
    expect(wrapper.find('button a').exists()).toBe(true) // No anchor tag by default
  })

  it('renders button with provided props', () => {
    const wrapper = mount(LinkButton, {
      props: {
        id: 'test-id',
        class: 'custom-class',
        name: 'test-name',
        type: 'submit',
        style: 'color: white; background-color: red;',
        href: 'https://example.com'
      }
    })

    // Asserts
    expect(wrapper.find('button').attributes('id')).toBe('test-id')
    expect(wrapper.find('button').attributes('class')).toContain('custom-class')
    expect(wrapper.find('button').attributes('name')).toBe('test-name')
    expect(wrapper.find('button').attributes('type')).toBe('submit')
    expect(wrapper.find('button').attributes('style')).toContain('color: white;')
    expect(wrapper.find('button').attributes('style')).toContain('background-color: red;')
    expect(wrapper.find('button a').attributes('href')).toBe('https://example.com')
    expect(wrapper.find('button a').attributes('target')).toBe('_blank')
    expect(wrapper.find('button').attributes('disabled')).toBe(undefined)
  })

  it('emits click event when button is clicked', async () => {
    const wrapper = mount(LinkButton)

    // Trigger click
    await wrapper.find('button').trigger('click')

    // Asserts
    expect(wrapper.emitted().click).toBeTruthy()
  })

  it('accepts isDisabled prop', () => {
    const wrapper = mount(LinkButton, {
      props: {
        isDisabled: true
      }
    })
    const button = wrapper.find('button')
    expect(button.attributes('disabled')).toBe('')
  })
})
