import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Column from '../../../global/layouts/GridColumn.vue'

describe('Column', () => {
  it('sets correct class based on cols prop', () => {
    const cols = 6
    const wrapper = mount(Column, {
      props: {
        cols: cols
      }
    })

    const colElement = wrapper.find('div')

    expect(colElement.classes()).toContain(`col-${cols}`)
  })

  it('sets correct class based on sm_cols prop', () => {
    const smColumns = 4
    const wrapper = mount(Column, {
      props: {
        sm_cols: smColumns
      }
    })

    const colElement = wrapper.find('div')

    expect(colElement.classes()).toContain(`col-sm-${smColumns}`)
  })

  it('sets correct class based on lg_cols prop', () => {
    const lgColumns = 8
    const wrapper = mount(Column, {
      props: {
        lg_cols: lgColumns
      }
    })

    const colElement = wrapper.find('div')

    expect(colElement.classes()).toContain(`col-lg-${lgColumns}`)
  })

  it('sets correct classes for all props', () => {
    const cols = 6
    const smColumns = 4
    const lgColumns = 8
    const wrapper = mount(Column, {
      props: {
        cols: cols,
        sm_cols: smColumns,
        lg_cols: lgColumns
      }
    })

    const colElement = wrapper.find('div')

    expect(colElement.classes()).toContain(`col-${cols}`)
    expect(colElement.classes()).toContain(`col-sm-${smColumns}`)
    expect(colElement.classes()).toContain(`col-lg-${lgColumns}`)
  })
})
