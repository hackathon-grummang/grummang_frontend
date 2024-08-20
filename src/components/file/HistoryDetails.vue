<template>
  <div>
    <div class="p-4 bg-white border rounded-lg shadow-sm my-5">
      <h2 class="text-xl font-bold mb-4">파일 히스토리 - {{ props.historyDetails.totalEvent }}건</h2>

      <div class="flex pb-2">
        <div class="space-x-2">
          <button
            class="inline-block border border-orange px-3 py-2 align-text-bottom flex items-center text-sm font-semibold text-orange hover:bg-orange hover:text-white hover:border-orange active:bg-orange"
            @click="openHistoryVisualizationModal"
          >
            <v-icon :size="20" class="mr-1">mdi-weather-cloudy-clock</v-icon> 히스토리 시각화
          </button>
        </div>
        <div class="flex ml-auto space-x-2">
          
          <select class="block w-sm text-sm font-medium transition duration-75 border border-gray-300 rounded-md shadow-sm focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none" >
            <option value="week">SaaS</option>
            <option value="month">활동 종류</option>
            <option value="year">파일명</option>
            <option value="year" selected>히스토리 시각</option>
            <option value="year">최초시각</option>
            <option value="year">사용자</option>
          </select>
          <select class="block w-sm text-sm font-medium transition duration-75 border border-gray-300 rounded-md shadow-sm focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none" >
            <option value="week">오름차순</option>
            <option value="month" selected>내림차순</option>
          </select>

          <div class="relative max-w-sm">
            <input class="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" type="search" placeholder="검색">
            <button class="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z" />
            </svg>
          </button>
        </div>


        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full bg-white">
          <thead class="bg-indigo-900">
            <tr>
              <th class="pl-6 pr-2 py-3 text-left text-sm font-bold font-medium text-white tracking-wider">선택</th>
              <th class="px-6 py-3 text-left text-sm font-bold font-medium text-white tracking-wider text-center">번호</th>
              <th class="px-6 py-3 text-left text-sm font-bold font-medium text-white tracking-wider">SaaS</th>
              <th class="px-6 py-3 text-left text-sm font-bold font-medium text-white tracking-wider">활동 종류</th>
              <th class="px-6 py-3 text-left text-sm font-bold font-medium text-white tracking-wider">파일명</th>
              <th class="px-6 py-3 text-left text-sm font-bold font-medium text-white tracking-wider">히스토리 시각</th>
              <th class="px-6 py-3 text-left text-sm font-bold font-medium text-white tracking-wider">최초 시각</th>
              <th class="px-6 py-3 text-left text-sm font-bold font-medium text-white tracking-wider">사용자</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(detail, index) in props.historyDetails.fileHistoryDto" :key="index">
              <td class="pl-6 pr-1 py-2 whitespace-nowrap">
                <input 
                  type="radio" 
                  name="detail"
                  class="form-radio size-3"
                  :value="detail"
                  v-model="selectedHistory"
                />
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-center text-xs">{{ index + 1 }}</td>
              <td class="px-6 py-2 whitespace-nowrap align-middle">
                <div class="flex items-center">
                  <img class="w-5 h-5 mr-2" :src="getSaasImg(detail.saas)" :alt="detail.saas" />
                  <span class="text-sm"> {{ detail.saas }}</span>
                </div>
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-xs align-middle">
                <p v-if="detail.eventType === 'file_upload'" class="flex items-center">
                  <v-icon :size="20" class="text-orange mr-1">mdi-file-upload-outline</v-icon>
                  파일 업로드
                </p>
                <p v-if="detail.eventType === 'file_change'" class="flex items-center">
                  <v-icon :size="20" class="text-amber-400 mr-1">mdi-file-edit-outline</v-icon>
                  파일 수정
                </p>
                <p v-if="detail.eventType === 'file_delete'" class="flex items-center">
                  <v-icon :size="20" class="text-slate-400 mr-1">mdi-file-remove-outline</v-icon>
                  파일 삭제
                </p>
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-xs">{{ detail.fileName }}</td>
              <td class="px-6 py-2 whitespace-nowrap text-xs">{{ removeWordDate(detail.eventTs) }}</td>
              <td class="px-6 py-2 whitespace-nowrap text-xs">{{ removeWordDate(detail.uploadTs) }}</td>
              <td class="px-6 py-2 whitespace-nowrap text-xs">{{ detail.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>

<history-visualization-modal
  v-if="isHistoryVisualizationModalOpen"
  :visualizationInfo="visualizationInfo"
  @close="closeHistoryVisualizationModal"
></history-visualization-modal>
</template>

<script setup>
import { ref, watch, defineProps, onMounted } from 'vue'
import { getSaasImg, getDate, removeWordDate } from '@/utils/utils.js'
import ThePagination from '@/components/ThePagination.vue'
import HistoryVisualizationModal from '@/components/modals/HistoryVisualizationModal.vue'
import { historyVisualizatuonApi } from '@/apis/file'

const props = defineProps({
  historyDetails: {
    type: Object,
    required: true
  }
});

console.log('history', props.historyDetails.fileHistoryDto);
const selectedHistory = ref(null);
const isHistoryVisualizationModalOpen = ref(false);
const visualizationInfo = ref(null);

// Modal Function
const openHistoryVisualizationModal = () => {
  if(selectedHistory.value) {
    let data = {
      "eventId": selectedHistory.value.eventId
    }
    historyVisualizatuonApi(data).then((response) => {
      console.log(response);
      visualizationInfo.value = response;
      console.log('!!!!',visualizationInfo.value);
      isHistoryVisualizationModalOpen.value = true;
    })
  } else {
    alert('시각화할 파일을 선택해주세요.');
  }
}

const closeHistoryVisualizationModal = () => {
  isHistoryVisualizationModalOpen.value = false;
  // clearCheckedIndex();
}

</script>

<style lang="scss" scoped>

</style>