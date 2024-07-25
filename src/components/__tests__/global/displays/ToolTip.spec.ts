import { describe, it, expect } from 'vitest'
import ToolTip from '../../../../components/global/displays/ToolTip.vue'
import { shallowMount } from '@vue/test-utils'

describe('ToolTip', () => {
  it('shows child element when parent element is clicked', async () => {
    const wrapper = shallowMount(ToolTip)

    // Click on the parent element
    await wrapper.find('.revuekitz-tool-tip-parent').trigger('click')

    // Wait for DOM updates to complete
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.revuekitz-tool-tip-child').exists()).toBe(true)
  })

  it('hides child element when it is clicked', async () => {
    const wrapper = shallowMount(ToolTip)

    // Click on the parent element
    await wrapper.find('.revuekitz-tool-tip-parent').trigger('click')

    // Click on the child element
    await wrapper.find('.revuekitz-tool-tip-child').trigger('click')

    // Wait for DOM updates to complete
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.revuekitz-tool-tip-child').exists()).toBe(false)
  })

  it('shows child element again when parent element is clicked after child is hidden', async () => {
    const wrapper = shallowMount(ToolTip)

    // Click on the parent element
    await wrapper.find('.revuekitz-tool-tip-parent').trigger('click')

    // Click on the child element to hide it
    await wrapper.find('.revuekitz-tool-tip-child').trigger('click')

    // Click the parent element again to show the child
    await wrapper.find('.revuekitz-tool-tip-parent').trigger('click')

    // Wait for DOM updates to complete
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.revuekitz-tool-tip-child').exists()).toBe(true)
  })
})
