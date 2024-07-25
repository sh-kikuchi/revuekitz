import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Wrapper from '../../../../components/global/layouts/LayoutWrapper.vue'

describe('Wrapper', () => {
  it('has default maxWidth of 1024px', () => {
    const wrapper = mount(Wrapper)
    const wrapperElement = wrapper.find('.wrapper')

    expect(wrapperElement.attributes('style')).toContain('max-width: 1024px')
  })

  it('applies specified maxWidth', async () => {
    const maxWidth = '800px'
    const wrapper = mount(Wrapper, {
      props: {
        maxWidth: maxWidth
      }
    })
    const wrapperElement = wrapper.find('.wrapper')

    expect(wrapperElement.attributes('style')).toContain(`max-width: ${maxWidth}`)
  })
})
