<template>
    <Header :notification="''"></Header>
    <Banner/>
    <XSlideContent/>
    
</template>

<script setup>
import { ref } from 'vue';
import Banner from '@/components/Banner.vue';
import Header from '@/components/Header.vue';
import XSlideContent from '@/components/XSlideContent.vue';
</script>

<style scoped></style>