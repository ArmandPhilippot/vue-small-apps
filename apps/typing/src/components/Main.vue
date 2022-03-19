<template>
    <main id="main">
        <router-view @update:authenticated="$emit('update:authenticated')"></router-view>
    </main>
</template>

<script>
export default {
    name: 'Main',
    emits: ['update:authenticated'],
    props: {
        isAuthenticated: Boolean
    },
    methods: {
        redirectToLoginForm() {
            this.$router.push("login");
        },
    },
    mounted() {
        if (!this.isAuthenticated) this.redirectToLoginForm();
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
