<template>
  <div class="p-4 bg-white border rounded-lg shadow-sm">
    <h2 class="text-xl font-bold mb-4">최근 업로드 파일</h2>
    <div class="overflow-x-auto">
      <table class="w-full table-fixed bg-white">
        <thead class="bg-indigo-900">
          <tr>
            <th class="w-3/6 px-3 py-3 text-left text-sm font-bold text-white tracking-wider">파일명</th>
            <th class="w-1/6 px-2 py-3 text-left text-sm font-bold text-white tracking-wider">사용자</th>
            <th class="w-1/12 px-2 py-3 text-center text-sm font-bold text-white tracking-wider">유형</th>
            <th class="w-1/6 px-2 py-3 text-center text-sm font-bold text-white tracking-wider">생성 시각</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="(file, index) in files" :key="index">
            <td class="px-3 py-1">
              <div class="w-full text-xs">{{ file.fileName }}</div>
            </td>
            <td class="px-2 py-1">
              <div class="w-full text-xs truncate">{{ file.uploadedBy }}</div>
            </td>
            <td class="px-2 py-1">
              <div class="w-full text-center text-xs">{{ file.fileType }}</div>
            </td>
            <td class="px-2 py-1">
              <div class="w-full text-center text-xs leading-3">{{ file.uploadTimestamp.replace("T", " ") }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you have the MDI icons installed

const props = defineProps({
  fileRecent: {
    type: Object,
    required: true
  }
});

// console.log('List.vue: ', props.fileRecent);

const files = ref(props.fileRecent);

</script>

<style scoped>
/* You can add custom styles here if needed */
</style>