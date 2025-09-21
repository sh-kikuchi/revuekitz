import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FileField from '../../../../components/global/fields/FileField.vue'

describe('FileField.vue', () => {
  it('emits selected file when a single file is chosen', async () => {
    const file = new File(['foo content'], 'foo.txt', { type: 'text/plain' })
    const wrapper = mount(FileField, { props: { multiple: false } })
    const input = wrapper.find('input[type="file"]')

    Object.defineProperty(input.element, 'files', {
      value: [file],
      writable: false
    })

    await input.trigger('change')

    const emittedEvents = wrapper.emitted('update:modelValue')
    expect(emittedEvents).toBeTruthy()
    if (emittedEvents) {
      expect(emittedEvents[0][0]).toEqual([file])
    }
  })

  it('emits selected files when multiple files are chosen', async () => {
    const file1 = new File(['foo content'], 'foo.txt', { type: 'text/plain' })
    const file2 = new File(['bar content'], 'bar.pdf', { type: 'application/pdf' })
    const wrapper = mount(FileField, { props: { multiple: true } })
    const input = wrapper.find('input[type="file"]')

    Object.defineProperty(input.element, 'files', {
      value: [file1, file2],
      writable: false
    })

    await input.trigger('change')

    const emittedEvents = wrapper.emitted('update:modelValue')
    expect(emittedEvents).toBeTruthy()
    if (emittedEvents) {
      expect(emittedEvents[0][0]).toEqual([file1, file2]) // 配列で返る
    }
  })
})
