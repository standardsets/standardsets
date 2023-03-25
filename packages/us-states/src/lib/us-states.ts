import type { Variation } from './types'

export enum VariationKey {
  FULL_NAME = 'fullName',
  POSTAL_CODE = 'postalCode',
  ABBREVIATION_AP_STYLE = 'abbrAPStyle',
  ABBREVIATION_GPO_STYLE = 'abbrGPOStyle',
}

export const dataset = {
  name: 'U.S. States',
  variations: [
    {
      name: 'Full Name',
      key: VariationKey.FULL_NAME,
      locale: 'en-US',
      index: 0,
    },
    {
      name: 'Postal Code',
      key: VariationKey.POSTAL_CODE,
      locale: 'en-US',
      index: 1,
    },
    {
      name: 'Abbreviation - AP Style',
      key: VariationKey.ABBREVIATION_AP_STYLE,
      locale: 'en-US',
      index: 2,
    },
    {
      name: 'Abbreviation - GPO Style',
      key: VariationKey.ABBREVIATION_GPO_STYLE,
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
};

/**
 * Returns available variations for this set.
 *
 * @returns {Variation[]} - Array of set variations
 */
export const getVariations = (): Variation[] => {
  return dataset.variations;
};

/**
 * Returns all items for the provided variation key.
 *
 * @param variationKey
 * @returns {string[]} - Array of items for the given variation key
 */
export const getVariationItems = (variationKey: string = VariationKey.FULL_NAME): string[] => {
  const variationIndex = dataset.variations.findIndex(
    (variation) => variation.key === variationKey
  );
  return dataset.data.map((state) => state[variationIndex]);
};

/**
 * Returns the alternate for the given state and variation key.
 *
 * @param state
 * @param variationKey
 * @returns {string} - The alternate for the given state and variation key
 */
export const getAlternate = (state: string, variationKey: VariationKey | string): string | null => {
  if (!state) {
    console.warn('State is required');
    return null;
  }

  const stateIndex = dataset.data.findIndex((stateVariations) =>
    stateVariations.includes(state)
  );

  if (stateIndex === -1) {
    // throw new Error(`State not found: ${state}`);
    console.warn('State not found: ', state);
    return null;
  }

  const variationIndex = dataset.variations.findIndex(
    (variation) => variation.key === variationKey
  );

  if (variationIndex === -1) {
    // throw new Error(`Variation not found: ${variationKey}`);
    console.warn('Variation not found: ', variationKey);
    return null;
  }

  return dataset.data[stateIndex][variationIndex];
};
