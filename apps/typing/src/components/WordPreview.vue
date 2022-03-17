<template>
    <div class="preview">{{ word }}</div>
</template>

<script>
export default {
    props: ['word']
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
