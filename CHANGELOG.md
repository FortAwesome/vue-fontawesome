# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

---

- [Vue 3.x compatible version of this component](https://github.com/FortAwesome/vue-fontawesome/tree/3.x)
- [CHANGELOG for version 3.x](https://github.com/FortAwesome/vue-fontawesome/blob/3.x/CHANGELOG.md)

---
## [2.0.10](https://github.com/FortAwesome/vue-fontawesome/releases/tag/2.0.10)  - 2023-01-24

### Changed
- NPM download `@fortawesome/vue-fontawesome-latest` is now set to Vue 3; to download the Vue 2 package you will have to use `@fortawesome/vue-fontawesome-latest-2`, which is described in our [Vue setup docs](https://fontawesome.com/docs/web/use-with/vue/#_3-add-the-vue-component)
- Updated CI workflow testing to include Vue 2.7.x
- Updated contributor's GitHub user name in README.md and package.json files

---

## [2.0.9](https://github.com/FortAwesome/vue-fontawesome/releases/tag/2.0.9)  - 2022-11-07

### Changed
- README.md updated with spelling correction, linter fixes, and new contributor
- App.vue updated icon example to use `fixed-width` rather than `full-width`
- Added some tests for Sharp icons

---

## [2.0.8](https://github.com/FortAwesome/vue-fontawesome/releases/tag/2.0.8)  - 2022-06-17

### Changed
- README.md Documentation now points to https://fontawesome.com/docs/web/use-with/vue/

---

## [2.0.7](https://github.com/FortAwesome/vue-fontawesome/releases/tag/2.0.7)  - 2022-06-07

### Fixed
- Animations for bounce, shake, beat and beat-fade
- Flip animation when used by itself

---

## [2.0.6](https://github.com/FortAwesome/vue-fontawesome/releases/tag/2.0.6)  - 2021-10-18

### Fixed
- Include 1.3.0-beta versions in peer dependencies

---

## [2.0.5](https://github.com/FortAwesome/vue-fontawesome/releases/tag/2.0.5)  - 2021-10-15

### Added
- New sizes for `size` prop: 2xs, xl, 2xl
- New animation booleans: `beat`, `fade`, `flash`, `spin-pulse`, & `spin-reverse`

---

## [2.0.4](https://github.com/FortAwesome/vue-fontawesome/releases/tag/2.0.4)  - 2021-10-15

### Fixed
- Relax the peer dependency for @fortawesome/fontawesome-svg-core

---

## [2.0.3](https://github.com/FortAwesome/vue-fontawesome/releases/tag/2.0.3)  - 2021-10-15

### Fixed
- Skip parse.icon if the icon is imported directly from an icon package

---

## [2.0.2](https://github.com/FortAwesome/vue-fontawesome/releases/tag/2.0.2)  - 2020-12-17

### Fixed
- Bumping version to fix a failed release for 2.0.1

---

## [2.0.1](https://github.com/FortAwesome/vue-fontawesome/releases/tag/2.0.1)  - 2020-12-17

### Added
- Support for the new parse.icon function from the Font Awesome version 6 @fortawesome/fontawesome-svg-core

---

## [2.0.0](https://github.com/FortAwesome/vue-fontawesome/releases/tag/2.0.0)  - 2020-09-01

This release marks the official major release of the component as preparation
for supporting two different versions of Vue.

### What is the difference between 0.1.10 and 2.0.0?

There is no difference. We've jumped the version to 2.0.0 so you know which
version of vue-fontawesome you should install based on what version of Vue you
are using.

### What version should you install?

|         | Vue | vue-fontawesome |
| ------- |-----|-----------------|
| Version | 2.x | 2.x or 0.1.x    |
| Version | 3.x | 3.x             |

While you can still use 0.1 with Vue 2.x, we recommend upgrade to the 2.x
release. The 0.1 release line will not be getting any further updates.

---

## [0.1.10](https://github.com/FortAwesome/vue-fontawesome/releases/tag/0.1.10)  - 2020-06-15

### Fixed
- Add TSX support to Typescript definition

---

## [0.1.9](https://github.com/FortAwesome/vue-fontawesome/releases/tag/0.1.9)  - 2019-12-13

### Added
- Counters support for the FontAwesomeLayersText component #174
- FontAwesomeIcon now supports the "inverse" property #174

---

## [0.1.8](https://github.com/FortAwesome/vue-fontawesome/releases/tag/0.1.8)  - 2019-11-03

### Fixed
- Removed declare namespace in the TypeScript definition file #177

---

## [0.1.7](https://github.com/FortAwesome/vue-fontawesome/releases/tag/0.1.7)  - 2019-08-31

### Added
- Duotone icon support

---

## [0.1.6](https://github.com/FortAwesome/vue-fontawesome/releases/tag/0.1.6)  - 2019-03-18

### Changed
- Allow the rotation property to be either string or number #171

---

## [0.1.5](https://github.com/FortAwesome/vue-fontawesome/releases/tag/0.1.5)  - 2019-01-13

### Added
- Title prop #164

---

## [0.1.4](https://github.com/FortAwesome/vue-fontawesome/releases/tag/0.1.4)  - 2018-12-24

### Fixed
- Fixing TypeScript definition file #165

---

## [0.1.3](https://github.com/FortAwesome/vue-fontawesome/releases/tag/0.1.3)  - 2018-12-04

### Added
- Adding TypeScript definition file #159

---

## [0.1.2](https://github.com/FortAwesome/vue-fontawesome/releases/tag/0.1.2)  - 2018-10-29

### Added
- Adding ES module to package

---

## [0.1.1](https://github.com/FortAwesome/vue-fontawesome/releases/tag/0.1.1)  - 2018-07-16

### Fixed
- LayersText can use a number as it's value #115

---

## [0.1.0](https://github.com/FortAwesome/vue-fontawesome/releases/tag/0.1.0)  - 2018-06-20

### Changed
- Upgraded to the newer Font Awesome 5.1 packages

---

## [0.0.23](https://github.com/FortAwesome/vue-fontawesome/releases/tag/0.0.23)  - 2018-06-04

### Changed
- Update Vue dependency version to support > 2.4

---

## [0.0.22](https://github.com/FortAwesome/vue-fontawesome/releases/tag/0.0.22)  - 2017-12-19

### Changed
- Support for @fortawesome/fontawesome 1.1.0
