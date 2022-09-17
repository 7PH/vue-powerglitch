<script setup lang="ts">
import { Ref, ref } from 'vue';
import { GlitchedElementRef } from '../lib/GlitchedElementRef';
import { vGlitch } from '../lib/vGlitch';
import GlitchedElement from '../lib/GlitchedElement.vue';

const show = ref(true);
const glitched: Ref<GlitchedElementRef | null> = ref(null);
</script>

<template>
    <div class="container">
        <h1>vue-powerglitch</h1>
        <a
            href="./coverage/"
            target="_blank"
            class="link"
        >
            Coverage report
        </a>
        <a
            href="./api-docs/"
            target="_blank"
            class="link"
        >
            API reference
        </a>
        <h2>Visual quick test</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>
                        Mode
                    </th>
                    <th>
                        Demo
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        v-glitch span
                    </td>
                    <td>
                        Glitch <span v-glitch>🤷‍♂️</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        v-glitch div
                    </td>
                    <td>
                        Glitch <div v-glitch>
                            🤷‍♂️
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        v-glitch options
                    </td>
                    <td>
                        <span v-glitch="{ glitchTimeSpan: false, }">
                            Glitch 🌎
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        GlitchedElement inline
                    </td>
                    <td>
                        Glitch
                        <GlitchedElement :inline="true">
                            🤷‍♂️
                        </GlitchedElement>
                    </td>
                </tr>
                <tr>
                    <td>
                        GlitchedElement block
                    </td>
                    <td>
                        Glitch
                        <GlitchedElement :inline="false">
                            🤷‍♂️
                        </GlitchedElement>
                    </td>
                </tr>
                <tr>
                    <td>
                        GlitchedElement controls
                    </td>
                    <td>
                        <GlitchedElement ref="glitched">
                            Glitch 🌎
                        </GlitchedElement>
                        <button @click="glitched?.startGlitch">Start</button>
                        <button @click="glitched?.startGlitch">Stop</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        GlitchedElement v-if
                    </td>
                    <td>
                        <GlitchedElement v-if="show">
                            Glitch 🌎
                        </GlitchedElement>
                        <button @click="show = ! show">Toggle</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        GlitchedElement options
                    </td>
                    <td>
                        <GlitchedElement
                            :options="{ glitchTimeSpan: false, }"
                            :inline="true"
                        >
                            Glitch 🌎
                        </GlitchedElement>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 20px;
    text-align: center;
}
table {
    width: 100%;
    margin-top: 40px;
}
tr {
    height: 50px;
}
.link {
    margin: 0 10px;
}
</style>
