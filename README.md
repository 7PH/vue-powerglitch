# Vue PowerGlitch

<img src="./assets/intro.gif" alt="">

This Vue library is a wrapper around [PowerGlitch](https://github.com/7PH/powerglitch). PowerGlitch is a standalone library with no external dependencies. It leverages CSS animations to glitch anything on the web, without using a canvas. It weights less than 2kb minified and gzipped.

Useful links:
- [Original project repository and documentation](https://github.com/7PH/powerglitch)
- [Code coverage report for vue-powerglitch](https://7ph.github.io/vue-powerglitch/coverage/)
- [API reference for vue-powerglitch](https://7ph.github.io/vue-powerglitch/api-docs/)

# Getting started

<p align="center">
 <a href="#install">Install</a>
 → <a href="#glitch">Glitch</a>
 → <a href="#customize">Customize</a>
 → <a href="#glitch-controls">Controls</a>
 / <a href="#typescript">TypeScript</a>
</p>

## Install

1. Install `vue-powerglitch` using a package manager
    ```bash
    npm i --save vue-powerglitch
    # or
    yarn add vue-powerglitch
    ```

2. Install the plugin to glitch elements in any component without worrying about imports (recommended).

    ```js
    import PowerGlitchPlugin from 'vue-powerglitch'

    const app = createApp(app)
        .use(PowerGlitchPlugin)
        .mount('#app')
    ```
    alternatively, you can import the `GlitchedElement` component and/or `vGlitch` directive from `vue-powerglitch` anytime you want to use them.

    ```js
    // e.g. src/client/component/NavBar.vue
    import { GlitchedElement } from 'vue-powerglitch'
    import { vGlitch } from 'vue-powerglitch'
    ```

## Glitch

You have two ways to glitch elements. 

1. You can use the `GlitchedElement` component:
    ```html
    <GlitchedElement>
        <p>
            Power<b>Glitch</b> 🌎
        </p>
    </GlitchedElement>
    ```
    Specify whether it should behave as an inline-block with the `inline` prop:
    ```html
    Hello <GlitchedElement :inline='true'>PowerGlitch 🌎</GlitchedElement>
    ```

2. You can use the `v-glitch` directive to glitch any HTMLElement:
    ```html
    Hello <span v-glitch>PowerGlitch 🌎</span>
    ```

Using the `v-glitch` is simpler, but it has two drawbacks:
- It is not possible to combine `v-if` and `v-glitch` on the same HTMLElement
- You can not manually control the animation using the glitch controls methods

## Customize

You can pass options to customize the glitch effect, using `GlitchedElement`:
```html
<GlitchedElement
    :options="{
        //... (optional) customize the glitch effect here
    }"
>
    <div>
        PowerGlitch 🌎
    </div>
</GlitchedElement>
```

Or using `v-glitch`:
```html
Hello <span v-glitch="{ ... }">PowerGlitch 🌎</span>
```

The `options` props accepts any value defined in [the original PowerGlitch library](https://github.com/7PH/powerglitch).

Take a look at the [playground](https://7ph.github.io/powerglitch/#/playground) to visually find out the best glitch options for your element.

`GlitchedElement` also accepts an `inline` prop (default: false) which lets you control whether you want the glitch container to act as an `inline-block`. This can be useful if you are trying to glitch an inline element, i.e. a single word in a sentence.
```html
Hello <GlitchedElement :inline="true"><span>PowerGlitch 🌎</span></GlitchedElement>
```

## Glitch controls 

Retrieving the glitch controls is only possible when glitching using `GlitchedElement`, it is not possible to control the glitch animation when using the `v-glitch` directive.

The `GlitchedElement` component exposes two methods `startGlitch` and `stopGlitch` that let you control the glitch animation.

Here is an example using Vue 3 and Composition API

```html
<script setup>
import { ref } from 'vue'
import { GlitchedElement } from 'vue-powerglitch'

const glitched = ref(null)
</script>

<template>
    <button @click="glitched.startGlitch">Start</button>
    <button @click="glitched.stopGlitch">Stop</button>
    <GlitchedElement ref="glitched">
        <p>PowerGlitch 🌎</p>
    </GlitchedElement>
</template>
```

Using Vue 3 and Options API:

```html
<script>
import { GlitchedElement } from 'vue-powerglitch'

export default {
    components: { GlitchedElement },
}
</script>
<template>
    <button @click="$refs.glitched.startGlitch">Start</button>
    <button @click="$refs.glitched.stopGlitch">Stop</button>
    <GlitchedElement ref="glitched">
        <p>PowerGlitch 🌎</p>
    </GlitchedElement>
</template>
```

## TypeScript

If using TypeScript, you have access to an exported `GlitchedElementRef` representing a reference to the component.

```html
<script setup>
import { ref, Ref } from 'vue'
import { GlitchedElement, GlitchedElementRef } from 'vue-powerglitch'

const glitched: Ref<GlitchedElementRef?> = ref()
</script>

<template>
    <button @click="glitched?.startGlitch">Start</button>
    <button @click="glitched?.stopGlitch">Stop</button>
    <GlitchedElement ref="glitched">
        <p>PowerGlitch 🌎</p>
    </GlitchedElement>
</template>
```
