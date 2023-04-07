import type { Dataset, Variation } from './types'

export * from './types'

/**
 * Returns available variations for this set.
 *
 * @returns {Variation[]} - Array of set variations
 */
export const getVariations = (dataset: Dataset) => (): Variation[] => {
  return dataset.variations
}

/**
 * Returns all items for the provided variation key.
 *
 * @param variationKey
 * @returns {string[]} - Array of items for the given variation key
 */
export function getVariationItems<T>(dataset: Dataset) {
  return (variationKey: T | string): string[] => {
    const variationIndex = dataset.variations.findIndex(
      (variation) => variation.key === variationKey
    )
    return dataset.data.map((state) => state[variationIndex])
  }
}

/**
 * Returns the item variation for the given value and variation key.
 *
 * @param value
 * @param variationKey
 * @returns {string} - The alternate for the given value and variation key
 */
export function getItemVariation<T>(dataset: Dataset, datasetName: string) {
  return (
    value: string,
    variationKey: T | string
  ): string | null => {
    if (!value) {
      console.warn(`${datasetName} is required`)
      return null
    }

    const valueIndex = dataset.data.findIndex((valueVariations) =>
      valueVariations
        .map((variation) => variation.toLowerCase())
        .includes(value.toLowerCase())
    )

    if (valueIndex === -1) {
      console.warn(`${datasetName} not found: `, value)
      return null
    }

    const variationIndex = dataset.variations.findIndex(
      (variation) => variation.key === variationKey
    )

    if (variationIndex === -1) {
      console.warn('Variation not found: ', variationKey)
      return null
    }

    return dataset.data[valueIndex][variationIndex]
  }
}
