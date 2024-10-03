<template>
    <div class="text-center bg-black p-2">
        <p class="text-white text-xs">{{ notification }}</p>
    </div>
    <div class="flex">
        <div class="basis-1/8">
            <LogoAdidas class="w-16" />
        </div>
        <div class="basis-5/8">
            <ul class="flex">
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
                <li>KIDS</li>
                <li>SPORTS</li>
                <li>BRANDS</li>
                <li>OUTLET</li>
            </ul>
        </div>
        <div class="flex basis-1/4">
            <div>
                <input type="text" placeholder="Search">
                <IconSearch class="absolute w-6 h-6" />
            </div>
            <div>Regist</div>
            <div>Wishlist</div>
            <div>Cart</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LogoAdidas from './icons/LogoAdidas.vue';
import IconSearch from './icons/IconSearch.vue';

const props = defineProps({
    notification: String,
});
</script>

<style scoped></style>