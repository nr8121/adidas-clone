<template>
    <div class="flex flex-col items-center py-[3rem] bg-[#ede734]">
        <p class="text-3xl font-[600]">지금 멤버십 가입하고 13% 할인 혜택 받으세요.</p>
        <p class="text-lg my-3">* 이메일 수신동의자에 한해 13% 할인쿠폰</p>
        <div>
            <button
                class="relative px-3 py-1 bg-black group 
                    after:content-[''] after:absolute after:border after:w-full after:h-full after:top-[4px] after:left-[4px]">
                <span class="text-md font-bold text-white group-hover:text-slate-600">회원가입</span>
                <IconArrowLong class="h-12 w-12 inline-block fill-white group-hover:fill-[#64748b]" />
            </button>
        </div>
    </div>
    <ul class="flex justify-center p-10">
        <li class="basis-[13%] p-3">
            <p class="mb-3 text-[20px] font-[600]">PRODUCTS</p>
            <ul>
                <li>신상품</li>
                <li>공식 아울렛</li>
            </ul>
        </li>
        <li class="basis-[13%] p-3">
            <p class="mb-3 text-[20px] font-[600]">SPORTS</p>
            <ul>
                <li>러닝</li>
                <li>트레이닝</li>
                <li>아웃도어</li>
                <li>축구</li>
                <li>골프</li>
                <li>요가</li>
                <li>테니스</li>
                <li>농구</li>
                <li>스케이트보딩</li>
                <li>수영</li>
                <li>사이클링</li>
            </ul>
        </li>
        <li class="basis-[13%] p-3">
            <p class="mb-3 text-[20px] font-[600]">COMPANY INFO</p>
            <ul>
                <li>회사고개</li>
                <li>채용정보</li>
                <li>아디다스 앱</li>
                <li>컨펌드 앱</li>
                <li>아디다스 블로그</li>
            </ul>
        </li>
        <li class="basis-[13%] p-3">
            <p class="mb-3 text-[20px] font-[600]">MEMBERSHIP</p>
            <ul>
                <li>아디클럽</li>
                <li>adidas Runners</li>
            </ul>
        </li>
        <li class="basis-[13%] p-3">
            <p class="mb-3 text-[20px] font-[600]">SUPPORT</p>
            <ul>
                <li>구매센터, 심의수선</li>
                <li>주문 / 배송 조회</li>
                <li>FAQ</li>
                <li>구매 이용약관</li>
            </ul>
        </li>
        <li class="basis-[13%] p-3">
            <p class="mb-3 text-[20px] font-[600]">FOLLOW US</p>
            <ul>
                <li>페이스북</li>
                <li>인스타그램</li>
                <li>X</li>
                <li>틱톡</li>
                <li>유튜브</li>
            </ul>
        </li>
    </ul>
    <div class="px-[10%]">
        <span>
            아디다스코리아(유) | 서울특별시 서초구 서초대로 74길 4, 삼성생명 서초타워 23층 (06620) | 대표자: 곽근엽 | 사업자 등록번호: 214-81-07412 | 통신판매업신고: 2007-서울서초-10391 | 개인정보관리책임자: 장영태 | 호스팅서비스사업자: 아디다스코리아(유) | 고객센터: 1588-8241 | 이메일: service@onlineshop.adidas.co.kr
        </span>
    </div>
    <div class="flex flex-col items-center py-[1rem] bg-[#282c31]">
        <ul class="flex justify-center my-[1rem]">
            <li class="px-4 border-e-[1px] text-sm text-[#d3d7da]">쿠키 설정</li>
            <li class="px-4 border-e-[1px] text-sm text-[#d3d7da]">구매 이용약관</li>
            <li class="px-4 border-e-[1px] text-sm text-[#d3d7da]">개인정보 처리방침</li>
            <li class="px-4 border-e-[1px] text-sm text-[#d3d7da]">아디클럽 이용약관</li>
            <li class="px-4 border-e-[1px] text-sm text-[#d3d7da]">사업자정보확인</li>
            <li class="px-4 border-e-[1px] text-sm text-[#d3d7da]">공공거래 자율준수</li>
            <li class="px-4  text-sm text-[#d3d7da]">채무지급보증안내</li>
        </ul>
        <div class="pt-[2rem]">
            <p class="text-sm text-[#d3d7da]">ⓒ adidas Korea, LLC. All Rights Reserved</p>
        </div>
    </div>
</template>

<script setup>
import IconArrowLong from './icons/IconArrowLong.vue';
</script>

<style scoped></style>