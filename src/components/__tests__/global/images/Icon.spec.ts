import { mount } from '@vue/test-utils'
import Icon from '../../../../components/global/icons/SvgIcon.vue'
import { mdiAccount } from '@mdi/js'
import { describe, it, expect } from 'vitest'

describe('Icon', () => {
  it('sets correct icon path', () => {
    const path = mdiAccount
    const wrapper = mount(Icon, {
      props: {
        path: path,
        size: '24'
      }
    })

    const svgElement = wrapper.find('svg')

    expect(svgElement.exists()).toBe(true)
  })

  it('sets correct icon size', () => {
    const size = '24'
    const wrapper = mount(Icon, {
      props: {
        path: mdiAccount,
        size: size
      }
    })

    const svgElement = wrapper.find('svg')

    expect(svgElement.exists()).toBe(true)
    expect(svgElement.attributes('width')).toBe(String(size))
    expect(svgElement.attributes('height')).toBe(String(size))
  })

  it('sets default values if props are not provided', () => {
    const defaultSize = 24
    const wrapper = mount(Icon)

    const svgElement = wrapper.find('svg')

    expect(svgElement.exists()).toBe(true)
    expect(svgElement.attributes('width')).toBe(String(defaultSize))
    expect(svgElement.attributes('height')).toBe(String(defaultSize))
  })
})
