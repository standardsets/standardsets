<div align="center">
  <br />
  <a href="https://standardsets.com">
    <img src="https://raw.githubusercontent.com/standardsets/standardsets/v/0.1.0/assets/standardsets-logo.png" width="150" />
  </a>
  <h3>Because it’s good to have, Standard Sets.</h3>
  <br />
  <h3><code>@standardsets/countries</code></h3>
  <h3>Countries names, letter codes, and ccTLDs.</h3>
  <br />
  <br />
  <p>
    <a href="https://www.pkgstats.com/pkg:@standardsets/countries?ref=github.com" title="NPM - Version"><img src="https://img.shields.io/npm/v/@standardsets/countries?style=flat-square" /></a>
    <a href="../../LICENSE" title="License"><img src="https://img.shields.io/npm/l/@standardsets/countries?style=flat-square" /></a>
    <a href="https://www.pkgstats.com/pkg:@standardsets/countries?ref=github.com" title="NPM - Downloads"><img src="https://img.shields.io/npm/dt/@standardsets/countries?style=flat-square" /></a>
    <a href="https://twitter.com/standardsets" title="Follow @StandardSets on Twitter"><img src="https://img.shields.io/twitter/follow/standardsets?style=social" /></a>
  </p>
</div>

<hr />

Utilities for querying Country names, and their equivalent variations/abbreviations.

## Install

Via [npm](https://npmjs.com/package/@standardsets/countries)

```sh
npm install -S @standardsets/core @standardsets/countries
```

Via [Yarn](https://yarn.pm/@standardsets/countries)

```sh
yarn add @standardsets/core @standardsets/countries
```

### Methods

* `getItemVariation` - Allows for swapping one variation for another. (ex. `countryName` &rarr; `threeLetterCode` | `Costa Rica` &rarr; `CRI`)
* `getVariations` - Listing of available variations for the current data set.
* `getVariationItems` - Query data set and return the specified variation items. Defaults to `countryName`.

## License

[GPL-3.0](../../LICENSE) © [Standard Sets](https://standardsets.com)
