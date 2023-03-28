<div align="center">
  <br />
  <a href="https://standardsets.com">
    <img src="https://raw.githubusercontent.com/standardsets/standardsets/v/0.1.0/assets/standardsets-logo.png" width="150" />
  </a>
  <h3>Because it’s good to have, Standard Sets.</h3>
  <br />
  <h3><code>@standardsets/us-states</code></h3>
  <h3>U.S. State Names and Abbreviations</h3>
  <br />
  <br />
  <p>
    <a href="https://www.pkgstats.com/pkg:@standardsets/us-states?ref=github.com" title="NPM - Version"><img src="https://img.shields.io/npm/v/@standardsets/us-states?style=flat-square" /></a>
    <a href="../../LICENSE" title="License"><img src="https://img.shields.io/npm/l/@standardsets/us-states?style=flat-square" /></a>
    <a href="https://www.pkgstats.com/pkg:@standardsets/us-states?ref=github.com" title="NPM - Downloads"><img src="https://img.shields.io/npm/dt/@standardsets/us-states?style=flat-square" /></a>
    <a href="https://twitter.com/standardsets" title="Follow @StandardSets on Twitter"><img src="https://img.shields.io/twitter/follow/standardsets?style=social" /></a>
  </p>
</div>

<hr />

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
one variation to be returned in another format (ex. `fullName` &rarr; `postalCode`
or `postalCode` &rarr; `fullName`)

* `fullName` | `VariationKey.FULL_NAME` (default) - Full U.S. name, capitalized.
* `postalCode` | `VariationKey.POSTAL_CODE` - 2-letter codes by the United States Postal Service
* `apStyle` | `VariationKey.AP_STYLE` - Name abbreviations from the AP Stylebook
* `gpoStyle` | `VairationKey.GPO_STYLE` - Official US Government Printing Office abbreviations

## How to use

```js

import { getAlternate, VariationKey } from '@standardsets/us-states'

const postalCode = getAlternate('Ohio', VariationKey.POSTAL_CODE)
console.debug(postalCode) // Outputs: 'OH'

```

### Methods

* `getVariations` - Listing of available variations for the current data set.
* `getVariationItems` - Query data set and return the specified variation items. Defaults to `fullName`.
* `getItemVariation` - Allows for swapping one variation for another. (ex. `fullName` &rarr; `postalCode` | `Ohio` &rarr; `OH`)

## License

[GPL-3.0](../../LICENSE) © [Standard Sets](https://standardsets.com)
