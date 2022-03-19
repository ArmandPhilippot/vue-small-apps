<template>
    <Instructions />
    <div class="row" v-if="!toggleForm">
        <Settings
            v-bind:dictionary="dictionary"
            v-bind:timing="timing"
            @update:dictionary="updateDictionary"
            @update:timing="updateTiming"
        />
        <Button body="Start" @click="showForm" />
    </div>
    <TypingForm
        v-if="toggleForm"
        :dictionary="dictionary"
        :timing="timing"
        v-bind:input-value="inputValue"
        @should-stop="handleStop"
        @update:input-value="updateInputValue"
        @update:misspelled-word="incrementErrors"
        @update:valid-words="incrementValidWords"
        @update:valid-characters="incrementValidCharacters"
    />
    <Scoring v-if="!toggleForm" :current-user="currentUser" />
</template>

<script>
import Button from "../components/Button.vue";
import Instructions from "../components/Instructions.vue";
import TypingForm from "../components/TypingForm.vue";
import Scoring from "../components/Scoring.vue";
import Settings from "../components/Settings.vue";
import { DICTIONARIES } from "../constants";

export default {
    name: 'Home',
    components: {
        Button,
        Instructions,
        TypingForm,
        Scoring,
        Settings
    },
    props: {
        currentUser: String
    },
    data() {
        return {
            availableDictionary: DICTIONARIES,
            dictionary: "lorem",
            errors: 0,
            inputValue: '',
            records: [],
            timing: 45,
            toggleForm: false,
            validCharacters: 0,
            validWords: 0,
        }
    },
    methods: {
        handleStop(reason) {
            if (reason === 'timeout') {
                this.setNewRecord();
            }
            this.hideForm();
        },
        hideForm() {
            this.toggleForm = false;
        },
        incrementErrors() {
            this.errors = this.errors + 1;
        },
        incrementValidCharacters(value) {
            this.validCharacters = this.validCharacters + value;
        },
        incrementValidWords() {
            this.validWords = this.validWords + 1;
        },
        resetScoring() {
            this.validWords = 0;
        },
        setNewRecord() {
            const newRecord = { date: new Date(), dictionary: this.dictionary, timing: this.timing, words: this.validWords, characters: this.validCharacters, errors: this.errors };
            this.records.push(newRecord);
        },
        showForm() {
            this.inputValue = '';
            this.toggleForm = true;
            this.resetScoring();
        },
        updateDictionary(value) {
            const valueIndex = this.availableDictionary.findIndex((item) => item.id === value);
            const isValid = valueIndex !== -1;
            if (isValid) this.dictionary = value;
        },
        updateInputValue(value) {
            this.inputValue = value;
        },
        updateTiming(value) {
            this.timing = value;
        }
    },
    mounted() {
        const savedRecords = localStorage.getItem(this.currentUser);
        this.records = savedRecords ? JSON.parse(savedRecords) : [];
    },
    watch: {
        records: {
            deep: true,
            handler(newRecords) {
                localStorage.setItem(this.currentUser, JSON.stringify(newRecords));
            }
        }
    }
}
</script>

<style scoped>
.row {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    margin: 2rem 0;
    padding: 2rem 0;
    border-bottom: 1px solid #dedede;
    border-top: 1px solid #dedede;
}
</style>
