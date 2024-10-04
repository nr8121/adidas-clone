<template>
    <div class="text-center bg-black p-2 h-10">
        <p class="text-white text-xs">{{ notification }}</p>
    </div>
    <div id="header" class="pr-10 pl-10 border-b">
        <div class="flex flex-row-reverse h-8">
            <ul class="flex">
                <li>도움말</li>
                <li>주문 및 반품</li>
                <li>아디클럽 가입하기</li>
            </ul>
        </div>
        <div class="flex h-12">
            <div class="basis-1/4">
                <LogoAdidas class="w-16" />
            </div>
            <div class="basis-1/2 flex justify-center">
                <ul class="flex">
                    <li class="flex items-center hover:border-b-2">
                        <a class="font-bold">MEN</a>
                    </li>
                    <li class="">
                        <p class="h-full hover:border-b-2 flex items-center border-box">WOMEN</p>
                    </li>
                    <li class="">
                        <p>KIDS</p>
                    </li>
                    <li class="">
                        <p>SPORTS</p>
                    </li>
                    <li class="">
                        <p>BRANDS</p>
                    </li>
                    <li class="">
                        <p>OUTLET</p>
                    </li>
                    <li class="">
                        <p>아디클럽 데이즈</p>
                    </li>
                </ul>
            </div>
            <div class="flex basis-1/4 items-center">
                <div class="flex justify-center items-center bg-gray-200 p-2 border border-black">
                    <input type="text" placeholder="Search" class="flex-1">
                    <IconSearch class="w-6 h-6" />
                </div>
                <div>Regist</div>
                <div>Wishlist</div>
                <div>Cart</div>
            </div>
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

<style scoped>ul li {
    padding-right: 1rem;
    padding-left: 1rem;
}

input {
    background-color: transparent;
    outline: none;
}</style>

<style></style>