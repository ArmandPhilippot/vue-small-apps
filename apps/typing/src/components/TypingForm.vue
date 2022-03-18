<template>
    <word-preview :word="word" />
    <form id="form" @submit.prevent="onSubmit">
        <label id="label" for="input">Type the current word:</label>
        <input
            ref="typingInput"
            id="input"
            type="text"
            v-model="field"
            :class="['input', inputClass]"
        />
    </form>
    <Timer v-bind:limit="timing" @timeout="$emit('shouldStop')" />
    <Button body="Stop" @click="$emit('shouldStop')" class="btn" />
</template>

<script>
import { loremIpsum } from "../lib/dictionaries/lorem-ipsum";
import { getRandomValue } from "../utils/helpers";
import WordPreview from "./WordPreview.vue";
import Timer from "./Timer.vue";
import { english } from "../lib/dictionaries/english";
import { french } from "../lib/dictionaries/french";
import Button from "./Button.vue";

export default {
    props: {
        dictionary: String,
        inputValue: String,
        timing: Number
    },
    emits: ["update:inputValue", 'update:valid-characters', 'update:valid-words', 'update:misspelled-word', 'shouldStop'],
    components: { WordPreview, Timer, Button },
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
        inputClass() {
            if (this.isMisspelled) return 'error';
            return this.isValid ? 'correct' : ''
        }
    },
    data() {
        return {
            isMisspelled: false,
            isValid: false,
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
        generateNewWord() {
            this.field = '';
            this.word = getRandomValue(this.getSelectedDictionary());
            this.$emit("update:valid-words");
            this.isValid = false;
        },
        notifyError() {
            this.isMisspelled = true;
            this.isValid = false;
            this.$emit("update:misspelled-word");
        },
        isMatching(value) {
            if (this.word.startsWith(value)) {
                this.isMisspelled = false;
                this.isValid = true;
                if (value === this.word) this.generateNewWord();
            } else {
                if (!this.isMisspelled) {
                    this.notifyError();
                }
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

<style scoped>
#form {
    margin: 2rem 0;
    text-align: center;
}

#label {
    display: block;
    margin: 1rem 0;
    cursor: pointer;
}

.input {
    min-width: min(100%, 40ch);
    padding: 0.8rem 0.5rem;
    border: 2px solid hsl(216, 57%, 27%);
    font-size: 1rem;
}

#input:focus {
    outline: none;
}

.correct {
    border-color: green;
}

.error {
    border-color: red;
}

.btn {
    margin: 3rem auto 2rem;
}
</style>
