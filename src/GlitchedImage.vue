<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { PowerGlitch } from 'powerglitch';

const props = defineProps({
    imageUrl: {
        type: String,
        required: true,
    },
    options: {
        type: Object,
        required: false,
        default: () => ({ }),
    },
});

const glitched = ref(null);
onMounted(() => {
    PowerGlitch.glitch(
        glitched.value as unknown as HTMLDivElement,
        {
            ...props.options,
            imageUrl: props.imageUrl,
        },
    );
});
</script>

<template>
    <div ref="glitched" />
</template>
