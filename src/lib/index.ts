import { App } from 'vue';
import GlitchedElement from './GlitchedElement.vue';
import { GlitchedElementRef } from './GlitchedElementRef';


export default {
    install: (vueApp: App) => {
        vueApp.component('GlitchedElement', GlitchedElement);
    },
};

export type { GlitchedElementRef };
export { GlitchedElement };
