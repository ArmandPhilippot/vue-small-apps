<template>
    <div>Logging out...</div>
</template>

<script>
export default {
    name: 'Logout',
    mounted() {
        this.$emit('update:current-user', '');
    }
}
</script>
