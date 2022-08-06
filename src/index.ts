import { App } from 'vue';
import GlitchedImage from './GlitchedImage.vue';

export default {
    install: (vueApp: App) => {
        vueApp.component('GlitchedImage', GlitchedImage);
    },
};

export { GlitchedImage };
