import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Breadcrumb from '../../../../components/global/lists/BreadcrumbList.vue'

describe('Breadcrumb', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Breadcrumb)
    const items = wrapper.findAll('.breadcrumb li')
    expect(items.length).toBe(0)
  })
})
