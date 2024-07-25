import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Card from '../../../../components/global/displays/CardFlame.vue'

describe('Card', () => {
  it('renders with default class when styleReset is true', async () => {
    const wrapper = mount(Card, {
      props: {
        id: 'test-id',
        class: 'custom-class',
        style: 'color: red;',
        styleReset: true
      },
      slots: {
        default: '<p>Test content</p>'
      }
    })

    // Check that the custom class is applied and the default class is not
    expect(wrapper.classes()).toContain('custom-class')
    expect(wrapper.classes()).not.toContain('revuekitz-card')

    // Check that the style attribute is applied
    expect(wrapper.attributes('style')).toBe('color: red;')

    // Verify that the rendered content is correct
    expect(wrapper.find('.revuekitz-card-content').text()).toBe('Test content')

    // Ensure the slot content is rendered correctly
    expect(wrapper.text()).toContain('Test content')
  })

  it('renders with default and additional class when styleReset is false', async () => {
    const wrapper = mount(Card, {
      props: {
        id: 'test-id',
        class: 'custom-class',
        style: 'color: blue;',
        styleReset: false
      },
      slots: {
        default: '<p>Test content</p>'
      }
    })

    // Check that both the default and custom classes are applied
    expect(wrapper.classes()).toContain('revuekitz-card')
    expect(wrapper.classes()).toContain('custom-class')

    // Check that the style attribute is applied
    expect(wrapper.attributes('style')).toBe('color: blue;')

    // Verify that the rendered content is correct
    expect(wrapper.find('.revuekitz-card-content').text()).toBe('Test content')

    // Ensure the slot content is rendered correctly
    expect(wrapper.text()).toContain('Test content')
  })
})
