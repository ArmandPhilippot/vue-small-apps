<template>
    <main id="main">
        <Instructions />
        <WordPreview />
    </main>
</template>

<script>
import Instructions from "./Instructions.vue";
import WordPreview from "./WordPreview.vue";

export default {
    name: 'Main',
    components: {
    Instructions,
    WordPreview,
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
