import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RangeField from '../../../../components/global/fields/RangeField.vue'

describe('RangeField', () => {
  it('renders input range element correctly with default props', async () => {
    const wrapper = mount(RangeField)

    // Check if input element exists
    const input = wrapper.find('input[type="range"]')
    expect(input.exists()).toBe(true)

    // Check default props
    expect(input.attributes('min')).toBe('0')
    expect(input.attributes('max')).toBe('100')
    expect(input.attributes('step')).toBe('10')
    expect(input.classes()).toContain('revuekitz-range-field')

    // Simulate change event
    await input.setValue('30') // Set value to 30
    expect(wrapper.emitted('update:val')).toBeTruthy()
    expect(wrapper.emitted('update:val')![0]).toEqual(['30'])
  })

  it('renders input range element with custom props', async () => {
    const wrapper = mount(RangeField, {
      props: {
        id: 'test-id',
        class: 'custom-class',
        name: 'test-name',
        style: 'width: 300px;',
        min: '10',
        max: '50',
        step: '5',
        isDisabled: true,
        isReadonly: true
      }
    })

    // Check if input element exists
    const input = wrapper.find('input[type="range"]')
    expect(input.exists()).toBe(true)

    // Check custom props
    expect(input.attributes('id')).toBe('test-id')
    expect(input.attributes('min')).toBe('10')
    expect(input.attributes('max')).toBe('50')
    expect(input.attributes('step')).toBe('5')
    expect(input.attributes('readonly')).toBeDefined()
    expect(input.attributes('disabled')).toBeDefined()
    expect(input.classes()).toContain('custom-class')

    // Simulate change event

    expect(wrapper.emitted('update:val')).toBeFalsy()
  })
})
