<template>
  <header>
    <div class="flex items-center justify-between p-1.5 mb-5 bg-white shadow-sm rounded-lg">
      <div class="flex items-center space-x-4">
        <img src="../../public/assets/navTitle.webp" class="ml-3" alt="Nav Title">
        <h1 class="text-2xl h-10 font-semibold text-gray-700 px-3 content-center">2024 제2회 KISIA 정보보호 개발자 HACKATHON</h1>
      </div>
      <div class="flex items-center space-x-2 mr-3">
        <a class="p-2 flex items-center text-sm text-orange-800 hover:text-orange-500 focus:outline-none focus:text-orange-500" @click="navigateTo('/')">
          SaaS 등록
        </a>
        <a class="p-2 flex items-center text-sm text-orange-800 hover:text-orange-500 focus:outline-none focus:text-orange-500" @click="navigateTo('/event')">
          SaaS 이벤트
        </a>
        <img src="@/assets/grummang_mascot_small.png" alt="구름망 캐릭터" class="w-10 h-10 object-cover rounded-full mr-2">
        <p class="text-orange-500 text-2xl font-bold">구름망</p>
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
</style>