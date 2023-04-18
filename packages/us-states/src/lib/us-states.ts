import {
  getItemVariation as getItemVariationCore,
  getVariations as getVariationsCore,
  getVariationItems as getVariationItemsCore,
} from '@standardsets/core'

export enum VariationKey {
  FULL_NAME = 'fullName',
  POSTAL_CODE = 'postalCode',
  AP_STYLE = 'apStyle',
  GPO_STYLE = 'gpoStyle',
}

export const dataset = {
  name: 'U.S. States',
  description: '',
  variations: [
    {
      name: 'Full Name',
      description: '',
      key: VariationKey.FULL_NAME,
      locale: 'en-US',
      index: 0,
    },
    {
      name: 'Two-letter codes - USPS',
      description: '',
      key: VariationKey.POSTAL_CODE,
      locale: 'en-US',
      index: 1,
    },
    {
      name: 'Abbreviation - AP Style',
      description: '',
      key: VariationKey.AP_STYLE,
      locale: 'en-US',
      index: 2,
    },
    {
      name: 'Abbreviation - GPO Style',
      description: '',
      key: VariationKey.GPO_STYLE,
      locale: 'en-US',
      index: 3,
    },
  ],
  data: [
    ['Alabama', 'AL', 'Ala.', 'Ala.'],
    ['Alaska', 'AK', 'Alaska', 'Alaska'],
    ['Arizona', 'AZ', 'Ariz.', 'Ariz.'],
    ['Arkansas', 'AR', 'Ark.', 'Ark.'],
    ['California', 'CA', 'Calif.', 'Calif.'],
    ['Colorado', 'CO', 'Colo.', 'Colo.'],
    ['Connecticut', 'CT', 'Conn.', 'Conn.'],
    ['Delaware', 'DE', 'Del.', 'Del.'],
    ['Florida', 'FL', 'Fla.', 'Fla.'],
    ['Georgia', 'GA', 'Ga.', 'Ga.'],
    ['Hawaii', 'HI', 'Hawaii', 'Hawaii'],
    ['Idaho', 'ID', 'Idaho', 'Idaho'],
    ['Illinois', 'IL', 'Ill.', 'Ill.'],
    ['Indiana', 'IN', 'Ind.', 'Ind.'],
    ['Iowa', 'IA', 'Iowa', 'Iowa'],
    ['Kansas', 'KS', 'Kan.', 'Kans.'],
    ['Kentucky', 'KY', 'Ky.', 'Ky.'],
    ['Louisiana', 'LA', 'La.', 'La.'],
    ['Maine', 'ME', 'Maine', 'Maine'],
    ['Maryland', 'MD', 'Md.', 'Md.'],
    ['Massachusetts', 'MA', 'Mass.', 'Mass.'],
    ['Michigan', 'MI', 'Mich.', 'Mich.'],
    ['Minnesota', 'MN', 'Minn.', 'Minn.'],
    ['Mississippi', 'MS', 'Miss.', 'Miss.'],
    ['Missouri', 'MO', 'Mo.', 'Mo.'],
    ['Montana', 'MT', 'Mont.', 'Mont.'],
    ['Nebraska', 'NE', 'Neb.', 'Nebr.'],
    ['Nevada', 'NV', 'Nev.', 'Nev.'],
    ['New Hampshire', 'NH', 'N.H.', 'N.H.'],
    ['New Jersey', 'NJ', 'N.J.', 'N.J.'],
    ['New Mexico', 'NM', 'N.M.', 'N. Mex.'],
    ['New York', 'NY', 'N.Y.', 'N.Y.'],
    ['North Carolina', 'NC', 'N.C.', 'N.C.'],
    ['North Dakota', 'ND', 'N.D.', 'N. Dak.'],
    ['Ohio', 'OH', 'Ohio', 'Ohio'],
    ['Oklahoma', 'OK', 'Okla.', 'Okla.'],
    ['Oregon', 'OR', 'Ore.', 'Ore.'],
    ['Pennsylvania', 'PA', 'Pa.', 'Pa.'],
    ['Rhode Island', 'RI', 'R.I.', 'R.I.'],
    ['South Carolina', 'SC', 'S.C.', 'S.C.'],
    ['South Dakota', 'SD', 'S.D.', 'S. Dak.'],
    ['Tennessee', 'TN', 'Tenn.', 'Tenn.'],
    ['Texas', 'TX', 'Texas', 'Tex.'],
    ['Utah', 'UT', 'Utah', 'Utah'],
    ['Vermont', 'VT', 'Vt.', 'Vt.'],
    ['Virginia', 'VA', 'Va.', 'Va.'],
    ['Washington', 'WA', 'Wash.', 'Wash.'],
    ['West Virginia', 'WV', 'W.Va.', 'W. Va.'],
    ['Wisconsin', 'WI', 'Wis.', 'Wis.'],
    ['Wyoming', 'WY', 'Wyo.', 'Wyo.'],
  ],
}

export const getVariations = getVariationsCore(dataset)
export const getVariationItems = (variationKey = VariationKey.FULL_NAME) =>
  getVariationItemsCore(dataset)(variationKey)
export const getItemVariation = (
  value: string,
  variationKey = VariationKey.FULL_NAME
) => getItemVariationCore(dataset, 'State')(value, variationKey)
