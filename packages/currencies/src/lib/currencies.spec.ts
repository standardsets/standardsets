import { getItemVariation, getVariations, getVariationItems, VariationKey } from './currencies'

describe('currencies', () => {
  it('should return all variations', () => {
    const variations = getVariations()
    expect(variations.length).toEqual(4)
    expect(variations[0].key).toEqual('name')
    expect(variations[1].key).toEqual('code')
    expect(variations[2].key).toEqual('number')
    expect(variations[3].key).toEqual('symbol')
  })

  it('should return all items for a given variation key', () => {
    const items = getVariationItems(VariationKey.NAME)
    expect(items.length).toEqual(152)
    expect(items[0]).toEqual('United Arab Emirates dirham')
    expect(items[1]).toEqual('Afghan afghani')
    expect(items[2]).toEqual('Albanian lek')
    expect(items[3]).toEqual('Armenian dram')
  })

  it('should return the alternate value for a given variation key', () => {
    const alternate = getItemVariation('United Arab Emirates dirham', VariationKey.CODE)
    expect(alternate).toEqual('AED')
  })

  it('should return the alternate value for a given variation key, with lowercase value', () => {
    const alternate = getItemVariation('united arab emirates dirham', VariationKey.NUMBER)
    expect(alternate).toEqual('784')
  })

  it('should return the alternate value for a given key, with all caps value', () => {
    const alternate = getItemVariation('UNITED ARAB EMIRATES DIRHAM', VariationKey.SYMBOL)
    expect(alternate).toEqual('د.إ')
  })
})
