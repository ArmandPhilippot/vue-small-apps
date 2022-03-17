<template>
    <main id="main">
        <Instructions />
        <StartBtn v-if="!toggleForm" @click="showForm" />
        <TypingForm
            v-if="toggleForm"
            :timing="timing"
            @should-stop="hideForm"
            @update:valid-words="incrementValidWords"
            @update:valid-characters="incrementValidCharacters"
        />
        <Scoring
            v-if="!toggleForm"
            :characters="validCharacters"
            :words="validWords"
            :timing="timing"
        />
    </main>
</template>

<script>
import Instructions from "./Instructions.vue";
import TypingForm from "./TypingForm.vue";
import StartBtn from "./StartBtn.vue";
import Scoring from "./Scoring.vue";

export default {
    name: 'Main',
    components: {
        Instructions,
        TypingForm,
        StartBtn,
        Scoring
    },
    data() {
        return {
            validCharacters: 0,
            validWords: 0,
            timing: 45,
            toggleForm: false,
        }
    },
    methods: {
        incrementValidCharacters(value) {
            this.validCharacters = this.validCharacters + value;
        },
        incrementValidWords() {
            this.validWords = this.validWords + 1;
        },
        resetScoring() {
            this.validWords = 0;
        },
        hideForm() {
            this.toggleForm = false;
        },
        showForm() {
            this.toggleForm = true;
            this.resetScoring();
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
