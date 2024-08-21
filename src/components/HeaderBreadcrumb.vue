<template>
  <header>
    <div class="flex items-center justify-between p-1.5 mb-5 bg-white shadow-sm rounded-lg">
      <div class="flex items-center space-x-4">
        <img src="../../public/assets/navTitle.webp" class="ml-3" alt="Nav Title">
        <!-- <h1 class="text-2xl h-10 font-semibold text-gray-700 px-3 content-center">2024 제2회 KISIA 정보보호 개발자 HACKATHON</h1> -->
        <!-- <h1 class="text-2xl h-10 font-semibold px-3 content-center bg-gradient-to-r from-sky-400 via-sky-700 to-sky-900 text-transparent bg-clip-text">
          2024 제2회 KISIA 정보보호 개발자 HACKATHON
        </h1> -->
        <h1 class="text-3xl h-10 font-semibold px-3 content-center animated-gradient">
          <!-- 2024 제2회 KISIA 정보보호 개발자 HACKATHON -->
          멀티 SaaS 모니터링 서비스
        </h1>
      </div>
      <div class="flex items-center space-x-2 mr-3">
        <a class="p-2 flex items-center text-sm font-semibold text-gray-400 hover:text-sky-900 focus:outline-none focus:text-sky-900" @click="navigateTo('/')">
          <v-icon :size="20" class="mr-1">mdi-cloud-arrow-down-outline</v-icon>SaaS 등록
        </a>
        <a class="p-2 flex items-center text-sm font-semibold text-gray-400 hover:text-sky-900 focus:outline-none focus:text-sky-900" @click="navigateTo('/file')">
          <v-icon :size="20" class="mr-1">mdi-file-eye-outline</v-icon>파일 정보
        </a>
        <a class="p-2 flex items-center text-sm font-semibold text-gray-400 hover:text-sky-900 focus:outline-none focus:text-sky-900" @click="navigateTo('/event')">
          <v-icon :size="20" class="mr-1">mdi-cloud-clock-outline</v-icon>파일 이벤트
        </a>
        <a class="p-2 flex items-center text-sm font-semibold text-gray-400 hover:text-sky-900 focus:outline-none focus:text-sky-900" @click="navigateTo('/error')">
          <v-icon :size="20" class="mr-1">mdi-alert-circle-outline</v-icon>에러 페이지
        </a>
        <p class="text-orange text-2xl font-bold">구름망</p>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (path) => {
  router.push(path);
};
</script>

<style scoped>
.arrow-icon {
  font-size: 35px;
}

@keyframes gradient-animation {
  0% {
    background-position: 200% center;
  }
  100% {
    background-position: -200% center;
  }
}

.animated-gradient {
  background: linear-gradient(to right, #38bdf8, #0369a1, #0c4a6e, #0369a1, #38bdf8);
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: gradient-animation 8s linear infinite;
}
</style>