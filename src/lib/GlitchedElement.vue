<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import { PowerGlitch } from 'powerglitch';
import { GlitchedElementRef } from './GlitchedElementRef';


const props = defineProps({
    /**
     * Options passed to PowerGlitch.
     * @remarks
     * The only option which will be ignored is `createContainers`, as this component always set this value to false. 
     */
    options: {
        type: Object,
        required: false,
        default: () => ({ }),
    },

    /**
     * Whether this component's root div should behave as an inline block or as a block.
     */
    inline: {
        type: Boolean,
        required: false,
        default: false,
    },
});

/**
 * Placeholder functions to start/stop the glitch, set after actually glitching the element.
 */
let startGlitch: () => void = () => void 0;
let stopGlitch: () => void = () => void 0;

/**
 * Wait for the app to be mounted.
 */
const glitched: Ref<HTMLDivElement | null> = ref(null);
onMounted(() => {
    ({ startGlitch, stopGlitch } = PowerGlitch.glitch(glitched.value as HTMLDivElement, { ...props.options, createContainers: false }));
});

/**
 * Expose glitch controls.
 */
defineExpose<GlitchedElementRef>({
    startGlitch: () => startGlitch(),
    stopGlitch: () => stopGlitch(),
});
</script>

<template>
    <div :style="{ display: inline ? 'inline-block' : 'block' }">
        <div ref="glitched">
            <div>
                <slot />
            </div>
        </div>
    </div>
</template>
