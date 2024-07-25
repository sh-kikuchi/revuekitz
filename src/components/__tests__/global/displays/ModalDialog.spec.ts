import { describe, it, expect } from 'vitest'
import ModalDialog from '../../../../components/global/displays/ModalDialog.vue'
import { mount } from '@vue/test-utils'

describe('ModalDialog.vue', () => {
  it('renders when isVisible is true', async () => {
    const wrapper = mount(ModalDialog, {
      props: { isVisible: true }
    })
    expect(wrapper.find('.revuekitz-modal-dialog-overlay').isVisible()).toBe(true)
  })

  it('does not render when isVisible is false', async () => {
    const wrapper = mount(ModalDialog, {
      props: { isVisible: false }
    })
    expect(wrapper.find('.revuekitz-modal-dialog-overlay').isVisible()).toBe(false)
  })

  it('renders slot content', async () => {
    const wrapper = mount(ModalDialog, {
      props: { isVisible: true },
      slots: {
        default: '<div class="slot-content">Slot Content</div>'
      }
    })
    expect(wrapper.find('.slot-content').exists()).toBe(true)
    expect(wrapper.find('.slot-content').text()).toBe('Slot Content')
  })

  it('applies custom classes and styles', async () => {
    const wrapper = mount(ModalDialog, {
      props: {
        isVisible: true,
        class: 'custom-class',
        style: 'color: red;'
      }
    })
    expect(wrapper.find('.revuekitz-modal-dialog').classes()).toContain('custom-class')
    expect(wrapper.find('.revuekitz-modal-dialog').attributes('style')).toBe('color: red;')
  })

  it('emits close event when close button is clicked', async () => {
    const wrapper = mount(ModalDialog, {
      props: { isVisible: true }
    })
    await wrapper.find('.revuekitz-modal-dialog-close-btn').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
  })
})
