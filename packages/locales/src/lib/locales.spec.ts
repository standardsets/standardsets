import { getItemVariation, getVariations, getVariationItems, VariationKey } from './locales'

describe('locales', () => {
  it('should return all variations', () => {
    const variations = getVariations()
    expect(variations.length).toEqual(3)
    expect(variations[0].key).toEqual('name')
    expect(variations[1].key).toEqual('twoLetterCode')
    expect(variations[2].key).toEqual('threeLetterCode')
  })

  it('should return all items for a given variation key', () => {
    const items = getVariationItems(VariationKey.NAME)
    expect(items.length).toEqual(103)
    expect(items[0]).toEqual('English')
    expect(items[1]).toEqual('Afrikaans')
    expect(items[2]).toEqual('Albanian')
    expect(items[3]).toEqual('Amharic')
  })

  it('should return the alternate value for a given variation key', () => {
    const alternate = getItemVariation('Dutch', VariationKey.TWO_LETTER_CODE)
    expect(alternate).toEqual('nl')
  })

  it('should return the alternate value for a given variation key, with lowercase value', () => {
    const alternate = getItemVariation('dutch', VariationKey.TWO_LETTER_CODE)
    expect(alternate).toEqual('nl')
  })

  it('should return the alternate value for a given key, with all caps value', () => {
    const alternate = getItemVariation('DUTCH', VariationKey.TWO_LETTER_CODE)
    expect(alternate).toEqual('nl')
  })
})
