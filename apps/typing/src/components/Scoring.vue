<template>
    <div class="scoring">
        <table class="scoring__table">
            <caption class="scoring__caption">Results</caption>
            <tr>
                <th></th>
                <th class="scoring__cell scoring__cell--heading">Total</th>
                <th class="scoring__cell scoring__cell--heading">Per minute</th>
            </tr>
            <tr>
                <td class="scoring__cell scoring__cell--heading">Characters</td>
                <td class="scoring__cell">{{ characters }}</td>
                <td class="scoring__cell">{{ charactersPerMinute }}</td>
            </tr>
            <tr>
                <td class="scoring__cell scoring__cell--heading">Words</td>
                <td class="scoring__cell">{{ words }}</td>
                <td class="scoring__cell">{{ wordsPerMinute }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        characters: Number,
        words: Number,
        timing: Number
    },
    computed: {
        charactersPerMinute() {
            const timingInMinutes = this.timing / 60;
            return Math.round(this.characters / timingInMinutes);
        },
        wordsPerMinute() {
            const timingInMinutes = this.timing / 60;
            return Math.round(this.words / timingInMinutes);
        }
    },
};
</script>

<style scoped>
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
}

.scoring__cell--heading {
    color: hsl(216, 57%, 22%);
    font-weight: 600;
}
</style>
