# @standardsets/us-states

[![npm - Version](https://img.shields.io/npm/v/@standardsets/us-states?style=flat-square)](https://www.pkgstats.com/pkg:@standardsets/us-states?ref=github.com)
[![npm - License](https://img.shields.io/npm/l/@standardsets/us-states?style=flat-square)](../../LICENSE)
[![npm - Downloads](https://img.shields.io/npm/dt/@standardsets/us-states?style=flat-square)](https://www.pkgstats.com/pkg:@standardsets/us-states?ref=github.com)
[![Follow @StandardSets on Twitter](https://img.shields.io/twitter/follow/standardsets?style=social)](https://twitter.com/standardsets)

Utilities for querying U.S. States names, and their equivalent variations/abbreviations.

## Install

Via [npm](https://npmjs.com/package/@standardsets/us-states)

```sh
npm install -S @standardsets/us-states
```

Via [Yarn](https://yarn.pm/@standardsets/us-states)

```sh
yarn add @standardsets/us-states
```

## Dataset Options

### Variations

Passing the appropriate `variation.key` (enumerator `VariationKey`) is how either
lists of U.S. State names are returned in the requested variation, or allow for
one variation to be returned in another format (ex. `fullName` -> `postalCode`
or `postalCode` -> `fullName`)

* `fullName` | `VariationKey.FULL_NAME` (default) - Full U.S. name, capitalized.
* `postalCode` | `VariationKey.POSTAL_CODE` - 2-letter codes by the United States Postal Service
* `apStyle` | `VariationKey.AP_STYLE` - Name abbreviations from the AP Stylebook
* `gpoStyle` | `VairationKey.GPO_STYLE` - Official US Government Printing Office abbreviations

## How to use

```js

import { getAlternate, VariationKey } from '@standardsets/us-states'

const postalCode = getAlternat('Ohio', VariationKey.POSTAL_CODE)
console.debug(postalCode) // Outputs: 'OH'

```

### Methods

* `getVariations` - Listing of available variations for the current data set.
* `getVariationItems` - Query dataset and return the specified variation items. Default to `fullName`
* `getAlternate` - Allows for swapping one variation for another. (ex. `fullName` -> `postalCode` | `Ohio` -> `OH`)

## License

[GPL-3.0](../../LICENSE) © [Standard Sets](https://standardsets.com)
