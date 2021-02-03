<a href="https://fontawesome.com">
  <img align="right" width="100" height="100" alt="Official Javascript Component" src="https://img.fortawesome.com/349cfdf6/official-javascript-component.svg">
</a>

# vue-fontawesome

[![npm](https://img.shields.io/npm/v/@fortawesome/vue-fontawesome.svg?style=flat-square)](https://www.npmjs.com/package/@fortawesome/vue-fontawesome)
[![GitHub Actions Status](https://github.com/FortAwesome/vue-fontawesome/workflows/CI/badge.svg)](https://github.com/FortAwesome/vue-fontawesome/actions)

> Font Awesome 5 Vue component using SVG with JS

---

**Vue 3 is just around the corner!**

**If you have been using 0.1.x of vue-fontawesome, you can safely upgrade to
2.x. We have some upgrading information in the [CHANGELOG](./CHANGELOG.md)**

---

<!-- toc -->

- [Introduction](#introduction)
  * [CodeSandbox Starter Sample 🚀](#codesandbox-starter-sample-%F0%9F%9A%80)
  * [Upgrading Font Awesome?](#upgrading-font-awesome)
  * [Get started](#get-started)
  * [Learn about our new SVG implementation](#learn-about-our-new-svg-implementation)
- [Installation](#installation)
- [Add more styles or Pro icons](#add-more-styles-or-pro-icons)
- [Usage](#usage)
  * [Recommended](#recommended)
    + [Using Solid icons](#using-solid-icons)
    + [Using Brand icons](#using-brand-icons)
    + [Using Regular icons](#using-regular-icons)
    + [Using Light icons](#using-light-icons)
    + [Using Duotone icons](#using-duotone-icons)
    + [Quick warning about self-closing tags](#quick-warning-about-self-closing-tags)
    + [Processing i tags into svg using Font Awesome](#processing-i-tags-into-svg-using-font-awesome)
  * [The icon property](#the-icon-property)
    + [Shorthand that assumes a prefix of "fas"](#shorthand-that-assumes-a-prefix-of-fas)
    + [Explicit prefix (note the Vue bind shorthand because this uses an array)](#explicit-prefix-note-the-vue-bind-shorthand-because-this-uses-an-array)
    + [Explicit icon definition through something like a computed property](#explicit-icon-definition-through-something-like-a-computed-property)
  * [Alternative using component property](#alternative-using-component-property)
  * [Why use the concept of a library?](#why-use-the-concept-of-a-library)
    + [Import the specific icons that you need](#import-the-specific-icons-that-you-need)
    + [Import the same icon from different styles](#import-the-same-icon-from-different-styles)
    + [Import entire styles](#import-entire-styles)
  * [Tree shaking alternative](#tree-shaking-alternative)
- [Features](#features)
  * [Register your components first](#register-your-components-first)
  * [Basic](#basic)
  * [Advanced](#advanced)
- [Integrating with other tools and frameworks](#integrating-with-other-tools-and-frameworks)
  * [Nuxt.js](#nuxtjs)
  * [PurgeCSS](#purgecss)
  * [Web Components with vue-web-component-wrapper](#web-components-with-vue-web-component-wrapper)
- [FAQ](#faq)
  * [Why so explicit (the :icon="['far', 'coffee']" syntax)?](#why-so-explicit-the-iconfar-coffee-syntax)
    + [How about a separate property for the prefix?](#how-about-a-separate-property-for-the-prefix)
    + [Bindings become boilerplate and verbose](#bindings-become-boilerplate-and-verbose)
    + [Properties can disagree with each other](#properties-can-disagree-with-each-other)
- [How to Help](#how-to-help)
- [Contributors](#contributors)
- [Releasing this project](#releasing-this-project)

<!-- tocstop -->

## Introduction

Hey there! We're glad you're here...

### CodeSandbox Starter Sample 🚀

Here's a [CodeSandbox Starter Sample](https://codesandbox.io/s/github/FortAwesome/vue-fontawesome/tree/master/examples/vue-cli-webpack) on how to display Solid, Regular, and Brand icons [using the Icon Library](https://github.com/FortAwesome/vue-fontawesome#usage).

### Upgrading Font Awesome?

If you've used Font Awesome in the past (version 4 or older) there are some
things that you should learn before you dive in.

> https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4

### Get started

This package is for integrating with Vue.js. If you aren't using Vue then it's
not going to help you. Head over to our "Get Started" page for some guidance.

> https://fontawesome.com/how-to-use/on-the-web/setup/getting-started

### Learn about our new SVG implementation

This package, under the hood, uses SVG with JS and the `@fortawesome/fontawesome-svg-core` library. This implementation differs drastically from
the web fonts implementation that was used in version 4 and older of Font Awesome. You might head over there to learn about how it works.

> https://fontawesome.com/how-to-use/on-the-web/advanced/svg-javascript-core

## Installation

Install the core package and icon content.

```
$ npm i --save @fortawesome/fontawesome-svg-core
$ npm i --save @fortawesome/free-solid-svg-icons
```

Or with Yarn:
```
$ yarn add @fortawesome/fontawesome-svg-core
$ yarn add @fortawesome/free-solid-svg-icons
```

**Using Vue 2.x**

```
$ npm i --save @fortawesome/vue-fontawesome@latest
```

**Using Vue 3.x**

```
$ npm i --save @fortawesome/vue-fontawesome@prerelease
```

## Add more styles or Pro icons

Brands are separated into their own style and for customers upgrading from
version 4 to 5 we have a limited number of Regular icons available.

**Visit [fontawesome.com/icons](https://fontawesome.com/icons) to search for free and Pro icons**

```
$ npm i --save @fortawesome/free-brands-svg-icons
$ npm i --save @fortawesome/free-regular-svg-icons
```

If you are a [Font Awesome Pro](https://fontawesome.com/pro) subscriber you can install Pro packages after these [additional configuration](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers) are made.

```
$ npm i --save @fortawesome/pro-solid-svg-icons
$ npm i --save @fortawesome/pro-regular-svg-icons
$ npm i --save @fortawesome/pro-light-svg-icons
$ npm i --save @fortawesome/pro-duotone-svg-icons
```

## Usage

### Recommended

The following examples are based on a project configured with [vue-cli](https://github.com/vuejs/vue-cli).

`src/main.js`

```javascript
import Vue from 'vue'
import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```

`src/App.vue`

```vue
<template>
  <div id="app">
    <font-awesome-icon icon="user-secret" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
```

#### Using Solid icons

```javascript
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)
```

```html
<!-- The solid style is implicit -->
<font-awesome-icon icon="user-secret" />

<!-- It's better to be explicit -->
<!-- Don't forget to bind the property with ":" (we forget all the time!) -->
<font-awesome-icon :icon="['fas', 'user-secret']" />
```

#### Using Brand icons

```javascript
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(faFontAwesome)
```

```html
<!-- Don't forget to bind the property with ":" (we forget all the time!) -->
<font-awesome-icon :icon="['fab', 'font-awesome']" />
```

#### Using Regular icons

Using the Pro packages requires [additional configuration](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers).

```javascript
import { library } from '@fortawesome/fontawesome-svg-core'
# Note we are using the Pro style here
import { faUserSecret } from '@fortawesome/pro-regular-svg-icons'

library.add(faUserSecret)
```

```html
<font-awesome-icon :icon="['far', 'user-secret']" />
```

#### Using Light icons

```javascript
import { library } from '@fortawesome/fontawesome-svg-core'
# Note we are using the Pro style here
import { faUserSecret } from '@fortawesome/pro-light-svg-icons'

library.add(faUserSecret)
```

```html
<font-awesome-icon :icon="['fal', 'user-secret']" />
```

#### Using Duotone icons

```javascript
import { library } from '@fortawesome/fontawesome-svg-core'
# Note we are using the Pro style here
import { faUserSecret } from '@fortawesome/pro-duotone-svg-icons'

library.add(faUserSecret)
```

```html
<font-awesome-icon :icon="['fad', 'user-secret']" />
```

You can also [import the same icon from different
styles](#import-the-same-icon-from-different-styles) with some help from ES
`import`.

#### Quick warning about self-closing tags

If you are using inline templates or HTML as templates you need to be careful to avoid self-closing tags.

See [this issue on the Vue.js project](https://github.com/vuejs/vue/issues/1036)

If you are writing these types of templates make sure and use valid HTML syntax:

```html
<font-awesome-icon icon="coffee"></font-awesome-icon>
```

#### Processing i tags into svg using Font Awesome

A basic installation of [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=svg-with-js) has
the ability to automatically transform `<i class="fas fa-coffee"></i>` into
`<svg class="...">...</svg>` icons. This technology works with the browser's
DOM, [`requestAnimationFrame`][raf], and [`MutationObserver`][mo].

When using the `@fortawesome/fontawesome-svg-core` package this **behavior is
disabled by default**. This project uses that package so you will have to
explicitly enable it like this:

```javascript
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch() // This will kick of the initial replacement of i to svg tags and configure a MutationObserver
```

[raf]: https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
[mo]: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver

### The icon property

The `icon` property of the `FontAwesomeIcon` component can be used in the following way:

#### Shorthand that assumes a prefix of "fas"

```javascript
<font-awesome-icon icon="spinner" />
<font-awesome-icon icon="align-left" />

<font-awesome-icon :icon="['fas', 'spinner']" /> # Same as above
<font-awesome-icon :icon="['fas', 'align-left']" /> # Same as above
```

For the above to work you must add the `spinner` and `align-left` icon to the library.

```javascript
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faAlignLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faSpinner, faAlignLeft)
```

In the event that you are using an icon with a multi-word name please note that
you would need to pass in the icon name using _kebab-case_ as opposed to _camelCase_.

```javascript
<font-awesome-icon icon="address-card" />  # import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
```

#### Explicit prefix (note the Vue bind shorthand because this uses an array)

```javascript
<font-awesome-icon :icon="['far', 'spinner']" />
```

For the above to work you must add the regular `spinner` icon (Pro only) to the library.

```javascript
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/pro-regular-svg-icons'

library.add(faSpinner)
```

#### Explicit icon definition through something like a computed property

```javascript
<template>
  <div id="app">
    <font-awesome-icon :icon="appIcon" />
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

### Alternative using component property

With Vue you can tell your component to resolve other component explicitly.

```javascript
<template>
  <div>
    <font-awesome-icon :icon="myIcon" />
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'MyComponent',

  data () {
    return {
      myIcon: faSpinner
    }
  },

  components: {
    FontAwesomeIcon
  }
}
</script>
```

### Why use the concept of a library?

Explicitly selecting icons offer the advantage of only bundling the icons that you
use in your final bundled file. This allows us to subset Font Awesome's
thousands of icons to just the small number that are normally used.

#### Import the specific icons that you need

```javascript
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/pro-light-svg-icons'

library.add(faCoffee, faSpinner)
```

#### Import the same icon from different styles

```javascript
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee as fasCoffee } from '@fortawesome/pro-solid-svg-icons'
import { faCoffee as farCoffee } from '@fortawesome/pro-regular-svg-icons'
import { faCoffee as falCoffee } from '@fortawesome/pro-light-svg-icons'
import { faCoffee as fadCoffee } from '@fortawesome/pro-duotone-svg-icons'

library.add(fasCoffee, farCoffee, falCoffee, fadCoffee)
```

```html
<font-awesome-icon :icon="['fas', 'coffee']"/>
<font-awesome-icon :icon="['far', 'coffee']"/>
<font-awesome-icon :icon="['fal', 'coffee']"/>
<font-awesome-icon :icon="['fad', 'coffee']"/>
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
import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee'
import { faSpinner } from '@fortawesome/pro-light-svg-icons/faSpinner'

library.add(faCoffee, faSpinner)
```

How does this work? We have individual icon files like
`node_modules/@fortawesome/free-solid-svg-icons/faCoffee.js` that contain just
that specific icon.

## Features

The following features are available as part of Font Awesome. Note that the syntax is different from our general web-use documentation.

### Register your components first

To use the following examples you must first register your component so Vue is aware of it.

A good place to do this is in `main.js` or in the module you are calling `new
Vue()`. **Make sure you register the component** and **have added icons to your
library** before you bootstrap your Vue application.

```javascript
import Vue from 'vue'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
```

### Basic

[Size](https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons):

```html
<font-awesome-icon icon="spinner" size="xs" />
<font-awesome-icon icon="spinner" size="lg" />
<font-awesome-icon icon="spinner" size="6x" />
```

[Fixed width](https://fontawesome.com/how-to-use/on-the-web/styling/fixed-width-icons):

```html
<font-awesome-icon icon="spinner" fixed-width />
```

[Rotate](https://fontawesome.com/how-to-use/on-the-web/styling/rotating-icons):

```html
<font-awesome-icon icon="spinner" rotation="90" />
<font-awesome-icon icon="spinner" rotation="180" />
<font-awesome-icon icon="spinner" rotation="270" />
```

Flip horizontally, vertically, or both:

```html
<font-awesome-icon icon="spinner" flip="horizontal" />
<font-awesome-icon icon="spinner" flip="vertical" />
<font-awesome-icon icon="spinner" flip="both" />
```

Spin and pulse [animation](https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons):

```html
<font-awesome-icon icon="spinner" spin />
<font-awesome-icon icon="spinner" pulse />
```

[Border](https://fontawesome.com/how-to-use/on-the-web/styling/bordered-pulled-icons):

```html
<font-awesome-icon icon="spinner" border />
```

[Pull left or right](https://fontawesome.com/how-to-use/on-the-web/styling/bordered-pulled-icons):

```html
<font-awesome-icon icon="spinner" pull="left" />
<font-awesome-icon icon="spinner" pull="right" />
```

[Inverse](https://fontawesome.com/how-to-use/on-the-web/styling/stacking-icons):

```html
<font-awesome-icon icon="spinner" inverse />
```

[Swap opacity](https://fontawesome.com/how-to-use/on-the-web/styling/duotone-icons#swapping-layers):

```html
<font-awesome-icon :icon="['fad', 'spinner']" swap-opacity />
```

### Advanced

[Power Transforms](https://fontawesome.com/how-to-use/on-the-web/styling/power-transforms):

```html
<font-awesome-icon icon="spinner" transform="shrink-6 left-4" />
<font-awesome-icon icon="spinner" :transform="{ rotate: 42 }" />
```

[Masking](https://fontawesome.com/how-to-use/on-the-web/styling/masking):

```html
<font-awesome-icon icon="coffee" :mask="['far', 'circle']" />
```

[Symbols](https://fontawesome.com/how-to-use/on-the-web/advanced/svg-symbols):

```html
<font-awesome-icon icon="edit" symbol />
<font-awesome-icon icon="edit" symbol="edit-icon" />
```

[Layers](https://fontawesome.com/how-to-use/on-the-web/styling/layering):

```html
<font-awesome-layers class="fa-lg">
  <font-awesome-icon icon="circle" />
  <font-awesome-icon icon="check" transform="shrink-6" :style="{ color: 'white' }" />
</font-awesome-layers>
```

[Layers text](https://fontawesome.com/how-to-use/on-the-web/styling/layering):

```html
<font-awesome-layers full-width class="fa-4x">
  <font-awesome-icon icon="queen"/>
  <font-awesome-layers-text class="gray8" transform="down-2 shrink-8" value="Q" />
</font-awesome-layers>
```

[Counters](https://fontawesome.com/how-to-use/on-the-web/styling/layering):

```html
<font-awesome-layers full-width class="fa-4x">
  <font-awesome-icon icon="envelope"/>
  <font-awesome-layers-text counter value="1" position="top-right" />
</font-awesome-layers>
```

## Integrating with other tools and frameworks

### Nuxt.js

Install `@fortawesome/vue-fontawesome` and `@fortawesome/fontawesome-svg-core` and any icon packages.

```
npm install --save @fortawesome/vue-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons
```

Inside your Nuxt.js project add a `plugins/fontawesome.js` file.

```javascript
import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
```

Modify `nuxt.config.js` adding to the `css` and `plugins` sections.

```javascript
css: [
  '@fortawesome/fontawesome-svg-core/styles.css'
]
```

```javascript
plugins: [
  '~/plugins/fontawesome.js'
]
```

### PurgeCSS

If you use PurgeCSS, or use the nuxt.js tailwindcss module which comes with PurgeCSS prebundled, you need to add fontawesome css classes to the whitelist, as the classes only gets inserted on rendering, and PurgeCSS will treat them as unused and remove them otherwise.

In your `nuxt.config.js`, add a purgeCSS config object. You may adjust the regex to your liking:

```javascript
purgeCSS: {
  whitelistPatterns: [/svg.*/, /fa.*/]
},
```

### Web Components with vue-web-component-wrapper

The Vue [project provides a wrapper](https://github.com/vuejs/vue-web-component-wrapper)
that will register your Vue components as [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

This project and all Font Awesome SVG icons will work just fine in these
components but we need to take an additional step to add the CSS correctly.

To take advantage of encapsulation that the Shadow DOM provides and to keep
other areas of the DOM clean we need to add the Font Awesome CSS to the root of
the Shadow DOM.

Here is an example that leverages the `mounted()` lifecycle hook to insert the CSS.

```javascript
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, dom } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faStroopwafel, faDragon } from '@fortawesome/free-solid-svg-icons'

// Make sure you tell Font Awesome to skip auto-inserting CSS into the <head>
config.autoAddCss = false

const component = {
  name: 'MyCustomElement',

  template: `<font-awesome-icon :icon="icon" />`,

  components: {
    FontAwesomeIcon
  },

  mounted () {
    // This will only work on your root Vue component since it's using $parent
    const { shadowRoot } = this.$parent.$options
    const id = 'fa-styles'

    if (!shadowRoot.getElementById(`${id}`)) {
      const faStyles = document.createElement('style')
      faStyles.setAttribute('id', id)
      faStyles.textContent = dom.css()
      shadowRoot.appendChild(faStyles)
    }
  },

  computed: {
    icon () {
      const icons = [faCoffee, faStroopwafel, faDragon]

      return icons[Math.floor(Math.random() * 3)]
    }
  }
}

export default component
</script>
```

## FAQ

### Why so explicit (the :icon="['far', 'coffee']" syntax)?

It's been brought up a few times that the array syntax used for specifying an
icon from the library is a bit cumbersome. Initially, this does seem to
be the case but we do have good reasons.

#### How about a separate property for the prefix?

```html
<font-awesome-icon far icon="spinner" />
```

or

```html
<font-awesome-icon prefix="far" icon="spinner" />
```

The problem with this is that it does not provide a consistent or concise way to specify the mask.

```html
<font-awesome-icon far icon="spinner" mask="circle" />
```

Does the `far` apply to the icon or the mask? What is the prefix for the property it does not apply to?

Whereas this is consistent and concise:

```html
<font-awesome-icon :icon="['far', 'spinner']" :mask="['fas', 'circle']" />
```

#### Bindings become boilerplate and verbose

Since icons are not always static but can change based on Vue component
`methods` or `computed` values we have to take that into consideration.

Icon properties end up being more verbose:

```html
<font-awesome-icon :far="style === 'far'" :fal="style === 'fal'" :icon="icon" />
```

vs.

```html
<font-awesome-icon :icon="[style, icon]" />
```

Or if you are using a `prefix` property it smells of needless boilerplate:

```html
<template>
  <font-awesome-icon :prefix="iconPrefix" :icon="iconName" />
</template>

<script>
export default {
  computed: {
    iconPrefix() {
      return 'fas'
    },
    iconName() {
      return 'coffee'
    }
  }
}
</script>
```

vs.

```html
<template>
  <font-awesome-icon :icon="icon" />
</template>

<script>
export default {
  computed: {
    icon() {
      return ['fas', 'coffee']
    }
  }
}
</script>
```

#### Properties can disagree with each other

If we allow prefix definition through a property and we also allow an icon to
be specified as an object through direct import these two have a chance to
argue with eachother. This could lead to some head-scratching when an icon
doesn't appear in the expected style.

In the following case which style should be used (light from the icon definition or regular from the far boolean):

```html
import { faSpinner } from `@fortawesome/pro-light-svg-icons`

<template>
  <font-awesome-icon far :icon="faSpinner" />
</template>

<script>
export default {
  data() {
    return {
      faSpinner
    }
  }
}
</script>
```

## How to Help

Review the following docs before diving in:

* [CONTRIBUTING.md](CONTRIBUTING.md)
* [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)

And then:

1. Check the existing issue and see if you can help!

## Contributors

The following contributors have either hepled to start this project, have contributed
code, are actively maintaining it (including documentation), or in other ways
being awesome contributors to this project. **We'd like to take a moment to recognize them.**

|                                                             | Name           | GitHub                                               |
| :--------------------------------------------------------:  | -------------- | ---------------------------------------------------- |
| <img src="https://github.com/SirLamer.png?size=72" />       | SirLamer       | [@SirLamer](https://github.com/SirLamer)             |
| <img src="https://github.com/meteorlxy.png?size=72" />      | Liu Xinyu      | [@meteorlxy](https://github.com/meteorlxy)           |
| <img src="https://github.com/schulz3000.png?size=72" />     | Xaver Schulz   | [@schulz3000](https://github.com/schulz3000)         |
| <img src="https://github.com/ihmels.png?size=72" />         | Yannick Ihmels | [@ihmels](https://github.com/ihmels)                 |
| <img src="https://github.com/btaens.png?size=72" />         | btaens         | [@btaens](https://github.com/btaens)                 |
| <img src="https://github.com/david-driscoll.png?size=72" /> | David Driscoll | [@david-driscoll](https://github.com/david-driscoll) |
| <img src="https://github.com/tyranteon.png?size=72" />      | Tyranteon      | [@tyranteon](https://github.com/tyranteon)           |

If we've missed someone (which is quite likely) submit a Pull Request to us and we'll get it resolved.

The Font Awesome team:

|                                                            | Name           | GitHub                                             |
| :--------------------------------------------------------: | -------------- | -------------------------------------------------- |
| <img src="https://github.com/supercodepoet.png?size=72" /> | Travis Chase   | [@supercodepoet](https://github.com/supercodepoet) |
| <img src="https://github.com/robmadole.png?size=72" />     | Rob Madole     | [@robmadole](https://github.com/robmadole)         |
| <img src="https://github.com/mlwilkerson.png?size=72" />   | Mike Wilkerson | [@mlwilkerson](https://github.com/mlwilkerson)     |
| <img src="https://github.com/talbs.png?size=72" />         | Brian Talbot   | [@talbs](https://github.com/talbs)                 |
| <img src="https://github.com/jasonlundien.png?size=72" />  | Jason Lundien  | [@jasonlundien](https://github.com/jasonlundien)   |

## Releasing this project

See [DEVELOPMENT.md](DEVELOPMENT.md#release)
