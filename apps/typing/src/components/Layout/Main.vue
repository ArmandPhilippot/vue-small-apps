<template>
    <main id="main">
        <router-view :current-user="currentUser" @update:current-user="updateCurrentUser"></router-view>
    </main>
</template>

<script>
export default {
    name: 'LayoutMain',
    emits: ['update:current-user'],
    props: {
        currentUser: String,
        isAuthenticated: Boolean,
    },
    methods: {
        updateCurrentUser(value) {
            this.$emit('update:current-user', value);
        }
    },
}
</script>

<style scoped>
#main {
    flex: 1;
    width: min(calc(100vw - 2rem), 80ch);
    margin: 2rem auto;
}
</style>
