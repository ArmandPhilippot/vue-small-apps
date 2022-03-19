<template>
    <div>Logging out...</div>
</template>

<script>
export default {
    name: 'LogoutPage',
    mounted() {
        this.$emit('update:current-user', '');
    }
}
</script>
