<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { PowerGlitch } from 'powerglitch';

const props = defineProps({
    options: {
        type: Object,
        required: false,
        default: () => ({ }),
    },
});


let startGlitch = () => { /* Set after glitch */  };
let stopGlitch = () => { /* Set after glitch */  };

const glitched = ref(null);
onMounted(() => {
    const result = PowerGlitch.glitch(
        (glitched.value as unknown as HTMLDivElement),
        { ...props.options },
    );
    startGlitch = result.startGlitch;
    stopGlitch = result.stopGlitch;
});

defineExpose({
    startGlitch,
    stopGlitch
});
</script>

<template>
    <div ref="glitched">
        <slot />
    </div>
</template>
