<template>
    <div class="scoring">
        <table class="scoring__table">
            <caption class="scoring__caption">Results</caption>
            <tr>
                <th class="scoring__cell scoring__cell--heading">Date</th>
                <th class="scoring__cell scoring__cell--heading">Dictionary</th>
                <th class="scoring__cell scoring__cell--heading">Timing</th>
                <th class="scoring__cell scoring__cell--heading">Words/min</th>
                <th class="scoring__cell scoring__cell--heading">Characters/min</th>
                <th class="scoring__cell scoring__cell--heading">Errors/min</th>
            </tr>
            <tr v-for="record in records" v-bind:key="record">
                <td class="scoring__cell">{{ formattedDate(record.date) }}</td>
                <td class="scoring__cell">{{ formattedDictionary(record.dictionary) }}</td>
                <td class="scoring__cell">{{ `${record.timing}s` }}</td>
                <td class="scoring__cell">{{ perMinute(record.words, record.timing) }}</td>
                <td class="scoring__cell">{{ perMinute(record.characters, record.timing) }}</td>
                <td class="scoring__cell">{{ perMinute(record.errors, record.timing) }}</td>
            </tr>
        </table>
    </div>
    <Button body="Reset" kind="small" class="reset" @click="resetScoring" />
</template>

<script>import { DICTIONARIES } from "../constants";
import Button from "./Button.vue";

export default {
    props: {
        currentUser: String,
    },
    data() {
        return {
            availableDictionaries: DICTIONARIES,
            records: [],
        };
    },
    methods: {
        formattedDate(date) {
            const dateInstance = new Date(date);
            return `${dateInstance.toLocaleDateString()} ${dateInstance.toLocaleTimeString()}`;
        },
        formattedDictionary(id) {
            const chosenDictionary = this.availableDictionaries.find((dictionary) => dictionary.id === id);
            if (chosenDictionary) {
                return chosenDictionary.name;
            }
            else {
                console.error("Dictionary not found.");
                return "";
            }
        },
        perMinute(data, seconds) {
            const minutes = seconds / 60;
            return Math.round(data / minutes);
        },
        resetScoring() {
            localStorage.removeItem(this.currentUser);
            this.records.length = 0;
        }
    },
    mounted() {
        const savedRecords = localStorage.getItem(this.currentUser);
        this.records = JSON.parse(savedRecords);
    },
    components: { Button }
};
</script>

<style scoped>
.scoring {
    max-width: 100%;
    overflow-x: scroll;
}
.scoring__table {
    border-collapse: collapse;
    table-layout: fixed;
}

.scoring__caption {
    margin-bottom: 1rem;
    color: hsl(216, 57%, 22%);
    font-size: 1.4rem;
    font-weight: 600;
    text-align: left;
}

.scoring__cell {
    padding: 0.5rem;
    border: solid 1px hsl(216, 57%, 22%);
    text-align: center;
}

.scoring__cell--heading {
    color: hsl(216, 57%, 22%);
    font-weight: 600;
}

.reset {
    margin: 1.5rem auto;
}
</style>
