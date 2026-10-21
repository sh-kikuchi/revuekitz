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
    expect(radioInputs[0].attributes('id')).toBe('testId-0')
    expect(labels[0].attributes('for')).toBe('testId-0')
    // expect(radioInputs[0].attributes('class')).toBe('testClass')
    expect(radioInputs[0].attributes('name')).toBe(undefined)
    expect(radioInputs[0].attributes('value')).toBe('Option 1')
    expect(radioInputs[0].attributes('disabled')).toBe(undefined)
    expect(radioInputs[0].attributes('readonly')).toBe(undefined)
  })

  it('emits update:modelValue event on change', async () => {
    const wrapper = mount(RadioField, {
      props: {
        items: ['Option 1', 'Option 2', 'Option 3']
      }
    })

    // Simulate radio input change
    const radioInputs = wrapper.findAll('input[type="radio"]')
    await radioInputs[1].trigger('change')

    // Check if update:modelValue event is emitted with correct value
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.at(0)).toEqual(['Option 2'])
  })

  it('sets checked state correctly based on initial modelValue', () => {
    const wrapper = mount(RadioField, {
      props: {
        items: ['Option 1', 'Option 2', 'Option 3'],
        modelValue: 'Option 2'
      }
    })

    const radioInputs = wrapper.findAll('input[type="radio"]')

    // "Option 2" が初期チェックされているか確認
    expect(radioInputs[1].element.checked).toBe(true)
    expect(radioInputs[0].element.checked).toBe(false)
    expect(radioInputs[2].element.checked).toBe(false)
  })

  it('updates checked state when modelValue changes after mount', async () => {
    const wrapper = mount(RadioField, {
      props: {
        items: ['Option 1', 'Option 2', 'Option 3'],
        modelValue: 'Option 1'
      }
    })

    await wrapper.setProps({ modelValue: 'Option 3' })

    const radioInputs = wrapper.findAll('input[type="radio"]')
    expect(radioInputs[0].element.checked).toBe(false)
    expect(radioInputs[2].element.checked).toBe(true)
  })

  it('supports items with separate text and value', async () => {
    const wrapper = mount(RadioField, {
      props: {
        items: [
          { text: 'Free plan', value: 'free' },
          { text: 'Pro plan', value: 'pro' }
        ],
        modelValue: 'pro'
      }
    })

    const radioInputs = wrapper.findAll('input[type="radio"]')
    const labels = wrapper.findAll('label')
    expect(radioInputs[0].attributes('value')).toBe('free')
    expect(labels[0].text()).toBe('Free plan')
    expect(radioInputs[1].element.checked).toBe(true)

    await radioInputs[0].trigger('change')
    expect(wrapper.emitted('update:modelValue')?.at(0)).toEqual(['free'])
  })

  it('supports mixing string and object items', () => {
    const wrapper = mount(RadioField, {
      props: {
        items: ['A', { text: 'Bee', value: 'B' }]
      }
    })

    const radioInputs = wrapper.findAll('input[type="radio"]')
    const labels = wrapper.findAll('label')
    expect(radioInputs[0].attributes('value')).toBe('A')
    expect(labels[0].text()).toBe('A')
    expect(radioInputs[1].attributes('value')).toBe('B')
    expect(labels[1].text()).toBe('Bee')
  })

  it('generates unique ids when the same items are used in multiple fields', () => {
    const wrapper = mount({
      components: { RadioField },
      data: () => ({ items: ['Option 1', 'Option 2'] }),
      template: '<RadioField :items="items" /><RadioField :items="items" />'
    })

    const fields = wrapper.findAllComponents(RadioField)
    const firstId = fields[0].find('input[type="radio"]').attributes('id')
    const secondId = fields[1].find('input[type="radio"]').attributes('id')
    expect(firstId).toBeTruthy()
    expect(firstId).not.toBe(secondId)
    expect(fields[0].find('label').attributes('for')).toBe(firstId)
  })

  it('applies the same name to all radio inputs', () => {
    const wrapper = mount(RadioField, {
      props: {
        items: ['Option 1', 'Option 2', 'Option 3'],
        name: 'options'
      }
    })

    const radioInputs = wrapper.findAll('input[type="radio"]')
    radioInputs.forEach((input) => {
      expect(input.attributes('name')).toBe('options')
    })
  })
})
