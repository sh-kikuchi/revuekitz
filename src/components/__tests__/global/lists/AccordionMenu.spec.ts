import { describe, it, expect } from 'vitest'
import AccordionMenu from '../../../../components/global/lists/AccordionMenu.vue'
import { shallowMount } from '@vue/test-utils'

describe('AccordionMenu.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(AccordionMenu, {
      props: {
        id: 'testId',
        class: 'testClass',
        style: 'testStyle',
        styleReset: false,
        lists: [
          {
            title: 'List 1',
            items: ['aaa', 'bbb', 'ccc']
          },
          {
            title: 'List 2',
            items: ['aaa', 'bbb', 'ccc']
          }
        ]
      }
    })

    // Test to verify correct rendering of the component
    expect(wrapper.find('#testId').exists()).toBe(true)
    expect(wrapper.find('.revuekitz-accordion-menu').exists()).toBe(true)

    // Test to verify the behavior of click events
    const titleDiv = wrapper.find('.revuekitz-accordion-menu div')
    titleDiv.trigger('click')

    expect(wrapper.vm.block.open).toBe('List 1') // Verify that the open function is working correctly

    // Test to verify the behavior of the transition element
    const ulElement = wrapper.find('.revuekitz-accordion-menu ul')
    // expect(ulElement.isVisible()).toBe(true) // Verify that it is visible in the initial state
    wrapper.vm.$nextTick(() => {
      expect(ulElement.isVisible()).toBe(true)
    })
  })
})
