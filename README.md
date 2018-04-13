# vue-fontawesome

[![npm](https://img.shields.io/npm/v/@fortawesome/vue-fontawesome.svg?style=flat-square)](https://www.npmjs.com/package/@fortawesome/vue-fontawesome)

Font Awesome 5 Vue component

## Pre-release available!

We currently have a 0.1.0 prerelease that improves tree shaking, uses the new SVG core library, and has updated API usage.

The pre-release is at a **release candidate** level and we could use your help testing it out. If you want to live on the edge (you rebel) head over to the [development branch of this project](https://github.com/FortAwesome/vue-fontawesome/tree/development).

## Installation

```
$ npm i --save @fortawesome/fontawesome
$ npm i --save @fortawesome/fontawesome-free-solid
$ npm i --save @fortawesome/vue-fontawesome
```

or

```
$ yarn add @fortawesome/fontawesome
$ yarn add @fortawesome/fontawesome-free-solid
$ yarn add @fortawesome/vue-fontawesome
```

## Usage

### The basics

The `icon` property of the `FontAwesomeIcon` component can be used in the following way:

Shorthand that assumes a prefix of `fas`:

```javascript
<font-awesome-icon icon="spinner" />
```

Explicit prefix (note the Vue bind shorthand because this uses an array):

```javascript
<font-awesome-icon :icon="['far', 'spinner']" />
```

Explicit icon definition (this is pseudo-code, see examples below for more detail):

```javascript
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

<font-awesome-icon :icon="getIcon" />

function getIcon () {
  return faCoffee
}
```

### Using it with Vue

Using an explicit icon offers the advantage of only bundling the icons that you
use in your final bundled file. This allows us to subset Font Awesome's
thousands of icons to just the small number that are normally used.

Import the specific icons that you need:

```javascript
<template>
  <div id="app">
    <font-awesome-icon :icon="icon" />
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

export default {
  name: 'FAExample',

  computed: {
    icon () {
      return faCoffee
    }
  },

  components: {
    FontAwesomeIcon
  }
}
</script>
```

It can be tedious to always import the icons individually so a library can be
configured and shorthand can be used when rendering the icon.

Define a library that can be used without explicit imports:

App.js

```javascript
import Vue from 'vue'
import Main from './Main.vue'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'

fontawesome.library.add(brands, faSpinner)

new Vue({
  el: '#app',
  render: h => h(Main)
})
```

FAExample.vue

```javascript
<template>
  <div id="app">
    <!-- If you are using the "Solid" style you can simply use the icon name -->
    <font-awesome-icon icon="spinner" />
    <!-- Using another style needs a prefix in the following array format -->
    <font-awesome-icon :icon="['fab', 'font-awesome']" />
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
export default {
  name: 'FAExample',

  components: {
    FontAwesomeIcon
  }
}
</script>
```

## Features

### Basic

Spin and pulse animation:

```javascript
<font-awesome-icon icon="spinner" spin />
<font-awesome-icon icon="spinner" pulse />
```

Fixed width:

```javascript
<font-awesome-icon icon="spinner" fixed-width />
```

Border:

```javascript
<font-awesome-icon icon="spinner" border />
```

List items:

```javascript
<font-awesome-icon icon="spinner" list-item />
```

Flip horizontally, vertically, or both:

```javascript
<font-awesome-icon icon="spinner" flip="horizontal" />
<font-awesome-icon icon="spinner" flip="vertical" />
<font-awesome-icon icon="spinner" flip="both" />
```

Size:

```javascript
<font-awesome-icon icon="spinner" size="xs" />
<font-awesome-icon icon="spinner" size="lg" />
<font-awesome-icon icon="spinner" size="6x" />
```

Rotate:

```javascript
<font-awesome-icon icon="spinner" rotation="90" />
<font-awesome-icon icon="spinner" rotation="180" />
<font-awesome-icon icon="spinner" rotation="270" />
```

Pull left or right:

```javascript
<font-awesome-icon icon="spinner" pull="left" />
<font-awesome-icon icon="spinner" pull="right" />
```

### Advanced

Power Transforms:

```javascript
<font-awesome-icon icon="spinner" transform="shrink-6 left-4" />
<font-awesome-icon icon="spinner" :transform="{ rotate: 42 }" />
```

Masking:

```javascript
<font-awesome-icon icon="coffee" :mask="['far', 'circle']" />
```

Symbols:

```javascript
<font-awesome-icon icon="edit" symbol />
<font-awesome-icon icon="edit" symbol="edit-icon" />
```

Layers:

For this you should import FontAwesomeLayers as well:
```javascript
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'

export default {
  ...
  components: {
    FontAwesomeIcon,
    FontAwesomeLayers
  }
  ...
}
```

You can then simply layer up your icons:
```html
<font-awesome-layers class="fa-lg">
  <font-awesome-icon icon="circle" />
  <font-awesome-icon icon="check" transform="shrink-6" style="color: white;" />
</font-awesome-layers>
```

