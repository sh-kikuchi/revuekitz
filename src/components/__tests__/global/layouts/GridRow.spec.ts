import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import GridRow from '../../../global/layouts/GridRow.vue'

describe('GridRow.vue', () => {
  it('renders with default props', () => {
    const wrapper = mount(GridRow)
    const div = wrapper.find('div')
    expect(div.exists()).toBe(true)
    expect(div.classes()).toContain('revuekitz-grid')
  })

  it('accepts id prop', () => {
    const wrapper = mount(GridRow, {
      props: {
        id: 'test-id'
      }
    })
    const div = wrapper.find('div')
    expect(div.attributes('id')).toBe('test-id')
  })

  it('accepts class prop and binds it correctly', () => {
    const wrapper = mount(GridRow, {
      props: {
        class: 'custom-class'
      }
    })
    const div = wrapper.find('div')
    expect(div.classes()).toContain('revuekitz-grid')
    expect(div.classes()).toContain('custom-class')
  })

  it('accepts style prop and binds it correctly', () => {
    const style = { color: 'red', 'font-size': '20px' }
    const wrapper = mount(GridRow, {
      props: {
        style: style
      }
    })
    const div = wrapper.find('div')
    expect(div.attributes('style')).toContain('color: red;')
    expect(div.attributes('style')).toContain('font-size: 20px;')
  })
})
