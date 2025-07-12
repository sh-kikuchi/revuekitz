import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import ToolTip from '../../../../components/global/displays/ToolTip.vue'

describe('ToolTip.vue', () => {
  it('should not show tooltip by default', () => {
    const wrapper = shallowMount(ToolTip)
    expect(wrapper.find('.revuekitz-tool-tip-child').exists()).toBe(false)
  })

  it('should show tooltip on mouseenter', async () => {
    const wrapper = shallowMount(ToolTip)

    await wrapper.find('.revuekitz-tool-tip-container').trigger('mouseenter')
    expect(wrapper.find('.revuekitz-tool-tip-child').exists()).toBe(true)
  })

  it('should hide tooltip on mouseleave', async () => {
    const wrapper = shallowMount(ToolTip)

    await wrapper.find('.revuekitz-tool-tip-container').trigger('mouseenter')
    expect(wrapper.find('.revuekitz-tool-tip-child').exists()).toBe(true)

    await wrapper.find('.revuekitz-tool-tip-container').trigger('mouseleave')
    expect(wrapper.find('.revuekitz-tool-tip-child').exists()).toBe(false)
  })

  it('applies correct position class', async () => {
    const wrapper = shallowMount(ToolTip, {
      props: { position: 'left' }
    })

    await wrapper.find('.revuekitz-tool-tip-container').trigger('mouseenter')
    const child = wrapper.find('.revuekitz-tool-tip-child')
    expect(child.classes()).toContain('tooltip-left')
  })
})
