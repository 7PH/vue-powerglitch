# Vue PowerGlitch

<img src="./assets/intro.gif">

PowerGlitch is a standalone library with no external dependencies. It leverages CSS animations to create a glitch effect on images. No canvas or DOM manipulations are needed. It weights around 1.9kb minified and gzipped and 4.3kb minified.

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

2. Install the plugin to glitch images in any component without worrying about imports (recommended).

    ```js
    import PowerGlitchPlugin from 'vue-powerglitch'

    const app = createApp(app)
        .use(PowerGlitchPlugin)
        .mount('#app')
    ```
    alternatively, you can import the `GlitchedImage` component from `vue-powerglitch` anytime you want to use it.

    ```js
    // e.g. src/client/component/NavBar.vue
    import { GlitchedImage } from 'vue-powerglitch'
    ```

## Glitch

1. Add a glitched image in your component
    ```html
    <GlitchedImage
        src="https://raw.githubusercontent.com/7PH/vue-powerglitch/master/assets/logo.png"
    />
    ```

2. If you installed the plugin, this is the only thing you need to do. Otherwise, do not forget to import the component when you use it.

## Customize

You can pass options to customize the glitch effect,
```html
<GlitchedImage
    src="https://raw.githubusercontent.com/7PH/vue-powerglitch/master/assets/logo.png"
    :options="{
        //... (optional) customize the glitch effect here
    }"
/>
```

The `options` props accepts any value defined in [the original PowerGlitch library](https://github.com/7PH/powerglitch).

Take a look at the [playground](https://7ph.github.io/powerglitch/#/playground) to visually find out the best glitch options for your image.

## Gotcha 

In terms of sizing, and unlike raw `<img>` tags, `<GlitchedImage>` behaves like an empty `<div>` tag. This means that it needs to be sized to the image size.
