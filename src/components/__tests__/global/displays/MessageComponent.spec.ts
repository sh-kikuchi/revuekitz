import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import CustomMessage from '../../../../components/global/displays/CustomMessage.vue'

describe('CustomMessage', () => {
  it('renders message text', () => {
    const wrapper = mount(CustomMessage, {
      props: {
        message: 'Hello World'
      }
    })
    expect(wrapper.text()).toContain('Hello World')
  })

  it('applies mode class', () => {
    const wrapper = mount(CustomMessage, {
      props: {
        message: 'Info Message',
        mode: 'info'
      }
    })
    expect(wrapper.classes()).toContain('info')
  })

  it('auto-hides after duration', async () => {
    vi.useFakeTimers()
    const wrapper = mount(CustomMessage, {
      props: {
        message: 'This will disappear',
        duration: 1000
      }
    })

    // 初期状態は表示中
    expect(wrapper.classes()).not.toContain('fade-out')

    // タイマー進める
    vi.advanceTimersByTime(1000)

    // 再レンダー反映
    await wrapper.vm.$nextTick()

    expect(wrapper.classes()).toContain('fade-out')
    vi.useRealTimers()
  })
})
