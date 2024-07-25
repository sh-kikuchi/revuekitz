import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FileField from '../../../../components/global/fields/FileField.vue'

describe('FileField', () => {
  it('emits file data when a file is selected', async () => {
    // Create a mock File object
    const file = new File(['foo'], 'foo.txt', {
      type: 'text/plain'
    })

    // Mount the component
    const wrapper = mount(FileField)

    // Get the input[type="file"] element
    const input = wrapper.find('input[type="file"]')

    // Create a FileList
    const fileList = [file]
    Object.defineProperty(input.element, 'files', {
      value: fileList,
      writable: false
    })

    // Trigger the file selection event
    await input.trigger('change')

    // Verify that the event was emitted with the correct data
    const emittedEvents = wrapper.emitted('fileData')
    expect(emittedEvents).toBeTruthy() // Check that the event was emitted

    if (emittedEvents) {
      // Check that the `fileData` event was emitted and the data is correct
      expect(emittedEvents[0][0]).toEqual(file)
    } else {
      throw new Error('fileData event was not emitted')
    }
  })
})
