import { describe, it, expect } from 'vite-plus/test'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import DataTable from '../../../global/tables/DataTable.vue'

const mountTable = async (items: object[], headers: string[]) => {
  const wrapper = mount(DataTable, {
    props: { items, headers, steps: 10, selectable: false }
  })
  await nextTick()
  return wrapper
}

describe('DataTable.vue', () => {
  it('renders cell text as plain text, not HTML', async () => {
    const wrapper = await mountTable(
      [{ name: '<img src=x onerror="alert(1)">', note: '<b>bold</b>' }],
      ['name', 'note']
    )

    expect(wrapper.find('tbody img').exists()).toBe(false)
    expect(wrapper.find('tbody b').exists()).toBe(false)
    const cells = wrapper.findAll('tbody td')
    expect(cells[0]!.text()).toBe('<img src=x onerror="alert(1)">')
    expect(cells[1]!.text()).toBe('<b>bold</b>')
  })

  it('escapes HTML around and inside the search highlight', async () => {
    const wrapper = await mountTable([{ name: '<script>alert(1)</script>' }], ['name'])

    await wrapper.find('input').setValue('alert')
    await nextTick()

    const cell = wrapper.find('tbody td')
    expect(cell.find('script').exists()).toBe(false)
    expect(cell.find('span').text()).toBe('alert')
    expect(cell.text()).toBe('<script>alert(1)</script>')
  })

  it('renders null, undefined and boolean values as empty cells', async () => {
    const wrapper = await mountTable([{ a: null, b: undefined, c: true }], ['a', 'b', 'c'])

    const cells = wrapper.findAll('tbody td')
    expect(cells.map((c) => c.text())).toEqual(['', '', ''])
  })
})
