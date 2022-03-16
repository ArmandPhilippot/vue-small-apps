<template>
<form id="form" @submit.prevent="onSubmit">
    <label id="label" for="input">Type the current word:</label>
    <input id="input" type="text" v-model="field">
</form>
</template>

<script>
export default {
    props: ['currentValue', 'isValid'],
    emits: ['update:currentValue'],
    computed: {
        field: {
            get() {
                return this.currentValue
            },
            set(value) {
                this.$emit('update:currentValue', value)
            }
        },
    },
}
</script>

<style>
#form {
    margin: 2rem 0;
    text-align: center;
}

#label {
    display: block;
    margin: 1rem 0;
    cursor: pointer;
}

#input {
    min-width: min(100%, 40ch);
    padding: 0.8rem 0.5rem;
    font-size: 1rem;
}
</style>
