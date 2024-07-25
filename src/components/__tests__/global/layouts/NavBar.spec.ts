import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NavBar from '../../../../components/global/layouts/NavBar.vue'

describe('NavBar', () => {
  it('should render the component', async () => {
    const wrapper = mount(NavBar, {
      props: {
        isVisible: true
      }
    })

    // Check if the component is rendered
    expect(wrapper.find('.revuekitz-navigation').exists()).toBe(true)
  })

  it('should hide the component', async () => {
    const wrapper = mount(NavBar, {
      props: {
        isVisible: false
      }
    })
    await wrapper.vm.$nextTick()

    // Check if the component is hidden
    const navigationContentElement = wrapper.find('.revuekitz-navigation-content')
      .element as HTMLElement
    expect(navigationContentElement.style.display).toBe('none')
  })

  it('should close the component', async () => {
    const wrapper = mount(NavBar, {
      props: {
        isVisible: true
      }
    })

    // Check if the component is closed
    await wrapper.find('.revuekitz-navigation').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
  })
})
