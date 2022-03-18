<template>
    <div>
        <h2 class="title">Settings</h2>
        <form class="form" @submit.prevent="onSubmit">
            <div class="form__item">
                <label for="dictionaries">Choose a dictionary:</label>
                <select id="dictionaries" v-model="selectedDictionary" @change="updateDictionary">
                    <template v-for="item in dictionaries" v-bind:key="item.id">
                        <option :value="item.id">{{ item.name }}</option>
                    </template>
                </select>
            </div>
            <div class="form__item">
                <label for="timing">Adjust the timing:</label>
                <input
                    type="range"
                    name="timing"
                    id="timing"
                    min="20"
                    max="300"
                    :value="timing"
                    :title="timing + 's'"
                    @change="updateTimingValue"
                />
            </div>
        </form>
    </div>
</template>

<script>import { DICTIONARIES } from "../constants"

export default {
    props: {
        dictionary: String,
        timing: Number
    },
    computed: {
        selectedDictionary: {
            get() {
                return this.dictionary;
            },
            set(value) {
                this.$emit('update:dictionary', value);
            }
        },
        timingValue: {
            get() {
                return this.timing;
            },
            set(value) {
                this.$emit('update:timing', value);
            }
        },
    },
    data() {
        return {
            dictionaries: DICTIONARIES,
        }
    },
    methods: {
        updateDictionary(event) {
            this.selectedDictionary = event.target.value;
        },
        updateTimingValue(event) {
            this.timingValue = Number(event.target.value);
        }
    }
}
</script>

<style scoped>
.title {
    margin-bottom: 1rem;
    color: hsl(216, 57%, 22%);
    font-size: 1.4rem;
}

.form {
    display: flex;
    flex-flow: column wrap;
    gap: 0.2rem;
}
.form__item {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 0.5rem;
    margin: 1rem 0;
}

#dictionaries {
    padding: 0.5rem;
}
</style>
