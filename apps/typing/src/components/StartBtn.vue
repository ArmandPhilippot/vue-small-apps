<template>
    <button class="btn">Start</button>
</template>

<script>
export default {
}
</script>

<style scoped>
.btn {
    display: block;
    margin: 2rem auto;
    padding: 0.5rem 1rem;
    background: hsl(0, 0%, 100%);
    border: solid 2px hsl(216, 57%, 27%);
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
}

.btn:hover, .btn:focus {
    background: hsl(0, 0%, 90%);
}

.btn:active {
    background: hsl(0, 0%, 95%);
}
</style>
