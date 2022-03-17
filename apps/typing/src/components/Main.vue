<template>
    <main id="main">
        <Instructions />
        <TypingForm />
    </main>
</template>

<script>
import Instructions from "./Instructions.vue";
import TypingForm from "./TypingForm.vue";

export default {
    name: 'Main',
    components: {
        Instructions,
        TypingForm
    },
}
</script>

<style scoped>
#main {
    flex: 1;
    width: min(calc(100vw - 2rem), 80ch);
    margin: 2rem auto;
}
</style>
