<template>
    <Header :notification="''"></Header>
    <Banner/>
    <Banner/>
</template>

<script setup>
import { ref } from 'vue';
import Banner from '@/components/Banner.vue';
import Header from '@/components/Header.vue';
</script>

<style scoped></style>