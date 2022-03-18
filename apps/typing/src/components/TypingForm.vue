<template>
    <word-preview :word="word" />
    <form id="form" @submit.prevent="onSubmit">
        <label id="label" for="input">Type the current word:</label>
        <input ref="typingInput" id="input" type="text" v-model="field" />
    </form>
    <Timer v-bind:limit="timing" @timeout="$emit('shouldStop')" />
</template>

<script>
import { loremIpsum } from "../lib/dictionaries/lorem-ipsum";
import { getRandomValue } from "../utils/helpers";
import WordPreview from "./WordPreview.vue";
import Timer from "./Timer.vue";
import { english } from "../lib/dictionaries/english";
import { french } from "../lib/dictionaries/french";

export default {
    props: {
        dictionary: String,
        inputValue: String,
        timing: Number
    },
    emits: ["update:inputValue", 'update:valid-characters', 'update:valid-words', 'shouldStop'],
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
            word: getRandomValue(this.getSelectedDictionary())
        }
    },
    methods: {
        getSelectedDictionary() {
            switch (this.dictionary) {
                case "english":
                    return english;
                case "french":
                    return french;
                case "lorem":
                default:
                    return loremIpsum;
            }
        },
        isMatching(value) {
            if (value === this.word) {
                this.word = getRandomValue(this.getSelectedDictionary());
                this.$emit("update:valid-words");
            }
        },
    },
    mounted() {
        this.$refs.typingInput.focus();
    },
    watch: {
        word() {
            this.$emit("update:valid-characters", this.word.length);
        }
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
