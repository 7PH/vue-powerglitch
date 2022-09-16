<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import { PowerGlitch } from 'powerglitch/src/index';
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
    // Should not happen
    if (! glitched.value) {
        throw new Error('Unable to glitch element');
    }
    // If slot does not contain exactly one top-level children
    if (glitched.value.children.length !== 1) {
        throw new Error('Glitched slot should contain exactly one top-level element');
    }
    // Glitch and update references to glitch controls
    ({ startGlitch, stopGlitch } = PowerGlitch.glitch(glitched.value, { ...props.options, createContainers: false }));
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
            <slot />
        </div>
    </div>
</template>
