<script setup lang="ts">
import { Ref, ref } from 'vue';
import { GlitchedElementRef } from '../lib/GlitchedElementRef';


const glitched: Ref<GlitchedElementRef | null> = ref(null);
</script>

<template>
    <div class="container">
        <button @click="glitched?.startGlitch">
            Start
        </button>
        <button @click="glitched?.stopGlitch">
            Stop
        </button>
        <br>
        <GlitchedElement ref="glitched">
            <span>
                PowerGlitch 🌎
            </span>
        </GlitchedElement>
    </div>
</template>

<style scoped>
.container {
    width: 200px;
    margin: 0 auto;
    text-align: center;
    margin-top: 20px;
}
.logo {
    width: 100%;
    height: 100%;
}
</style>
