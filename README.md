# Stylelint Ecosystem Tester

[![CI](https://github.com/stylelint/stylelint-ecosystem-tester/actions/workflows/ci.yml/badge.svg)](https://github.com/stylelint/stylelint-ecosystem-tester/actions/workflows/ci.yml)
[![Test Ecosystem](https://github.com/stylelint/stylelint-ecosystem-tester/actions/workflows/test-ecosystem.yml/badge.svg)](https://github.com/stylelint/stylelint-ecosystem-tester/actions/workflows/test-ecosystem.yml)

A comprehensive test suite for [Stylelint](https://stylelint.io) ecosystem.

Each package is tested daily against the latest and next Stylelint by the [test workflow](https://github.com/stylelint/stylelint-ecosystem-tester/actions/workflows/test-ecosystem.yml). The status columns below show the last recorded result:

- ✅ pass
- ❌ fail
- ❔ unknown
- ⭐ official package

## Packages

[![Latest Stylelint](https://img.shields.io/npm/v/stylelint.svg?label=Latest+Stylelint)](https://www.npmjs.com/package/stylelint)

<!-- START:PACKAGES -->

| Package                                             | npm                                                                                                                                                                                                                         | Stylelint 17.14.1 | Stylelint HEAD |
| :-------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------: | :------------: |
| `stylelint-config-recommended` ⭐                   | [![stylelint-config-recommended](https://img.shields.io/npm/v/stylelint-config-recommended.svg)](https://www.npmjs.com/package/stylelint-config-recommended)                                                                |        ✅         |       ✅       |
| `stylelint-config-standard` ⭐                      | [![stylelint-config-standard](https://img.shields.io/npm/v/stylelint-config-standard.svg)](https://www.npmjs.com/package/stylelint-config-standard)                                                                         |        ✅         |       ✅       |
| `@primer/stylelint-config`                          | [![@primer/stylelint-config](https://img.shields.io/npm/v/@primer/stylelint-config.svg)](https://www.npmjs.com/package/@primer/stylelint-config)                                                                            |        ❌         |       ❌       |
| `@shopify/stylelint-plugin`                         | [![@shopify/stylelint-plugin](https://img.shields.io/npm/v/@shopify/stylelint-plugin.svg)](https://www.npmjs.com/package/@shopify/stylelint-plugin)                                                                         |        ❌         |       ❌       |
| `@stylistic/stylelint-config`                       | [![@stylistic/stylelint-config](https://img.shields.io/npm/v/@stylistic/stylelint-config.svg)](https://www.npmjs.com/package/@stylistic/stylelint-config)                                                                   |        ✅         |       ✅       |
| `@stylistic/stylelint-plugin`                       | [![@stylistic/stylelint-plugin](https://img.shields.io/npm/v/@stylistic/stylelint-plugin.svg)](https://www.npmjs.com/package/@stylistic/stylelint-plugin)                                                                   |        ✅         |       ✅       |
| `@wordpress/stylelint-config`                       | [![@wordpress/stylelint-config](https://img.shields.io/npm/v/@wordpress/stylelint-config.svg)](https://www.npmjs.com/package/@wordpress/stylelint-config)                                                                   |        ❌         |       ❌       |
| `jest-preset-stylelint`                             | [![jest-preset-stylelint](https://img.shields.io/npm/v/jest-preset-stylelint.svg)](https://www.npmjs.com/package/jest-preset-stylelint)                                                                                     |        ✅         |       ✅       |
| `stylelint-actions-formatters`                      | [![stylelint-actions-formatters](https://img.shields.io/npm/v/stylelint-actions-formatters.svg)](https://www.npmjs.com/package/stylelint-actions-formatters)                                                                |        ✅         |       ✅       |
| `stylelint-checkstyle-reporter`                     | [![stylelint-checkstyle-reporter](https://img.shields.io/npm/v/stylelint-checkstyle-reporter.svg)](https://www.npmjs.com/package/stylelint-checkstyle-reporter)                                                             |        ❌         |       ❌       |
| `stylelint-config-clean-order`                      | [![stylelint-config-clean-order](https://img.shields.io/npm/v/stylelint-config-clean-order.svg)](https://www.npmjs.com/package/stylelint-config-clean-order)                                                                |        ✅         |       ✅       |
| `stylelint-config-css-modules`                      | [![stylelint-config-css-modules](https://img.shields.io/npm/v/stylelint-config-css-modules.svg)](https://www.npmjs.com/package/stylelint-config-css-modules)                                                                |        ✅         |       ✅       |
| `stylelint-config-html`                             | [![stylelint-config-html](https://img.shields.io/npm/v/stylelint-config-html.svg)](https://www.npmjs.com/package/stylelint-config-html)                                                                                     |        ✅         |       ✅       |
| `stylelint-config-idiomatic-order`                  | [![stylelint-config-idiomatic-order](https://img.shields.io/npm/v/stylelint-config-idiomatic-order.svg)](https://www.npmjs.com/package/stylelint-config-idiomatic-order)                                                    |        ❌         |       ❌       |
| `stylelint-config-property-sort-order-smacss`       | [![stylelint-config-property-sort-order-smacss](https://img.shields.io/npm/v/stylelint-config-property-sort-order-smacss.svg)](https://www.npmjs.com/package/stylelint-config-property-sort-order-smacss)                   |        ✅         |       ✅       |
| `stylelint-config-recess-order`                     | [![stylelint-config-recess-order](https://img.shields.io/npm/v/stylelint-config-recess-order.svg)](https://www.npmjs.com/package/stylelint-config-recess-order)                                                             |        ✅         |       ✅       |
| `stylelint-config-recommended-scss`                 | [![stylelint-config-recommended-scss](https://img.shields.io/npm/v/stylelint-config-recommended-scss.svg)](https://www.npmjs.com/package/stylelint-config-recommended-scss)                                                 |        ✅         |       ✅       |
| `stylelint-config-recommended-vue`                  | [![stylelint-config-recommended-vue](https://img.shields.io/npm/v/stylelint-config-recommended-vue.svg)](https://www.npmjs.com/package/stylelint-config-recommended-vue)                                                    |        ✅         |       ✅       |
| `stylelint-config-sass-guidelines`                  | [![stylelint-config-sass-guidelines](https://img.shields.io/npm/v/stylelint-config-sass-guidelines.svg)](https://www.npmjs.com/package/stylelint-config-sass-guidelines)                                                    |        ❌         |       ❌       |
| `stylelint-config-standard-scss`                    | [![stylelint-config-standard-scss](https://img.shields.io/npm/v/stylelint-config-standard-scss.svg)](https://www.npmjs.com/package/stylelint-config-standard-scss)                                                          |        ✅         |       ✅       |
| `stylelint-config-standard-vue`                     | [![stylelint-config-standard-vue](https://img.shields.io/npm/v/stylelint-config-standard-vue.svg)](https://www.npmjs.com/package/stylelint-config-standard-vue)                                                             |        ❌         |       ❌       |
| `stylelint-config-suitcss`                          | [![stylelint-config-suitcss](https://img.shields.io/npm/v/stylelint-config-suitcss.svg)](https://www.npmjs.com/package/stylelint-config-suitcss)                                                                            |        ❌         |       ❌       |
| `stylelint-config-twbs-bootstrap`                   | [![stylelint-config-twbs-bootstrap](https://img.shields.io/npm/v/stylelint-config-twbs-bootstrap.svg)](https://www.npmjs.com/package/stylelint-config-twbs-bootstrap)                                                       |        ❌         |       ❌       |
| `stylelint-config-wikimedia`                        | [![stylelint-config-wikimedia](https://img.shields.io/npm/v/stylelint-config-wikimedia.svg)](https://www.npmjs.com/package/stylelint-config-wikimedia)                                                                      |        ✅         |       ✅       |
| `stylelint-config-xo`                               | [![stylelint-config-xo](https://img.shields.io/npm/v/stylelint-config-xo.svg)](https://www.npmjs.com/package/stylelint-config-xo)                                                                                           |        ✅         |       ✅       |
| `stylelint-config-xo-scss`                          | [![stylelint-config-xo-scss](https://img.shields.io/npm/v/stylelint-config-xo-scss.svg)](https://www.npmjs.com/package/stylelint-config-xo-scss)                                                                            |        ✅         |       ✅       |
| `stylelint-csstree-validator`                       | [![stylelint-csstree-validator](https://img.shields.io/npm/v/stylelint-csstree-validator.svg)](https://www.npmjs.com/package/stylelint-csstree-validator)                                                                   |        ✅         |       ✅       |
| `stylelint-declaration-block-no-ignored-properties` | [![stylelint-declaration-block-no-ignored-properties](https://img.shields.io/npm/v/stylelint-declaration-block-no-ignored-properties.svg)](https://www.npmjs.com/package/stylelint-declaration-block-no-ignored-properties) |        ✅         |       ✅       |
| `stylelint-declaration-strict-value`                | [![stylelint-declaration-strict-value](https://img.shields.io/npm/v/stylelint-declaration-strict-value.svg)](https://www.npmjs.com/package/stylelint-declaration-strict-value)                                              |        ✅         |       ✅       |
| `stylelint-formatter-pretty`                        | [![stylelint-formatter-pretty](https://img.shields.io/npm/v/stylelint-formatter-pretty.svg)](https://www.npmjs.com/package/stylelint-formatter-pretty)                                                                      |        ✅         |       ✅       |
| `stylelint-high-performance-animation`              | [![stylelint-high-performance-animation](https://img.shields.io/npm/v/stylelint-high-performance-animation.svg)](https://www.npmjs.com/package/stylelint-high-performance-animation)                                        |        ✅         |       ✅       |
| `stylelint-less`                                    | [![stylelint-less](https://img.shields.io/npm/v/stylelint-less.svg)](https://www.npmjs.com/package/stylelint-less)                                                                                                          |        ✅         |       ✅       |
| `stylelint-media-use-custom-media`                  | [![stylelint-media-use-custom-media](https://img.shields.io/npm/v/stylelint-media-use-custom-media.svg)](https://www.npmjs.com/package/stylelint-media-use-custom-media)                                                    |        ✅         |       ✅       |
| `stylelint-no-unsupported-browser-features`         | [![stylelint-no-unsupported-browser-features](https://img.shields.io/npm/v/stylelint-no-unsupported-browser-features.svg)](https://www.npmjs.com/package/stylelint-no-unsupported-browser-features)                         |        ✅         |       ✅       |
| `stylelint-order`                                   | [![stylelint-order](https://img.shields.io/npm/v/stylelint-order.svg)](https://www.npmjs.com/package/stylelint-order)                                                                                                       |        ✅         |       ✅       |
| `stylelint-plugin-defensive-css`                    | [![stylelint-plugin-defensive-css](https://img.shields.io/npm/v/stylelint-plugin-defensive-css.svg)](https://www.npmjs.com/package/stylelint-plugin-defensive-css)                                                          |        ✅         |       ✅       |
| `stylelint-plugin-logical-css`                      | [![stylelint-plugin-logical-css](https://img.shields.io/npm/v/stylelint-plugin-logical-css.svg)](https://www.npmjs.com/package/stylelint-plugin-logical-css)                                                                |        ✅         |       ✅       |
| `stylelint-prettier`                                | [![stylelint-prettier](https://img.shields.io/npm/v/stylelint-prettier.svg)](https://www.npmjs.com/package/stylelint-prettier)                                                                                              |        ✅         |       ✅       |
| `stylelint-react-native`                            | [![stylelint-react-native](https://img.shields.io/npm/v/stylelint-react-native.svg)](https://www.npmjs.com/package/stylelint-react-native)                                                                                  |        ❌         |       ❌       |
| `stylelint-scss`                                    | [![stylelint-scss](https://img.shields.io/npm/v/stylelint-scss.svg)](https://www.npmjs.com/package/stylelint-scss)                                                                                                          |        ✅         |       ✅       |
| `stylelint-selector-bem-pattern`                    | [![stylelint-selector-bem-pattern](https://img.shields.io/npm/v/stylelint-selector-bem-pattern.svg)](https://www.npmjs.com/package/stylelint-selector-bem-pattern)                                                          |        ✅         |       ✅       |
| `stylelint-stylus`                                  | [![stylelint-stylus](https://img.shields.io/npm/v/stylelint-stylus.svg)](https://www.npmjs.com/package/stylelint-stylus)                                                                                                    |        ❌         |       ❌       |
| `stylelint-suitcss`                                 | [![stylelint-suitcss](https://img.shields.io/npm/v/stylelint-suitcss.svg)](https://www.npmjs.com/package/stylelint-suitcss)                                                                                                 |        ❌         |       ❌       |
| `stylelint-test-rule-node`                          | [![stylelint-test-rule-node](https://img.shields.io/npm/v/stylelint-test-rule-node.svg)](https://www.npmjs.com/package/stylelint-test-rule-node)                                                                            |        ✅         |       ✅       |
| `stylelint-use-logical`                             | [![stylelint-use-logical](https://img.shields.io/npm/v/stylelint-use-logical.svg)](https://www.npmjs.com/package/stylelint-use-logical)                                                                                     |        ✅         |       ✅       |
| `stylelint-use-logical-spec`                        | [![stylelint-use-logical-spec](https://img.shields.io/npm/v/stylelint-use-logical-spec.svg)](https://www.npmjs.com/package/stylelint-use-logical-spec)                                                                      |        ✅         |       ✅       |
| `stylelint-use-nesting`                             | [![stylelint-use-nesting](https://img.shields.io/npm/v/stylelint-use-nesting.svg)](https://www.npmjs.com/package/stylelint-use-nesting)                                                                                     |        ✅         |       ✅       |
| `stylelint-value-no-unknown-custom-properties`      | [![stylelint-value-no-unknown-custom-properties](https://img.shields.io/npm/v/stylelint-value-no-unknown-custom-properties.svg)](https://www.npmjs.com/package/stylelint-value-no-unknown-custom-properties)                |        ✅         |       ✅       |
| `stylelint-webpack-plugin`                          | [![stylelint-webpack-plugin](https://img.shields.io/npm/v/stylelint-webpack-plugin.svg)](https://www.npmjs.com/package/stylelint-webpack-plugin)                                                                            |        ✅         |       ✅       |

Total 49 packages.

- **Stylelint 17.14.1**: ✅ 37 passed, ❌ 12 failed
- **Stylelint HEAD**: ✅ 37 passed, ❌ 12 failed
<!-- END:PACKAGES -->

> [!NOTE]
> The table above is auto-generated by the [test workflow](https://github.com/stylelint/stylelint-ecosystem-tester/actions/workflows/test-ecosystem.yml). Do not edit it manually.

## Criteria

An eligible package should meet the following criteria:

- Top 20 most popular packages in the following categories, except for those that do not obviously work with the latest Stylelint:
  - Plugins -- including `stylelint-plugin` keyword
  - Configurations -- including `stylelint-config` keyword
  - Formatters -- including `stylelint-formatter` keyword
- Or, acknowledged as exceptionally important

> [!TIP]
> The `npm view` and `npm search` commands can help us find such a package:
>
> ```shell
> npm view <your_package>
> ```
>
> ```shell
> npm search --searchopts='sortBy=popularity' --searchlimit=20 'keywords:stylelint-plugin'
> ```
>
> ```shell
> npm search --searchopts='sortBy=popularity' --searchlimit=20 'keywords:stylelint-config'
> ```
>
> ```shell
> npm search --searchopts='sortBy=popularity' --searchlimit=20 'keywords:stylelint-formatter'
> ```

## Contributing

We welcome issues or pull requests. Please read the [contributing guidelines](CONTRIBUTING.md) for details.
