import { getVariations, getVariationItems, getItemVariation } from './core'

const dataset = {
  name: 'Core',
  description: '',
  variations: [
    {
      name: 'Default',
      description: '',
      key: 'default',
      locale: 'en-US',
      index: 0,
    },
    {
      name: 'Alt',
      description: '',
      key: 'alt',
      locale: 'en-US',
      index: 1,
    }
  ],
  data: [
    ['default', 'alt']
  ]
}

describe('core', () => {
  it('getVariations returns variations', () => {
    const variations = getVariations(dataset)()
    expect(variations.length).toEqual(2)
    expect(variations[0].key).toEqual('default')
    expect(variations[1].key).toEqual('alt')
  })

  it('getVariationItems returns variation items', () => {
    const items = getVariationItems(dataset)('default')
    expect(items.length).toEqual(1)
    expect(items[0]).toEqual('default')
  })

  it('getItemVariation returns variation item', () => {
    const alternate = getItemVariation(dataset, 'default')('default', 'alt')
    expect(alternate).toEqual('alt')
  })
})
