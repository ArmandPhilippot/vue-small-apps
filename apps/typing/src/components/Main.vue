<template>
    <main id="main">
        <Instructions />
        <WordPreview :word="word" />
        <TypingForm :input-value="inputValue" @hasNewValue='updateInputValue' @input='setIsValid' />
    </main>
</template>

<script>
import Instructions from "./Instructions.vue";
import WordPreview from "./WordPreview.vue";
import TypingForm from "./TypingForm.vue";
import { loremIpsum } from "../lib/dictionaries/lorem-ipsum";
import { getRandomWord } from "../utils/helpers";


export default {
    name: 'Main',
    components: {
        Instructions,
        WordPreview,
        TypingForm
    },
    data() {
        return {
            inputValue: '',
            isValid: false,
            word: getRandomWord(loremIpsum)
        }
    },
    methods: {
        setIsValid(event) {
            this.isValid = event.target.value === this.word;
            if (this.isValid) {
                this.inputValue = '';
                this.word = getRandomWord(loremIpsum);
            }
        },
        shouldSetNewWord() {
            if (this.isValid) {
                this.inputValue = '';
                this.word = getRandomWord(loremIpsum);
            }
        },
        updateInputValue(value) {
            this.inputValue = value;
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
