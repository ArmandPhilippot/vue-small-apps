<template>
    <div class="scoring">
        <table class="scoring__table">
            <caption class="scoring__caption">Results</caption>
            <tr>
                <th></th>
                <th class="scoring__cell">Total</th>
                <th class="scoring__cell">Per minute</th>
            </tr>
            <tr>
                <td class="scoring__cell">Characters</td>
                <td class="scoring__cell">{{ characters }}</td>
                <td class="scoring__cell">{{ charactersPerMinute }}</td>
            </tr>
            <tr>
                <td class="scoring__cell">Words</td>
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
.scoring {
    margin: 1rem auto;
}

.scoring__table {
    border-collapse: collapse;
    table-layout: fixed;
}

.scoring__caption {
    margin: 1rem 0;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
    text-decoration: underline solid #000;
}

.scoring__cell {
    padding: 0.5rem;
    border: solid 1px #000;
}
</style>
