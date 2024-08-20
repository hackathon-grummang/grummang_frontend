<template>
  <div class="p-4 bg-white border rounded-lg shadow-sm mb-1">
    <h2 class="text-xl font-bold mb-4">위험 사용자 TOP5</h2>
    <div class="overflow-x-auto">
      <table class="w-full table-fixed bg-white">
        <thead class="bg-indigo-900">
          <tr>
            <th class="w-1/3 px-4 py-3 text-left text-sm font-bold text-white tracking-wider">사용자</th>
            <th class="w-1/6 px-4 py-3 text-center text-sm font-bold text-white tracking-wider">민감 파일</th>
            <th class="w-1/6 px-4 py-3 text-center text-sm font-bold text-white tracking-wider">악성 파일</th>
            <th class="w-1/3 px-4 py-3 text-center text-sm font-bold text-white tracking-wider">마지막 업로드 시각</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="(user, index) in users" :key="index">
            <td class="px-4 py-3">
              <div class="w-full text-sm truncate">{{ user.userName }}</div>
            </td>
            <td class="px-4 py-3">
              <div class="w-full text-center text-sm">{{ user.sensitiveFilesCount }}</div>
            </td>
            <td class="px-4 py-3">
              <div class="w-full text-center text-sm">{{ user.maliciousFilesCount }}</div>
            </td>
            <td class="px-4 py-3">
              <div class="w-full text-center text-sm">{{ user.lastUploadedTimestamp.replace("T", " ") }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  usersTop5: {
    type: Object,
    required: true
  }
});
const users = ref(props.usersTop5);

// setTimeout(() => {
//   users.value = [
//       { userName: 'aaaaa.txt', sensitiveFilesCount: 5, maliciousFilesCount: 7, lastUploadedTimestamp: '2024-00-00 00:00:00' },
//       { userName: '통신이 되는지 함수 불러오는지 확인.txt', sensitiveFilesCount: 4, maliciousFilesCount: 2, lastUploadedTimestamp: '2024-00-00 00:00:00' },
//       { userName: '2024-07 일부러 글자를 길게 합니다.txt', sensitiveFilesCount: 3, maliciousFilesCount: 5, lastUploadedTimestamp: '2024-00-00 00:00:00' },
//       { userName: 'aaaaa.txt', sensitiveFilesCount: 2, maliciousFilesCount: 2, lastUploadedTimestamp: '2024-00-00 00:00:00' },
//       { userName: 'aaaaa.txt', sensitiveFilesCount: 1, maliciousFilesCount: 2, lastUploadedTimestamp: '2024-00-00 00:00:00' },
//       { userName: 'aaaaa.txt', sensitiveFilesCount: 5, maliciousFilesCount: 7, lastUploadedTimestamp: '2024-00-00 00:00:00' },
//       { userName: '통신이 되는지 함수 불러오는지 확인.txt', sensitiveFilesCount: 4, maliciousFilesCount: 2, lastUploadedTimestamp: '2024-00-00 00:00:00' },
//       { userName: '2024-07 일부러 글자를 길게 합니다.txt', sensitiveFilesCount: 3, maliciousFilesCount: 5, lastUploadedTimestamp: '2024-00-00 00:00:00' },
//       { userName: 'aaaaa.txt', sensitiveFilesCount: 2, maliciousFilesCount: 2, lastUploadedTimestamp: '2024-00-00 00:00:00' },
//       { userName: 'aaaaa.txt', sensitiveFilesCount: 1, maliciousFilesCount: 2, lastUploadedTimestamp: '2024-00-00 00:00:00' },
//     ];
// }, 5000);

</script>

<style scoped>

</style>