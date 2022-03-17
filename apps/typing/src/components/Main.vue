<template>
    <main id="main">
        <Instructions />
        <StartBtn v-if="!shouldStart" @click="toggleForm" />
        <TypingForm v-if="shouldStart" />
    </main>
</template>

<script>
import Instructions from "./Instructions.vue";
import TypingForm from "./TypingForm.vue";
import StartBtn from "./StartBtn.vue";

export default {
    name: 'Main',
    components: {
        Instructions,
        TypingForm,
        StartBtn
    },
    data() {
        return {
            shouldStart: false
        }
    },
    methods: {
        toggleForm() {
            this.shouldStart = true;
        }
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
