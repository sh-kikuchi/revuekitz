import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ToggleSwitch from '../../../../components/global/fields/ToggleSwitch.vue'

describe('ToggleSwitch.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ToggleSwitch, {
      props: {
        id: 'toggle-switch',
        backgroundColor: '#2196f3',
        size: 'M',
        isChecked: false
      }
    })
  })

  it('renders with the correct default classes', () => {
    expect(wrapper.classes()).toContain('revuekitz-toggle-switch')
    expect(wrapper.classes()).toContain('medium')
  })

  it('renders with the correct background color', () => {
    const slider = wrapper.find('.slider')
    expect(slider.element.style.backgroundColor).toBe('rgb(33, 150, 243)') // Hex color to RGB
  })

  it('emits update:val when toggled', async () => {
    await wrapper.find('input').setChecked(true)
    expect(wrapper.emitted()['update:val']).toBeTruthy()
    expect(wrapper.emitted()['update:val'][0]).toEqual([true])

    await wrapper.find('input').setChecked(false)
    expect(wrapper.emitted()['update:val'][1]).toEqual([false])
  })

  it('computes the correct size classes based on props', async () => {
    expect(wrapper.classes()).toContain('medium')

    await wrapper.setProps({ size: 'S' })
    expect(wrapper.classes()).toContain('small')

    await wrapper.setProps({ size: 'L' })
    expect(wrapper.classes()).toContain('large')
  })
})
