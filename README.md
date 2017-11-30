# vue-fontawesome

Font Awesome 5 Vue component

## Installation

```
$ npm i --save @fortawesome/fontawesome
$ npm i --save @fortawesome/vue-fontawesome
```

or

```
$ yarn add @fortawesome/fontawesome
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
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

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
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

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
import { faSpinner } from '@fortawesome/fontawesome-free-solid'

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
<font-awesome-icon icon="spinner" rotate="90" />
<font-awesome-icon icon="spinner" rotate="180" />
<font-awesome-icon icon="spinner" rotate="270" />
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
