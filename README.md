# Vue PowerGlitch

<img src="./assets/intro.gif">

PowerGlitch is a standalone library with no external dependencies. It leverages CSS animations to create a glitch effect on images. No canvas or DOM manipulations are needed. It weights less than 2kb minified and gzipped.

This Vue library is a wrapper around [PowerGlitch](https://github.com/7PH/powerglitch).

# Getting started

<p align="center">
 <a href="#install">Install</a>
 → <a href="#glitch">Glitch</a>
 → <a href="#customize">Customize</a>
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
    alternatively, you can import the `GlitchedElement` component from `vue-powerglitch` anytime you want to use it.

    ```js
    // e.g. src/client/component/NavBar.vue
    import { GlitchedElement } from 'vue-powerglitch'
    ```

## Glitch

1. Add a glitched element in your component
    ```html
    <GlitchedElement>
        <div>PowerGlitch 🌎</div>
    </GlitchedElement>
    ```

2. If you installed the plugin, this is the only thing you need to do. Otherwise, do not forget to import the component when you use it.

## Customize

You can pass options to customize the glitch effect,
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

The `options` props accepts any value defined in [the original PowerGlitch library](https://github.com/7PH/powerglitch). The only value you can not set is `createContainers`. This value is always set to `false` by the component itself.

Take a look at the [playground](https://7ph.github.io/powerglitch/#/playground) to visually find out the best glitch options for your element.

## Glitch controls 

The GlitchedElement component exposes two methods `startGlitch` and `stopGlitch` that let you control the glitch animation.

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
};
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

If using TypeScript, you have access to an exported `GlitchedElementRef`

```html
<script setup>
import { ref, Ref } from 'vue'
import { GlitchedElement, GlitchedElementRef } from 'vue-powerglitch'

const glitched: Ref<GlitchedElementRef?> = ref();
</script>

<template>
    <button @click="glitched?.startGlitch">Start</button>
    <button @click="glitched?.stopGlitch">Stop</button>
    <GlitchedElement ref="glitched">
        <p>PowerGlitch 🌎</p>
    </GlitchedElement>
</template>
```
