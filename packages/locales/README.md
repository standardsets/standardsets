<div align="center">
  <br />
  <a href="https://standardsets.com">
    <img src="https://raw.githubusercontent.com/standardsets/standardsets/v/0.1.0/assets/standardsets-logo.png" width="150" />
  </a>
  <h3>Because it’s good to have, Standard Sets.</h3>
  <br />
  <h3><code>@standardsets/locales</code></h3>
  <h3>Locale names and letter codes.</h3>
  <br />
  <br />
  <p>
    <a href="https://www.pkgstats.com/pkg:@standardsets/locales?ref=github.com" title="NPM - Version"><img src="https://img.shields.io/npm/v/@standardsets/locales?style=flat-square" /></a>
    <a href="../../LICENSE" title="License"><img src="https://img.shields.io/npm/l/@standardsets/locales?style=flat-square" /></a>
    <a href="https://www.pkgstats.com/pkg:@standardsets/locales?ref=github.com" title="NPM - Downloads"><img src="https://img.shields.io/npm/dt/@standardsets/locales?style=flat-square" /></a>
    <a href="https://twitter.com/standardsets" title="Follow @StandardSets on Twitter"><img src="https://img.shields.io/twitter/follow/standardsets?style=social" /></a>
  </p>
</div>

<hr />

Utilities for querying Locales, and their equivalent variations.

## Install

Via [npm](https://npmjs.com/package/@standardsets/locales)

```sh
npm install -S @standardsets/core @standardsets/locales
```

Via [Yarn](https://yarn.pm/@standardsets/locales)

```sh
yarn add @standardsets/core @standardsets/locales
```

### Methods

* `getItemVariation` - Allows for swapping one variation for another. (ex. `name` &rarr; `threeLetterCode` | `Maori` &rarr; `mri`)
* `getVariations` - Listing of available variations for the current data set.
* `getVariationItems` - Query data set and return the specified variation items. Defaults to `name`.

## License

[GPL-3.0](../../LICENSE) © [Standard Sets](https://standardsets.com)
