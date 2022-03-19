<template>
    <header id="header">
        <h1 id="branding">Typing app</h1>
        <Button v-if="isAuthenticated" body="Log out" kind="small" class="logout" @click="logout" />
    </header>
</template>

<script>
import Button from "./Button.vue";
export default {
    name: "Header",
    props: {
        isAuthenticated: Boolean
    },
    components: { Button },
    methods: {
        logout() {
            this.$router.push("logout");
        }
    }
}
</script>

<style scoped>
#header {
    width: min(calc(100vw - 2rem), 80ch);
    margin: 0 auto;
    padding: 2rem 1rem;
    position: relative;
    color: hsl(216, 57%, 22%);
    text-align: center;
}

.logout {
    margin: 2rem auto 0;
}
</style>
