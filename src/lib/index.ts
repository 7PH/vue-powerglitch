import { App } from 'vue';
import GlitchedElement from './GlitchedElement.vue';
import { GlitchedElementRef } from './GlitchedElementRef';
import { vGlitch } from './vGlitch';

/**
 * Plugin to register the GlitchedElement component and v-glitch directive to your Vue 3 application.
 * @example
 * ```javascript
 * createApp(App)
 *   .use(PowerGlitchPlugin)
 *   .mount('#app');
 * ```
 */
const PowerGlitchPlugin = {
    install: (vueApp: App) => {
        vueApp.component('GlitchedElement', GlitchedElement);
        vueApp.directive('glitch', vGlitch);
    },
};

export type { GlitchedElementRef };
export { GlitchedElement, vGlitch, PowerGlitchPlugin };
export default PowerGlitchPlugin;
