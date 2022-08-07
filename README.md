# Vue PowerGlitch

<img src="./assets/intro.gif">

PowerGlitch is a standalone library with no external dependencies. It leverages CSS animations to create a glitch effect on images. No canvas or DOM manipulations are needed. It weights around 1.9kb minified and gzipped and 4.3kb minified.

This library is a wrapper around the [PowerGlitch](https://github.com/7PH/powerglitch) library to glitch any image in Vue applications.

# Getting started

<p align="center">
 <a href="#install">Install</a>
 → <a href="#glitch">Glitch</a>
 → <a href="#customize">Customize</a>
</p>

## Install

Install `vue-powerglitch` using a package manager
```bash
npm i --save vue-powerglitch
# or
yarn add vue-powerglitch
```

Then, you can either install the plugin (recommended) or import and use the `GlitchedImage` component everywhere you need.

`Install the plugin (recommended)`

Installing the plugin will automatically install the library and register the `GlitchedImage` component, usable everywhere in your application.

1. Import and install the corresponding plugin in your application creation script
    ```js
    import PowerGlitchPlugin from 'vue-powerglitch'
    ```
2. Register the plugin to your Vue application
    ```js
    const app = createApp(app)
        .use(PowerGlitchPlugin)
        .mount('#app')
    ```
3. Use the `GlitchedImage` component anywhere in your application.

`Importing the component`

If you prefer, you can also import the component directly where you want to use it.

1. Import the component
    ```js
    // e.g. src/client/component/NavBar.vue
    import { GlitchedImage } from 'vue-powerglitch'
    ```

## Glitch

Add a glitched image to your Vue app
```html
<GlitchedImage
    src="https://raw.githubusercontent.com/7PH/vue-powerglitch/master/assets/logo.png"
    :options="{
        //... (optional) customize the glitch effect here
    }"
/>
```

That's it, your image is glitched!

## Customize

The `options` props accepts any value defined in [the original PowerGlitch library](https://github.com/7PH/powerglitch). You can also check the [playground](https://7ph.github.io/powerglitch/#/playground) to find out the best glitch options for your image.

## Gotcha 

In terms of sizing, and unlike raw `<img>` tags, `<GlitchedImage>` behaves like an empty `<div>` tag. This means that it needs to be sized to the image size.
