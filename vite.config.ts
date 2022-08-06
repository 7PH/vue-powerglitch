import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@/': new URL('./src/', import.meta.url).pathname,
        },
    },
    build: {
        outDir: path.resolve(__dirname, 'build'),
        target: 'esnext',
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'PowerGlitch',
            formats: ['umd', 'es', 'iife'],
            fileName: (format) => `vue-powerglitch.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});