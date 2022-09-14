<script setup lang="ts">
import { ref } from 'vue';
import PowerGlitch from '../PowerGlitch.vue';

const show = ref(true);
</script>

<template>
    <div
        class="container"
    >
        <div>
            Hello
            <PowerGlitch
                v-if="show"
            >
                World
            </PowerGlitch> !
        </div>
        <div>
            <button @click="show = ! show">
                Click me
            </button>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100px;
    height: 100px;
    margin: 0 auto;
}
.logo {
    width: 100%;
    height: 100%;
}
</style>
