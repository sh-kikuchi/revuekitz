import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BasicList from '../../../../components/global/lists/BasicList.vue'

describe('BasicList.vue', () => {
  it('deletes an item when delete button is clicked', async () => {
    const wrapper = shallowMount(BasicList, {
      props: {
        items: [
          {
            id: '1',
            title: 'Item #1',
            value: 1,
            href: 'https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice'
          },
          {
            id: '2',
            title: 'Item #2',
            value: 2
          },
          {
            id: '3',
            title: 'Item #3',
            value: 3
          }
        ]
      }
    })

    // レンダリングされたアイテム数を確認
    let items = wrapper.findAll('.revuekitz-basic-list-item')
    expect(items.length).toBe(3)

    // 最初のアイテムを取得して、削除アイコンをクリックする
    const firstItem = items[0]
    const deleteIcon = firstItem.find('.delete-action')
    await deleteIcon.trigger('click')

    // 削除後のアイテム数を確認
    items = wrapper.findAll('.revuekitz-basic-list-item')
    expect(items.length).toBe(2)
  })
})
