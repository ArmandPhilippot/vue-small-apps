<template>
    <main id="main">
        <Instructions />
    </main>
</template>

<script>
import Instructions from "./Instructions.vue";

export default {
    name: 'Main',
    components: {
        Instructions
    }
}
</script>

<style scoped>
    #main {
        flex: 1;
        width: min(calc(100vw - 2rem), 80ch);
        margin: 2rem auto;
    }
</style>
