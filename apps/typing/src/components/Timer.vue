<template>
<div class="timer">Remaining time: {{count}}s</div>
</template>

<script>
export default {
    props: {
        limit: Number
    },
    data() {
        return {
            count: this.limit
        }
    },
    mounted() {
        setInterval(() => this.count = this.count - 1,1000)
    },
    watch: {
        count(newCount) {
            if (newCount === 0) this.$emit('timeout');
        }
    }
}
</script>

<style scoped>
.timer {
    margin: 1rem auto;
    font-size: 0.85rem;
    text-align: center;
}
</style>
