import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RadioField from '../../../../components/global/fields/RadioField.vue'

describe('RadioField', () => {
  it('renders the radio group component with default values', () => {
    const wrapper = mount(RadioField, {
      props: {
        id: 'testId',
        class: 'testClass',
        name: '',
        items: ['Option 1', 'Option 2', 'Option 3'],
        accentColor: 'red'
      }
    })

    // Check if radio input elements exist
    const radioInputs = wrapper.findAll('input[type="radio"]')
    expect(radioInputs.length).toBe(3)

    // Check if labels exist for each radio input
    const labels = wrapper.findAll('label')
    expect(labels.length).toBe(3)

    // Check if default props are applied correctly
    expect(radioInputs[0].attributes('id')).toBe('Option 1')
    // expect(radioInputs[0].attributes('class')).toBe('testClass')
    expect(radioInputs[0].attributes('name')).toBe(undefined)
    expect(radioInputs[0].attributes('value')).toBe('Option 1')
    expect(radioInputs[0].attributes('disabled')).toBe(undefined)
    expect(radioInputs[0].attributes('readonly')).toBe(undefined)
  })

  it('emits update:radio event on change', async () => {
    const wrapper = mount(RadioField, {
      props: {
        items: ['Option 1', 'Option 2', 'Option 3']
      }
    })

    // Simulate radio input change
    const radioInputs = wrapper.findAll('input[type="radio"]')
    await radioInputs[1].trigger('change')

    // Check if update:radio event is emitted with correct value
    expect(wrapper.emitted('update:radio')).toBeTruthy()
    expect(wrapper.emitted('update:radio')?.at(0)).toEqual(['Option 2'])
  })
})
