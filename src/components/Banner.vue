<template>
    <section>
        <div class="absolute flex h-full ml-16">
            <div class="flex flex-col justify-end pb-14">
                <div class="mb-1 bg-white">
                    <span class="font-semibold bg-white text-2xl">UNLOCK THE BEST OF ADICLUB</span>
                </div>
                <div class="mb-4">
                    <span class="bg-white">열어봐, 너의 모든 혜택!</span>
                </div>
                <div>
                    <button class="bg-white p-3 relative
                        hover:before:border-slate-400
                        before:z-[-1] before:content-[''] before:absolute before:border before:w-full before:h-full before:top-[5px] before:left-[5px]"><p class="text-md font-bold">자세히 보기</p></button>
                </div>
            </div>
        </div>
        <picture class="relative z-[-2]">
            <source
                srcset="/images/banner-lg.avif"
                media="(min-width: 960px)" width="2880" height="1280">
            <source
                srcset="/images/banner-md.avif"
                media="(min-width: 768px)" width="1600" height="1600">
            <source
                srcset="/images/banner-sm.avif"
                media="(max-width: 767px)" width="750" height="964"><img
                src="/images/banner-df.avif"
                alt="banner" loading="eager" fetchpriority="high">
        </picture>
    </section>
</template>

<script setup>

</script>

<style scoped></style>

