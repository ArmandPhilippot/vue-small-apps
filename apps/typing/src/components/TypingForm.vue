<template>
    <word-preview :word="word" />
    <form id="form" @submit.prevent="onSubmit">
        <label id="label" for="input">Type the current word:</label>
        <input ref="typingInput" id="input" type="text" v-model="field">
    </form>
    <Timer v-bind:limit="60" @timeout="$emit('shouldStop')" />
</template>

<script>
import { loremIpsum } from "../lib/dictionaries/lorem-ipsum";
import { getRandomWord } from "../utils/helpers";
import WordPreview from "./WordPreview.vue";
import Timer from "./Timer.vue";

export default {
    props: {
        inputValue: String,
    },
    emits: ["update:inputValue", 'shouldStop'],
    components: { WordPreview, Timer },
    computed: {
        field: {
            get() {
                return this.inputValue;
            },
            set(value) {
                this.$emit("update:inputValue", value);
                this.isMatching(value);
            }
        },
    },
    data() {
        return {
            word: getRandomWord(loremIpsum)
        }
    },
    methods: {
        isMatching(value) {
            if (value === this.word) {
                this.word = getRandomWord(loremIpsum);
            }
        },
    },
    mounted() {
        this.$refs.typingInput.focus();
    }
}
</script>

<style>
#form {
    margin: 2rem 0;
    text-align: center;
}

#label {
    display: block;
    margin: 1rem 0;
    cursor: pointer;
}

#input {
    min-width: min(100%, 40ch);
    padding: 0.8rem 0.5rem;
    font-size: 1rem;
}
</style>
