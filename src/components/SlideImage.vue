<template>
    <div class="slider-container">
      <!-- 이미지 리스트 -->
      <div class="slider">
        <transition name="fade">
          <img :src="images[currentIndex]" :alt="'Slide ' + (currentIndex + 1)" key="currentIndex" />
        </transition>
      </div>
  
      <!-- 이전/다음 버튼 -->
      <button @click="prev" class="prev-button">Prev</button>
      <button @click="next" class="next-button">Next</button>
  
      <!-- 슬라이드 인디케이터 (선택한 슬라이드를 나타내는 점) -->
      <div class="indicators">
        <span
          v-for="(image, index) in images"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </template>
  

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// 이미지 배열
const images = ref([
  'https://via.placeholder.com/600x300?text=Slide+1',
  'https://via.placeholder.com/600x300?text=Slide+2',
  'https://via.placeholder.com/600x300?text=Slide+3',
]);

// 현재 슬라이드 인덱스
const currentIndex = ref(0);

// 자동 슬라이드를 위한 interval id
let intervalId = null;

// 다음 슬라이드
const next = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

// 이전 슬라이드
const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};

// 특정 슬라이드로 이동
const goToSlide = (index) => {
  currentIndex.value = index;
};

// 자동 슬라이드 기능 추가
onMounted(() => {
  intervalId = setInterval(next, 3000); // 3초마다 자동으로 다음 슬라이드로 넘어감
});

onUnmounted(() => {
  clearInterval(intervalId); // 컴포넌트가 해제될 때 자동 슬라이드 중지
});
</script>

<style scoped>
.slider-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slider img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.prev-button, .next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}

.indicators {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
}

.indicators span {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  cursor: pointer;
}

.indicators span.active {
  background-color: #333;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
