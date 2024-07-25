import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TabPanel from '../../../global/displays/TabPanel.vue'

describe('TabPanel', () => {
  it('renders tabs correctly', async () => {
    const wrapper = mount(TabPanel, {
      props: {
        count: 3,
        tabs: ['Apple', 'Banana', 'Orange'],
        color: '#333',
        backgroundColor: '#f0f0f0'
      },
      slots: {
        content0: '<div>Content of Apple</div>',
        content1: '<div>Content of Banana</div>',
        content2: '<div>Content of Orange</div>'
      }
    })

    // Assert the number of tabs rendered
    const tabs = wrapper.findAll('ul li')
    expect(tabs.length).toBe(3)

    // Assert the initial active tab
    expect(tabs[0].classes('active')).toBe(true)

    // Simulate clicking on a tab
    await tabs[1].trigger('click')
    expect(tabs[1].classes('active')).toBe(true)

    // Wait for DOM to update
    await wrapper.vm.$nextTick()

    // Assert the content of the active tab
    const activeContent = wrapper.find('.revuekitz-tab-panel > div > div > div')
    expect(activeContent.text()).toContain('Content of Banana')
  })
})
