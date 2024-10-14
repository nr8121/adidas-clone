<template>
    <Header :notification="''"></Header>
    <Banner/>
    <XSlideContent/>
    <XSlideContent/>
    <BlogSection/>
    <HistorySection/>
</template>

<script setup>
import { ref } from 'vue';
import Banner from '@/components/Banner.vue';
import Header from '@/components/Header.vue';
import XSlideContent from '@/components/XSlideContent.vue';
import BlogSection from '@/components/BlogSection.vue';
import HistorySection from '@/components/HistorySection.vue';
</script>

<style scoped></style>