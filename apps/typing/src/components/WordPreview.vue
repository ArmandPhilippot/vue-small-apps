<template>
<div class="preview">{{word}}</div>
</template>

<script>
import { loremIpsum } from "../lib/dictionaries/lorem-ipsum";

const getRandomWord = (array) => {
    const randomIndex = Math.floor(array.length * Math.random());

    return array[randomIndex];
}

export default {
    data() {
        return {
            word: getRandomWord(loremIpsum)
        }
    }
}
</script>

<style scoped>
.preview {
    margin: 3rem 0;
    padding: 1rem;
    border: 2px solid hsl(207, 56%, 27%);
    font-weight: 800;
    text-align: center;
}
</style>
