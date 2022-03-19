<template>
    <main id="main">
        <router-view></router-view>
    </main>
</template>

<script>
export default {
    name: 'Main',
}
</script>

<style scoped>
#main {
    flex: 1;
    width: min(calc(100vw - 2rem), 80ch);
    margin: 2rem auto;
}
</style>
