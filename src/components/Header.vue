<template>
    <div class="sticky top-0 z-10">
        <div class="text-center bg-black p-2 h-10">
            <p class="text-white text-xs">{{ notification }}</p>
        </div>
        <div id="header" class="pr-10 pl-10 border-b bg-white">
            <div class="flex flex-row-reverse h-8">
                <ul class="flex">
                    <li class="flex items-center">
                        <p class="text-xs hover:border-b hover:border-b-stone-950">도움말</p>
                    </li>
                    <li class="flex items-center">
                        <p class="text-xs hover:border-b hover:border-b-stone-950">주문 및 반품</p>
                    </li>
                    <li class="flex items-center">
                        <p class="text-xs hover:border-b hover:border-b-stone-950">아디클럽 가입하기</p>
                    </li>
                </ul>
            </div>
            <div class="flex h-12">
                <div class="basis-1/4">
                    <LogoAdidas class="w-16" />
                </div>
                <div class="basis-1/2 flex justify-center">
                    <ul class="flex">
                        <li class="flex items-center hover:border-b-stone-950 hover:border-b-3">
                            <a class="font-bold text-sm">MEN</a>
                        </li>
                        <li class="flex items-center hover:border-b-stone-950 hover:border-b-3">
                            <p class="font-bold text-sm">WOMEN</p>
                        </li>
                        <li class="flex items-center hover:border-b-stone-950 hover:border-b-3">
                            <p class="font-bold text-sm">KIDS</p>
                        </li>
                        <li class="flex items-center hover:border-b-stone-950 hover:border-b-3">
                            <p class="text-sm">SPORTS</p>
                        </li>
                        <li class="flex items-center hover:border-b-stone-950 hover:border-b-3">
                            <p class="text-sm">BRANDS</p>
                        </li>
                        <li class="flex items-center hover:border-b-stone-950 hover:border-b-3">
                            <p class="text-sm">OUTLET</p>
                        </li>
                        <li class="flex items-center hover:border-b-red-600 hover:border-b-3">
                            <p class="text-red-600 font-semibold text-sm">아디클럽 데이즈</p>
                        </li>
                    </ul>
                </div>
                <div class="flex basis-1/4 items-center">
                    <div class="flex justify-center items-center bg-gray-200 px-2 py-1 border">
                        <input type="text" placeholder="Search" class="flex-1 text-sm">
                        <IconSearch class="w-6 h-6" />
                    </div>
                    <div>
                        <IconProfile class="w-6 h-6 m-3" />
                    </div>
                    <div>
                        <IconWishList class="w-6 h-6 m-3" />
                    </div>
                    <div>
                        <IconCart class="w-6 h-6 m-3" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LogoAdidas from './icons/LogoAdidas.vue';
import IconSearch from './icons/IconSearch.vue';
import IconProfile from './icons/IconProfile.vue';
import IconWishList from './icons/IconWishList.vue';
import IconCart from './icons/IconCart.vue';

const props = defineProps({
    notification: String,
});
</script>

<style scoped>
ul li {
    padding-right: 1rem;
    padding-left: 1rem;
    /* border: 1px solid transparent; */
}

input {
    background-color: transparent;
    outline: none;
}</style>

<style></style>