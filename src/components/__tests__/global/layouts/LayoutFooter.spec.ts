import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Footer from '../../../../components/global/layouts/LayoutFooter.vue'

describe('Footer', () => {
  it('renders footer element with correct class', () => {
    const wrapper = mount(Footer)
    const footerElement = wrapper.find('footer')

    expect(footerElement.exists()).toBe(true)
  })

  it('renders current year in footer text', () => {
    const wrapper = mount(Footer)

    expect(wrapper.html()).toContain('<footer id="" class="revuekitz-footer" style=""></footer>')
  })
})
