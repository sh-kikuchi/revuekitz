import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FileDnd from '../../../global/fields/FileDnd.vue'

describe('FileDnd.vue', () => {
  it('emits empty array initially', () => {
    const wrapper = mount(FileDnd, { props: { modelValue: [] } })
    const emitted = wrapper.emitted() as Record<string, unknown[][]>

    expect(emitted['update:modelValue']).toBeTruthy()
    expect(emitted['update:modelValue'][0][0]).toEqual([])
  })

  it('adds dragover class on dragover', async () => {
    const wrapper = mount(FileDnd, { props: { modelValue: [] } })
    const dropArea = wrapper.find('.revuekitz-file-drop-area')

    await dropArea.trigger('dragover', { preventDefault: () => {}, stopPropagation: () => {} })
    expect(dropArea.classes()).toContain('dragover')
  })

  it('removes dragover class on dragleave', async () => {
    const wrapper = mount(FileDnd, { props: { modelValue: [] } })
    const dropArea = wrapper.find('.revuekitz-file-drop-area')

    await dropArea.trigger('dragover', { preventDefault: () => {}, stopPropagation: () => {} })
    await dropArea.trigger('dragleave', { preventDefault: () => {}, stopPropagation: () => {} })

    expect(dropArea.classes()).not.toContain('dragover')
  })

  it('emits files on drop', async () => {
    const file = new File(['dummy content'], 'file.txt', { type: 'text/plain' })
    const wrapper = mount(FileDnd, { props: { modelValue: [] } })

    const dropArea = wrapper.find('.revuekitz-file-drop-area')
    const dataTransfer = { files: [file] }

    await dropArea.trigger('drop', {
      preventDefault: () => {},
      stopPropagation: () => {},
      dataTransfer
    })

    const emitted = wrapper.emitted() as Record<string, unknown[][]>
    expect(emitted['update:modelValue']).toBeTruthy()
    expect(emitted['update:modelValue'].at(-1)?.[0]).toEqual([file])
  })

  it('filters files based on accept attribute (extension)', async () => {
    const file1 = new File(['dummy'], 'file.pdf', { type: 'application/pdf' })
    const file2 = new File(['dummy'], 'file.txt', { type: 'text/plain' })
    const wrapper = mount(FileDnd, { props: { modelValue: [], accept: '.pdf' } })

    const dropArea = wrapper.find('.revuekitz-file-drop-area')
    const dataTransfer = { files: [file1, file2] }

    await dropArea.trigger('drop', {
      preventDefault: () => {},
      stopPropagation: () => {},
      dataTransfer
    })

    const emitted = wrapper.emitted() as Record<string, unknown[][]>
    expect(emitted['update:modelValue'].at(-1)?.[0]).toEqual([file1])
  })

  it('filters files based on accept attribute (MIME wildcard)', async () => {
    const file1 = new File(['dummy'], 'image.png', { type: 'image/png' })
    const file2 = new File(['dummy'], 'audio.wav', { type: 'audio/wav' })
    const wrapper = mount(FileDnd, { props: { modelValue: [], accept: 'image/*' } })

    const dropArea = wrapper.find('.revuekitz-file-drop-area')
    const dataTransfer = { files: [file1, file2] }

    await dropArea.trigger('drop', {
      preventDefault: () => {},
      stopPropagation: () => {},
      dataTransfer
    })

    const emitted = wrapper.emitted() as Record<string, unknown[][]>
    expect(emitted['update:modelValue'].at(-1)?.[0]).toEqual([file1])
  })
})
