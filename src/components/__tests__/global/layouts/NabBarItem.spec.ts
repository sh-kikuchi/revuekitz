import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NavBarItem from '../../../global/layouts/NavBarItem.vue'
import SvgIcon from '../../../global/icons/SvgIcon.vue'

describe('NavigationItem.vue', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(NavBarItem)

    // Check if the default linkName is rendered
    expect(wrapper.find('.link-name').text()).toBe('home')

    // Check if the default icon path is passed correctly
    const svgIcon = wrapper.findComponent(SvgIcon)
    expect(svgIcon.props('path')).toBe('mdi-home')
  })

  it('renders correct linkName and icon path when props are passed', () => {
    const props = {
      to: '/about',
      icon: 'mdi-about',
      linkName: 'About Us'
    }
    const wrapper = mount(NavBarItem, {
      props
    })

    // Check if the passed linkName is rendered
    expect(wrapper.find('.link-name').text()).toBe('About Us')

    // Check if the passed icon path is passed correctly
    const svgIcon = wrapper.findComponent(SvgIcon)
    expect(svgIcon.props('path')).toBe('mdi-about')
  })
})
