import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PageTitle from '../../../../components/global/displays/PageTitle.vue'

describe('PageTitle', () => {
  it('renders title correctly when styleReset is false', () => {
    const wrapper = mount(PageTitle, {
      props: {
        title: 'Test Title'
      }
    })

    expect(wrapper.find('h1').classes()).toContain('revuekitz-title')
  })

  it('renders title correctly when styleReset is true', () => {
    const wrapper = mount(PageTitle, {
      props: {
        title: 'Test Title',
        styleReset: true
      }
    })

    expect(wrapper.find('h1').classes()).not.toContain('revuekitz-title')
  })

  it('applies given id, class, and style props', () => {
    const wrapper = mount(PageTitle, {
      props: {
        id: 'test-id',
        class: 'custom-class',
        style: 'color: red;',
        title: 'Test Title'
      }
    })

    expect(wrapper.attributes('id')).toBe('test-id')
    expect(wrapper.classes()).toContain('custom-class')
    expect(wrapper.attributes('style')).toBe('color: red;')
  })
})
