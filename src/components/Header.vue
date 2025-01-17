<script setup>
    import {computed} from "vue";
    import {store} from "@/store/store.js";

    const user = computed(() => store.value.user)
</script>

<template>

</template>

<style scoped>

</style>