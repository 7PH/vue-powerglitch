import { createApp } from 'vue';
import PowerGlitchPlugin from './lib/index';
import App from './docs/App.vue';

createApp(App)
    .use(PowerGlitchPlugin)
    .mount('#app');
