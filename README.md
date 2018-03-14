# vue-fontawesome

[![npm](https://img.shields.io/npm/v/@fortawesome/vue-fontawesome.svg?style=flat-square)](https://www.npmjs.com/package/@fortawesome/vue-fontawesome)

Font Awesome 5 Vue component using SVG with JS

## Installation

```
$ npm i --save @fortawesome/fontawesome-svg-core
$ npm i --save @fortawesome/free-solid-svg-icons
$ npm i --save @fortawesome/vue-fontawesome
```

## Add more styles or Pro icons

Brands are separated into their own style and for customers upgrading from
version 4 to 5 we have a limited number of Regular icons available.

```
$ npm i --save @fortawesome/free-brands-svg-icons
$ npm i --save @fortawesome/free-regular-svg-icons
```

If you are a [Font Awesome Pro](https://fontawesome.com/pro) subscriber you can install Pro packages.

```
$ npm i --save @fortawesome/pro-solid-svg-icons
$ npm i --save @fortawesome/pro-regular-svg-icons
$ npm i --save @fortawesome/pro-light-svg-icons
```

Using the Pro packages requires [additional configuration](https://fontawesome.com/how-to-use/js-component-packages).

## or with Yarn

```
$ yarn add @fortawesome/fontawesome-svg-core
$ yarn add @fortawesome/free-solid-svg-icons
$ yarn add @fortawesome/vue-fontawesome
```

## Usage

### Recommended

The following examples are based on a project configured with [vue-cli](https://github.com/vuejs/vue-cli).

`src/main.js`

```javascript
import Vue from 'vue'
import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```

`src/App.js`

```javascript
<template>
  <div id="app">
    <font-awesome-icon icon="coffee" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
```

### The icon property

The `icon` property of the `FontAwesomeIcon` component can be used in the following way:

#### Shorthand that assumes a prefix of `fas`:

```javascript
<font-awesome-icon icon="spinner" />
<font-awesome-icon :icon="['fas', 'spinner']" /> # Same as above
```

For the above to work you must add the `spinner` icon to the library.

```javascript
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faSpinner)
```

#### Explicit prefix (note the Vue bind shorthand because this uses an array):

```javascript
<font-awesome-icon :icon="['far', 'spinner']" />
```

For the above to work you must add the regular `spinner` icon (Pro only) to the library.

```javascript
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/pro-regular-svg-icons'

library.add(faSpinner)
```

#### Explicit icon definition through something like a computed property:

```javascript
<template>
  <div id="app">
    <font-awesome-icon icon="appIcon" />
  </div>
</template>

<script>
import { faChessQueen } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'App',

  computed: {
    appIcon () {
      return faChessQueen
    }
  }
}
</script>
```

### Why use the concept of a library?

Explicitly selecting icons offer the advantage of only bundling the icons that you
use in your final bundled file. This allows us to subset Font Awesome's
thousands of icons to just the small number that are normally used.

#### Import the specific icons that you need:

```javascript
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/pro-light-svg-icons'

library.add(faCoffee, fab, faSpinner)
```

#### Import entire styles

```javascript
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)
```

This will add the _entire brands style to your library_. Be careful with this
approach as it may be convenient in the beginning but your bundle size will be
large. We **highly** recommend that you take advantage of subsetting through tree shaking.

### Tree shaking alternative

Keeping the bundles small when using `import { faCoffee }` relies on
[tree-shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking).
If you are not using a tool that supports tree shaking **you may end up bundling more
icons than you intend**. Here are some alternative import syntaxes:

```javascript
import { library } from '@fortawesome/fontawesome-svg-core'
import faCoffee from '@fortawesome/free-solid-svg-icons/faCoffee'
import faSpinner from '@fortawesome/pro-light-svg-icons/faSpinner'

library.add(faCoffee, faSpinner)
```

How does this work? We have individual icon files like
`node_modules/@fortawesome/free-solid-svg-icons/faCoffee.js` that contain just
that specific icon.

## Features

The following features are available as [part of Font Awesome](https://fontawesome.com/how-to-use/svg-with-js).

### Register your components first

To use the following examples you must first register your component so Vue is aware of it.

A good place to do this is in `main.js` or in the module you are calling `new
Vue()`. **Make sure you register the component** and **have added icons to your
library** before you bootstrap your Vue application.

```
import Vue from 'vue'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from 'vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
```

### Basic

Spin and pulse animation:

```html
<font-awesome-icon icon="spinner" spin />
<font-awesome-icon icon="spinner" pulse />
```

Fixed width:

```html
<font-awesome-icon icon="spinner" fixed-width />
```

Border:

```html
<font-awesome-icon icon="spinner" border />
```

Flip horizontally, vertically, or both:

```html
<font-awesome-icon icon="spinner" flip="horizontal" />
<font-awesome-icon icon="spinner" flip="vertical" />
<font-awesome-icon icon="spinner" flip="both" />
```

Size:

```html
<font-awesome-icon icon="spinner" size="xs" />
<font-awesome-icon icon="spinner" size="lg" />
<font-awesome-icon icon="spinner" size="6x" />
```

Rotate:

```html
<font-awesome-icon icon="spinner" rotation="90" />
<font-awesome-icon icon="spinner" rotation="180" />
<font-awesome-icon icon="spinner" rotation="270" />
```

Pull left or right:

```html
<font-awesome-icon icon="spinner" pull="left" />
<font-awesome-icon icon="spinner" pull="right" />
```

### Advanced

Power Transforms:

```html
<font-awesome-icon icon="spinner" transform="shrink-6 left-4" />
<font-awesome-icon icon="spinner" :transform="{ rotate: 42 }" />
```

Masking:

```html
<font-awesome-icon icon="coffee" :mask="['far', 'circle']" />
```

Symbols:

```html
<font-awesome-icon icon="edit" symbol />
<font-awesome-icon icon="edit" symbol="edit-icon" />
```

Layers:

```html
<font-awesome-layers class="fa-lg">
  <font-awesome-icon icon="circle" />
  <font-awesome-icon icon="check" transform="shrink-6" style="color: white;" />
</font-awesome-layers>
```

Layers text:

```html
<font-awesome-layers full-width class="fa-4x">
  <font-awesome-icon icon="queen"/>
  <font-awesome-layers-text class="gray8" transform="down-2 shrink-8" value="Q" />
</font-awesome-layers>
```
