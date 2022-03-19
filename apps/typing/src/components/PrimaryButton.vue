<template>
    <button :class="['btn', buttonClass]">{{ body }}</button>
</template>

<script>
export default {
    name: 'PrimaryButton',
    props: {
        body: String,
        kind: String,
    },
    computed: {
        buttonClass() {
            return this.kind === 'small' ? 'btn--small' : 'btn--big';
        }
    }
}
</script>

<style scoped>
.btn {
    display: block;
    margin: auto;
    background: hsl(0, 0%, 100%);
    color: hsl(216, 57%, 27%);
    font-variant: small-caps;
    font-weight: 600;
    cursor: pointer;
    transform: none;
    transition: all 0.3s ease-in-out 0s;
}

.btn--small {
    padding: 0.3rem 0.5rem;
    border: solid 2px hsl(216, 57%, 27%);
    border-radius: 3px;
    box-shadow: 1px 1px 0 0 hsl(216, 57%, 22%);
    font-size: 0.95rem;
}
.btn--big {
    min-width: 20ch;
    padding: 0.8rem 1rem;
    border: solid 3px hsl(216, 57%, 27%);
    border-radius: 5px;
    box-shadow: 2px 2px 0 0 hsl(216, 57%, 22%);
    font-size: 1.1rem;
}

.btn:hover,
.btn:focus {
    background: hsl(0, 0%, 92%);
}

.btn:active {
    background: hsl(0, 0%, 95%);
    box-shadow: 0 0 0 0 hsl(216, 57%, 22%);
}

.btn--big:active {
    transform: translateX(4px) translateY(4px);
}

.btn--small:active {
    transform: translateX(2px) translateY(2px);
}
</style>
