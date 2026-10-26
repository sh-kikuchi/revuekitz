import { describe, it, expect } from 'vite-plus/test'
// TreeList.spec.ts
import { mount } from '@vue/test-utils'
import TreeList from '../../../../components/global/lists/TreeList.vue' // コンポーネントの実際のファイルパスに置き換える

describe('TreeList', () => {
  it('renders grandparents, parents, children, and items with correct links', async () => {
    const grandparents = [
      {
        id: '1',
        title: 'Grandparent 1',
        href: 'https://example.com',
        parents: [
          {
            id: '1',
            title: 'Parent 1',
            href: 'https://example.com',
            children: [
              {
                id: '1',
                title: 'Child 1',
                href: 'https://example.com',
                items: [
                  {
                    id: '1',
                    title: 'Item 1',
                    href: 'https://example.com'
                  },
                  {
                    id: '2',
                    title: 'Item 2',
                    href: 'https://example.com'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]

    const wrapper = mount(TreeList, {
      props: {
        grandparents
      }
    })

    // Check if the component renders grandparents correctly
    const grandparentLink = wrapper.find('a')
    expect(grandparentLink.attributes('href')).toBe('https://example.com')
    expect(grandparentLink.text()).toBe('Grandparent 1')

    // Check if it renders parents correctly
    const parentLink = wrapper.find('ul > li > ul > li > a')
    expect(parentLink.attributes('href')).toBe('https://example.com')
    expect(parentLink.text()).toBe('Parent 1')

    // Check if it renders children correctly
    const childLink = wrapper.find('ul > li > ul > li > ul > li > a')
    expect(childLink.attributes('href')).toBe('https://example.com')
    expect(childLink.text()).toBe('Child 1')

    // Check if it renders items correctly
    const itemLink = wrapper.find('ul > li > ul > li > ul > li > ul > li > a')
    expect(itemLink.attributes('href')).toBe('https://example.com')
    expect(itemLink.text()).toBe('Item 1')

    // Additional checks for other items, attributes, and structure can be added as needed
  })
})
