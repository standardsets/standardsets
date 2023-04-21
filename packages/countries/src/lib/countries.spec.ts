import { getVariations, getVariationItems, getItemVariation, VariationKey } from './countries'

describe('countries', () => {
  it('should return all variations', () => {
    const variations = getVariations()
    expect(variations.length).toEqual(6)
    expect(variations[0].key).toEqual('countryName')
    expect(variations[1].key).toEqual('officialStateName')
    expect(variations[2].key).toEqual('twoLetterCode')
    expect(variations[3].key).toEqual('threeLetterCode')
    expect(variations[4].key).toEqual('numericCode')
    expect(variations[5].key).toEqual('ccTLD')
  })

  it('should return all items for a given variation key', () => {
    const items = getVariationItems(VariationKey.COUNTRY_NAME)
    expect(items.length).toEqual(249)
    expect(items[0]).toEqual('Afghanistan')
    expect(items[1]).toEqual('Åland Islands')
    expect(items[2]).toEqual('Albania')
    expect(items[3]).toEqual('Algeria')
    expect(items[4]).toEqual('American Samoa')
    expect(items[5]).toEqual('Andorra')
  })

  it('should return the alternate value for a given variation key', () => {
    const alternate = getItemVariation('Afghanistan', VariationKey.TWO_LETTER_CODE)
    expect(alternate).toEqual('AF')
  })

  it('should return the alternate value for a given variation key, with lowercase value', () => {
    const alternate = getItemVariation('afghanistan', VariationKey.TWO_LETTER_CODE)
    expect(alternate).toEqual('AF')
  })

  it('should return the alternate value for a given key, with all caps value', () => {
    const alternate = getItemVariation('AFGHANISTAN', VariationKey.TWO_LETTER_CODE)
    expect(alternate).toEqual('AF')
  })
})
