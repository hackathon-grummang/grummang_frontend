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
import HistoryVisualizationModal from '@/components/modals/HistoryVisualizationModal.vue'
import { historyVisualizatuonApi } from '@/apis/file'

const props = defineProps({
  historyDetails: {
    type: Object,
    required: true
  }
});

// console.log('history', props.historyDetails.fileHistoryDto);
const selectedHistory = ref(null);
const isHistoryVisualizationModalOpen = ref(false);
const visualizationInfo = ref(null);

// Modal Function
const openHistoryVisualizationModal = () => {
  if(selectedHistory.value) {
    let data = {
      "orgId": 3,
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