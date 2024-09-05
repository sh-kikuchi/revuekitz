import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ColorField from '../../../../components/global/fields/ColorField.vue'

describe('ColorField', () => {
  it('emits update:val event on color selection', async () => {
    const wrapper = mount(ColorField)

    // Simulate color input change
    await wrapper.find('input[type="color"]').setValue('#ff0000')

    // Check if update:val event is emitted with correct value
    expect(wrapper.emitted('update:val')).toBeTruthy()
    expect(wrapper.emitted('update:val')?.at(0)?.at(0)).toBe('#ff0000')
  })
})
