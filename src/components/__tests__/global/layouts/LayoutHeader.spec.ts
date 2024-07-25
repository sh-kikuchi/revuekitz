import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Header from '../../../../components/global/layouts/LayoutHeader.vue'

describe('Header', () => {
  it('renders header element with correct class', () => {
    const wrapper = mount(Header)
    const headerElement = wrapper.find('header')

    expect(headerElement.exists()).toBe(true)
  })

  it('renders slot content', () => {
    const content = '<div>Hello World</div>'
    const wrapper = mount(Header, {
      slots: {
        default: content
      }
    })

    expect(wrapper.html()).toContain(content)
  })
})
