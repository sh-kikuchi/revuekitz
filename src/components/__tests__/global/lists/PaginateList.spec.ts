import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PaginateList from '../../../global/lists/PaginateList.vue'
import { nextTick } from 'vue'

describe('PaginateList.vue', () => {
  const items = [
    { id: 1, name_jp: 'Coffee', name_en: 'coffee' },
    { id: 2, name_jp: 'Espresso', name_en: 'espresso' },
    { id: 3, name_jp: 'Cappuccino', name_en: 'cappuccino' },
    { id: 4, name_jp: 'Mocha', name_en: 'mocha' },
    { id: 5, name_jp: 'Tea', name_en: 'tea' },
    { id: 6, name_jp: 'Sandwich', name_en: 'sandwich' },
    { id: 7, name_jp: 'Hotdog', name_en: 'hotdog' },
    { id: 8, name_jp: 'Omelette', name_en: 'omelette' },
    { id: 9, name_jp: 'Salad', name_en: 'salad' },
    { id: 10, name_jp: 'Curry', name_en: 'curry' }
  ]

  it('renders the correct number of page buttons', async () => {
    const wrapper = mount(PaginateList, {
      props: {
        items,
        steps: 3
      }
    })

    await nextTick() // Wait for the component to re-render

    expect(wrapper.findAll('li').length).toBe(6) // prev + page buttons + next
  })

  it('emits handleAction with the correct items on page change', async () => {
    const wrapper = mount(PaginateList, {
      props: {
        items,
        steps: 3
      }
    })

    await wrapper.vm.$nextTick()

    await wrapper.find('li:nth-child(1)').trigger('click')

    expect(wrapper.emitted('handleAction')).toBeTruthy()
    expect(wrapper.emitted('handleAction')?.at(0)).toEqual([
      [
        { id: 1, name_jp: 'Coffee', name_en: 'coffee' },
        { id: 2, name_jp: 'Espresso', name_en: 'espresso' },
        { id: 3, name_jp: 'Cappuccino', name_en: 'cappuccino' }
      ]
    ])
  })

  it('navigates to the next page', async () => {
    const wrapper = mount(PaginateList, {
      props: {
        items,
        steps: 3
      }
    })

    await wrapper.find('#next').trigger('click')
    expect(wrapper.find('.revuekitz-paginate-list-current-position').text()).toBe('2')
  })

  it('navigates to the previous page', async () => {
    const wrapper = mount(PaginateList, {
      props: {
        items,
        steps: 3
      }
    })

    await wrapper.find('#next').trigger('click')
    await wrapper.find('#prev').trigger('click')
    expect(wrapper.find('.revuekitz-paginate-list-current-position').text()).toBe('1')
  })

  it('handles edge case when on the first page', async () => {
    const wrapper = mount(PaginateList, {
      props: {
        items,
        steps: 3
      }
    })

    await wrapper.find('#prev').trigger('click') // Should not change the page
    expect(wrapper.find('.revuekitz-paginate-list-current-position').text()).toBe('1')
  })

  it('handles edge case when on the last page', async () => {
    const wrapper = mount(PaginateList, {
      props: {
        items,
        steps: 3
      }
    })

    await wrapper.find('#next').trigger('click') // Move to page 2
    await wrapper.find('#next').trigger('click') // Move to page 3
    await wrapper.find('#next').trigger('click') // Should not change the page
    expect(wrapper.find('.revuekitz-paginate-list-current-position').text()).toBe('4')
  })
})
