import { getVariations, getVariationItems, getItemVariation, VariationKey } from './us-states';

describe('us-states', () => {
  it('should return all variations', () => {
    const variations = getVariations();
    expect(variations.length).toEqual(4);
    expect(variations[0].key).toEqual('fullName');
    expect(variations[1].key).toEqual('postalCode');
    expect(variations[2].key).toEqual('apStyle');
    expect(variations[3].key).toEqual('gpoStyle');
  })

  it('should return all items for a given variation key', () => {
    const items = getVariationItems(VariationKey.FULL_NAME);
    expect(items.length).toEqual(50);
    expect(items[0]).toEqual('Alabama');
    expect(items[1]).toEqual('Alaska');
    expect(items[2]).toEqual('Arizona');
    expect(items[3]).toEqual('Arkansas');
    expect(items[4]).toEqual('California');
    expect(items[5]).toEqual('Colorado');
    expect(items[6]).toEqual('Connecticut');
    expect(items[7]).toEqual('Delaware');
    expect(items[8]).toEqual('Florida');
    expect(items[9]).toEqual('Georgia');
    expect(items[10]).toEqual('Hawaii');
    expect(items[11]).toEqual('Idaho');
    expect(items[12]).toEqual('Illinois');
    expect(items[13]).toEqual('Indiana');
    expect(items[14]).toEqual('Iowa');
    expect(items[15]).toEqual('Kansas');
    expect(items[16]).toEqual('Kentucky');
    expect(items[17]).toEqual('Louisiana');
    expect(items[18]).toEqual('Maine');
    expect(items[19]).toEqual('Maryland');
    expect(items[20]).toEqual('Massachusetts');
    expect(items[21]).toEqual('Michigan');
    expect(items[22]).toEqual('Minnesota');
    expect(items[23]).toEqual('Mississippi');
    expect(items[24]).toEqual('Missouri');
    expect(items[25]).toEqual('Montana');
    expect(items[26]).toEqual('Nebraska');
    expect(items[27]).toEqual('Nevada');
    expect(items[28]).toEqual('New Hampshire');
    expect(items[29]).toEqual('New Jersey');
    expect(items[30]).toEqual('New Mexico');
    expect(items[31]).toEqual('New York');
    expect(items[32]).toEqual('North Carolina');
    expect(items[33]).toEqual('North Dakota');
    expect(items[34]).toEqual('Ohio');
    expect(items[35]).toEqual('Oklahoma');
    expect(items[36]).toEqual('Oregon');
    expect(items[37]).toEqual('Pennsylvania');
    expect(items[38]).toEqual('Rhode Island');
    expect(items[39]).toEqual('South Carolina');
    expect(items[40]).toEqual('South Dakota');
    expect(items[41]).toEqual('Tennessee');
    expect(items[42]).toEqual('Texas');
    expect(items[43]).toEqual('Utah');
    expect(items[44]).toEqual('Vermont');
    expect(items[45]).toEqual('Virginia');
    expect(items[46]).toEqual('Washington');
    expect(items[47]).toEqual('West Virginia');
    expect(items[48]).toEqual('Wisconsin');
    expect(items[49]).toEqual('Wyoming');
  })

  it('should return the alternate value for a given variation key', () => {
    const alternate = getItemVariation('Ohio', VariationKey.POSTAL_CODE);
    expect(alternate).toEqual('OH');
  })

  it('should return the alternate value for a given variation key, with lowercase value', () => {
    const alternate = getItemVariation('ohio', VariationKey.POSTAL_CODE);
    expect(alternate).toEqual('OH');
  })

  it('should return the alternate value for a given variation key, with all caps value', () => {
    const alternate = getItemVariation('OHIO', VariationKey.POSTAL_CODE);
    expect(alternate).toEqual('OH');
  })
})
