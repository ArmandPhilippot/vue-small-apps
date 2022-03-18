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
    min-width: 20ch;
    margin: 3rem auto;
    padding: 0.8rem 1rem;
    background: hsl(0, 0%, 100%);
    border: solid 3px hsl(216, 57%, 27%);
    border-radius: 5px;
    box-shadow: 2px 2px 0 0 hsl(216, 57%, 22%);
    color: hsl(216, 57%, 27%);
    font-size: 1.1rem;
    font-variant: small-caps;
    font-weight: 600;
    cursor: pointer;
    transform: none;
    transition: all 0.3s ease-in-out 0s;
}

.btn:hover,
.btn:focus {
    background: hsl(0, 0%, 92%);
}

.btn:active {
    background: hsl(0, 0%, 95%);
    box-shadow: 0 0 0 0 hsl(216, 57%, 22%);
    transform: translateX(4px) translateY(4px);
}
</style>
