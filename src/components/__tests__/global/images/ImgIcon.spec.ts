import { mount } from '@vue/test-utils'
import Avatar from '../../../../components/global/icons/ImgIcon.vue'
import { describe, it, expect } from 'vitest'

describe('Avatar', () => {
  it('displays image when path prop is provided', () => {
    const path = 'https://example.com/avatar.jpg'
    const wrapper = mount(Avatar, {
      props: {
        path: path
      }
    })

    const imgElement = wrapper.find('img')

    expect(imgElement.exists()).toBe(true)
    expect(imgElement.attributes('src')).toBe(path)
  })
})
