import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Chip from '../../../../components/global/displays/ChipText.vue'

describe('Chip', () => {
  it('renders with default props', () => {
    const wrapper = mount(Chip)

    // Ensure the component renders correctly
    expect(wrapper.exists()).toBe(true)

    // Ensure default class is applied
    expect(wrapper.classes()).toContain('revuekitz-chip')

    // Ensure default styles are applied
    expect(wrapper.attributes('style')).toBe('')

    // Ensure default slot content exists
    expect(wrapper.text()).toBe('')
  })

  it('renders with custom props', async () => {
    const wrapper = mount(Chip, {
      props: {
        id: 'custom-id',
        class: 'custom-class',
        style: 'color: red;',
        styleReset: true
      },
      slots: {
        default: 'Custom Chip'
      }
    })

    // Ensure custom props are correctly applied
    expect(wrapper.attributes('id')).toBe('custom-id')
    expect(wrapper.classes()).toContain('custom-class')
    expect(wrapper.attributes('style')).toBe('color: red;')

    // Ensure slot content is rendered
    expect(wrapper.text()).toBe('Custom Chip')
  })
})
