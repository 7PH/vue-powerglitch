<script setup lang="ts">
import GlitchedImage from '@/GlitchedImage.vue';
</script>

<template>
    <GlitchedImage
        :options="{
            imageUrl: 'https://raw.githubusercontent.com/7PH/powerglitch/master/assets/logo-128.png',
        }"
        class="logo"
    />
</template>

<style scoped>
.logo {
    width: 100px;
    height: 100px;
}
</style>
