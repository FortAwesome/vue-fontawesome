# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## [3.1.2](https://github.com/FortAwesome/vue-fontawesome/releases/tag/3.1.2) - 2025-09-09

### Changed

- Replaced Jest with Vitest as the test runner for unit tests. This will help improve test performance and better aligns
  with the Vue 3 + Vite ecosystem.

- Updated `FontAwesomeIconProps`:
  - `flip` now accepts the `boolean` type in addition to `'horizontal' | 'vertical' | 'both'`
  - `maskId` is now correctly typed as `string`

- Updated `DEVELOPMENT.md` with revised release instructions

---

## [3.1.1](https://github.com/FortAwesome/vue-fontawesome/releases/tag/3.1.1) - 2025-07-24

### Changed

- Removed version checks related to `props.fixedWidth`, `iconProps.title`, and `iconProps.title`.

- The use of `require` to retrieve the version from `@fortawesome/fontawesome-svg-core` for version checks has been
  removed to help ensure compatibility with ESM builds.

---

## [3.1.0](https://github.com/FortAwesome/vue-fontawesome/releases/tag/3.1.0) - 2025-07-22

### Changed

- Font Awesome Pro+ icons are now available with an active Pro+ subscription.

- Added `widthAuto` prop

- Added `rotateBy` prop

- Deprecated `fa-fw` prop

---

## [3.0.8](https://github.com/FortAwesome/vue-fontawesome/releases/tag/3.0.8) - 2024-05-21

### Changed

- Updated `package-lock.json` to help fix faililng tests

---

## [3.0.7](https://github.com/FortAwesome/vue-fontawesome/releases/tag/3.0.7) - 2024-05-21

### Changed

- Updated nodejs version in `.tool-versions`
- Updated Jest configuration for local testing
- Removed an unused import in `FontAwesomeLayers.test.js`
- Updated `node-versions` in `ci.yml`
- Added additional exports in `index.d.ts`
- Updated `README.md` for new Font Awesome Doc link

---

## [3.0.6](https://github.com/FortAwesome/vue-fontawesome/releases/tag/3.0.6) - 2024-01-29

### Changed

- Added missing exports to TS definition in `index.d.ts`

---

## [3.0.5](https://github.com/FortAwesome/vue-fontawesome/releases/tag/3.0.5) - 2023-11-06

### Changed

- Removed .tgz file

---

## [3.0.4](https://github.com/FortAwesome/vue-fontawesome/releases/tag/3.0.4) - 2023-11-06

### Added

- Tests for Sharp Family
- Ability to include a title prop (github issue #[181](https://github.com/FortAwesome/vue-fontawesome/issues/181))
- Prettier config file

---

## [3.0.3](https://github.com/FortAwesome/vue-fontawesome/releases/tag/3.0.3) - 2023-01-24

### Changed

- NPM download `@fortawesome/vue-fontawesome-latest` is now set to Vue 3; to download the Vue 2 package you will have to use `@fortawesome/vue-fontawesome-latest-2`, which is described in our [Vue setup docs](https://fontawesome.com/docs/web/use-with/vue/#_3-add-the-vue-component)
- CI workflow updated for testing
- README.md and package.json updated for new contributor

### Added

- Missing TypeScript animations added (github issue #[428](https://github.com/FortAwesome/vue-fontawesome/issues/428))
- Missing TypeScript sizes added (github issue #[415](https://github.com/FortAwesome/vue-fontawesome/issues/415))

---

## [3.0.2](https://github.com/FortAwesome/vue-fontawesome/releases/tag/3.0.2) - 2022-11-07

### Changed

- Vue 3 Composition API TypeScript support (github issue #[276](https://github.com/FortAwesome/vue-fontawesome/issues/276))
- Updated README.md with a spelling correction, linter fixes, and new contributor
- Updated icon example in App.vue to use `fixed-width` rather than `full-width`

### Added

- Missing tests

---

## [3.0.1](https://github.com/FortAwesome/vue-fontawesome/releases/tag/3.0.1) - 2022-06-17

### Changed

- README.md Documentation now points to https://fontawesome.com/docs/web/use-with/vue/

---

## [3.0.0](https://github.com/FortAwesome/vue-fontawesome/releases/tag/3.0.0) - 2022-06-07

### Added

- New animations for bounce and shake
- Feature to call icons using a string format

### Fixed

- Animations for beat, fade, beat-fade, flash, spin-pulse, and spin-reverse
- Tee-shirt sizes to include 2xs, lg, xl, and 2xl
- Flip animation when used by itself

---

## [3.0.0-5](https://github.com/FortAwesome/vue-fontawesome/releases/tag/3.0.0-5) - 2021-10-18

### Fixed

- Include 1.3.0-beta versions in peer dependencies

---

## [3.0.0-4](https://github.com/FortAwesome/vue-fontawesome/releases/tag/3.0.0-4) - 2021-05-23

### Fixed

- Fix reactivity #297

---

## [3.0.0-3](https://github.com/FortAwesome/vue-fontawesome/releases/tag/3.0.0-3) - 2020-12-09

### Fixed

- Allow for non-RC releases of Vue 3

---

## [3.0.0-2](https://github.com/FortAwesome/vue-fontawesome/releases/tag/3.0.0-2) - 2020-10-09

### Fixed

- Make Vue as an external dependency #258 #260

---

## [3.0.0-1](https://github.com/FortAwesome/vue-fontawesome/releases/tag/3.0.0-1) - 2020-09-01

### Added

- Support for Vue 3.x RC's and betas #246 #249

---

See the [CHANGELOG prior to version 3](https://github.com/FortAwesome/vue-fontawesome/blob/2.x/CHANGELOG.md).
