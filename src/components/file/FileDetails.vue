<template>
  <div>
    <div class="bg-white shadow-sm rounded-lg p-4 mb-5">
      <div class="mb-2">
        <h2 class="text-xl font-bold text-gray-800 mb-4">파일 검사</h2>
        <div class="flex">
          <div class="space-x-2">
            <button
              class="inline-block border border-blue-600 px-3 py-2 align-text-bottom text-sm font-semibold text-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-600"
              @click="openVirustotalModal"
            >
              <v-icon :size="20">mdi-shield-bug-outline</v-icon> VirusTotal 검사
            </button>

          </div>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full bg-white">
          <thead class="bg-indigo-900">
            <tr>
              <th class="px-2 py-3 w-[5%] text-center text-sm font-bold font-medium text-white tracking-wider"></th>
              <th class="px-2 py-3 w-[7%] text-center text-sm font-bold font-medium text-white tracking-wider">VirusTotal</th>
              <th class="px-2 py-3 w-[26%] text-left text-sm font-bold font-medium text-white tracking-wider">파일명</th>
              <th class="px-2 py-3 w-[10%] text-center text-sm font-bold font-medium text-white tracking-wider">파일 유형</th>
              <th class="px-2 py-3 w-[10%] text-left text-sm font-bold font-medium text-white tracking-wider">SaaS</th>
              <th class="px-2 py-3 w-[15%] text-left text-sm font-bold font-medium text-white tracking-wider">사용자</th>
              <th class="px-2 py-3 w-[15%] text-center text-sm font-bold font-medium text-white tracking-wider">생성 날짜</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <template v-for="(details, index) in fileInformation" :key="index" >
              <tr class="hover:bg-gray-100 cursor-pointer" @click="toggleAccordion(index)">
                <td class="px-2 py-2 text-center whitespace-nowrap">
                  <input 
                    type="checkbox" 
                    class="size-3.5 rounded border-gray-300" 
                    :value="details.id"
                    v-model="checkedIndex" 
                    onclick="event.cancelBubble = true;"
                  />
                </td>
                <td class="px-2 py-2 text-center whitespace-nowrap">
                  <div v-if="details.fileStatus">
                    <span v-if="details.fileStatus.vtStatus === -1" class="bg-gray-200 text-slate-900 text-xs me-2 px-2.5 py-0.5 rounded-full">미검사</span>
                    <span v-if="details.fileStatus.vtStatus === 0" class="bg-amber-200 text-amber-800 text-xs me-2 px-2.5 py-0.5 rounded-full">스캔중</span>
                    <span v-if="details.fileStatus.vtStatus === 1 && details.vtReport.threatLabel === 'none'" class="bg-green-200 text-green-800 text-xs me-2 px-2.5 py-0.5 rounded-full">안전</span>
                    <span v-if="details.fileStatus.vtStatus === 1 && details.vtReport.threatLabel !== 'none'" class="bg-red-200 text-red-800 text-xs me-2 px-2.5 py-0.5 rounded-full">위험</span>
                  </div>
                  <div v-else>
                    <span class="bg-gray-200 text-slate-900 text-xs me-2 px-2.5 py-0.5 rounded-full">미검사</span>
                  </div>
                </td>
                <td class="px-2 py-2 whitespace-nowrap text-xs">{{ details.name }}</td>
                <td class="px-2 py-2 whitespace-nowrap text-xs text-center">{{ details.type }}</td>
                <td class="px-2 py-2 whitespace-nowrap">
                  <div class="flex items-center">
                    <img class="size-5 rounded-full mr-2" :src="getSaasImg(details.saas)" :alt="details.saas" />
                    <span class="text-sm"> {{ details.saas }}</span>
                  </div>
                </td>
                <td class="px-2 py-2 whitespace-nowrap text-xs">{{ details.user }}</td>
                <td class="px-2 py-2 whitespace-nowrap text-xs text-center">{{ convertDate(details.date) }}</td>
              </tr>
              
              <!-- Accordion row -->
              <tr v-if="isAccordionOpen(index)" class="">
                <td colspan="9" class="">           
                  <div class="flex-col pl-[5%] bg-gray-100">
                    <div class="flex">
                      <!-- cause divide-y to add empty span-->
                      <span class="inline-block w-1/6 p-2 border-x border-gray-200 text-sm text-center">파일명</span>
                      <span class="inline-block w-3/6 p-2 bg-white text-xs">{{ details.name }}</span>
                      <span class="inline-block w-1/6 p-2 border-x border-gray-200 text-sm text-center">파일크기</span>
                      <span class="inline-block w-1/6 p-2 bg-white text-xs">{{ getfileSize(details.size) }}</span>
                    </div>
                    <div class="flex border-t border-gray-200">
                      <span class="inline-block w-1/6 p-2 border-x border-gray-200 text-sm text-center">파일 경로</span>
                      <span class="inline-block w-5/6 p-2 bg-white text-xs">{{ details.path }}</span>
                    </div>

                    <!-- VT Report -->
                    <div class="p-2 border-t border-gray-200 border-l bg-gray-100 cursor-pointer" @click="toggleVirusTotalReport(index)">
                      <v-icon v-if="!virusTotalReportStatus[index]" class="mr-2">mdi-chevron-right</v-icon>
                      <v-icon v-else class="mr-2">mdi-chevron-down</v-icon>VirusTotal Report
                    </div>
                    <!-- 원본 VT Report -->
                    <div v-if="details.fileStatus">

                    <div v-if="isVirusTotalReportOpen(index) && details.fileStatus.vtStatus == 1" class="bg-white">
                      <!-- VirusTotal Report content -->
                      <div class="flex h-full">
                        <div class="flex flex-col w-1/2 border-t border-gray-200">
                          <div class="flex flex-1 items-center border-b border-gray-200">
                            <span class="w-1/3 h-full flex items-center justify-center p-2 bg-gray-100 border-x border-gray-200 text-sm">SHA-256</span>
                            <span class="w-2/3 h-full flex items-center p-2 bg-white text-xs break-all">{{ details.vtReport.sha256 }}</span>
                            <!-- <span class="w-2/3 h-full flex items-center p-2 bg-white text-xs break-all">{{ "SHA 256 값입니다." }}</span> -->
                          </div>
                          <div class="flex flex-1 items-center border-b border-gray-200">
                            <span class="w-1/3 h-full flex items-center justify-center p-2 bg-gray-100 border-x border-gray-200 text-sm">File Type</span>
                            <span class="w-2/3 h-full flex items-center p-2 bg-white text-xs">{{ details.vtReport.type }}</span>
                          </div>
                          <div class="flex flex-1 items-center border-b border-gray-200">
                            <span class="w-1/3 h-full flex items-center justify-center p-2 bg-gray-100 border-x border-gray-200 text-sm">Threat Label</span>
                            <span class="w-2/3 h-full flex items-center p-2 bg-white text-xs">{{ details.vtReport.threatLabel }}</span>
                          </div>
                          <div class="flex flex-1 items-center">
                            <span class="w-1/3 h-full flex items-center justify-center p-2 bg-gray-100 border-x border-gray-200 text-sm">VirusTotal Report</span>
                            <div class="w-2/3 h-full flex items-center p-2">
                              <a 
                                class="px-3 py-1 font-medium tracking-wide text-white text-sm bg-blue-600 hover:bg-blue-500"
                                :href="details.vtReport.reportUrl"
                                target='_blank'
                              >바로가기</a>
                            </div>
                          </div>
                        </div>

                        <div class="flex w-1/2 border-t border-l border-gray-200">
                          <div class="flex-1 p-2">
                            <virustotal-chart :name="'엔진탐색'" :score=(details.vtReport.detectEngine/details.vtReport.completeEngine) :color="'#dc2626'"></virustotal-chart>
                          </div>
                          <div class="flex-1 border-l border-gray-200 p-2">
                            <virustotal-chart :name="'Score'" :score=(details.vtReport.score/100) :color="'#FF8A00'"></virustotal-chart>
                          </div>
                        </div>
                      </div>

                      <div class="p-2 border-t border-gray-200 border-l bg-gray-100 text-center">주요 탐지 엔진 </div>
                      <div class="flex h-full">
                        <div class="flex flex-col w-1/2 border-t border-gray-200">
                          <div class="flex flex-1 border-b border-gray-200">
                            <span class="w-1/3 flex items-center justify-center p-2 bg-gray-100 border-x border-gray-200 text-sm text-center">V3</span>
                            <span class="w-2/3 flex items-center p-2 text-xs bg-white">{{ details.vtReport.v3 }}</span>
                          </div>
                          <div class="flex flex-1 border-b border-gray-200">
                            <span class="w-1/3 flex items-center justify-center p-2 bg-gray-100 border-x border-gray-200 text-sm text-center">Kaspersky</span>
                            <span class="w-2/3 flex items-center p-2 text-xs bg-white">{{ details.vtReport.kaspersky }}</span>
                          </div>
                          <div class="flex flex-1">
                            <span class="w-1/3 flex items-center justify-center p-2 bg-gray-100 border-x border-gray-200 text-sm text-center">Avast</span>
                            <span class="w-2/3 flex items-center p-2 text-xs bg-white">{{ details.vtReport.avast }}</span>
                          </div>
                        </div>
                        <div class="flex flex-col w-1/2 border-t border-gray-200">
                          <div class="flex flex-1 border-b border-gray-200">
                            <span class="w-1/3 flex items-center justify-center p-2 bg-gray-100 border-x border-gray-200 text-sm text-center">ALYac</span>
                            <span class="w-2/3 flex items-center p-2 text-xs bg-white">{{ details.vtReport.alyac }}</span>
                          </div>
                          <div class="flex flex-1 border-b border-gray-200">
                            <span class="w-1/3 flex items-center justify-center p-2 bg-gray-100 border-x border-gray-200 text-sm text-center">Falcon</span>
                            <span class="w-2/3 flex items-center p-2 text-xs bg-white">{{ details.vtReport.falcon }}</span>
                          </div>
                          <div class="flex flex-1">
                            <span class="w-1/3 flex items-center justify-center p-2 bg-gray-100 border-x border-gray-200 text-sm text-center">Sentinal One</span>
                            <span class="w-2/3 flex items-center p-2 text-xs bg-white">{{ details.vtReport.sentinelone }}</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <!-- VT Report -->
                    </div>
                    <!-- VT Status가 null 이 아닌 경우 -->

                  </div>
                </td>
              </tr>
            </template>
              <!-- Accordion row -->
          </tbody>
        </table>
      </div>
    </div>
    <!-- {{ typeof totalPage + ' '+ totalPage }}
    <the-pagination :totalPage="totalPage" @send-event="reset"></the-pagination> -->
  </div>

<virustotal-modal
  v-if="isVirustotalModalOpen"
  :checkedIndex="checkedIndex"
  @close="closeVirustotalModal"
></virustotal-modal>
<file-delete-modal
  v-if="isFileDeleteModalOpen"
  :checkedIndex="checkedIndex"
  @close="closeFileDeleteModal"
></file-delete-modal>

</template>

<script setup>
import { ref, watch, defineProps, onMounted } from 'vue'
import DlpChart from '@/components/file/DlpChart.vue'
import VirustotalChart from '@/components/file/VirustotalChart.vue'
import VirustotalModal from '@/components/modals/VirustotalModal.vue'
// import FileDeleteModal from '@/components/modals/FileDeleteModal.vue'
import { getSaasImg, getDate, getfileSize, convertDate } from '@/utils/utils.js'


const props = defineProps({
  fileDetails: Object,
  required: true
});
const fileInformation = ref(props.fileDetails.data.files);
console.log('fileDetails', fileInformation.value);

let checkedIndex = ref([]);

const clearCheckedIndex = () => {
  checkedIndex.value = [];
}

const accordionStatus = ref({});
const virusTotalReportStatus = ref({});

const isVirustotalModalOpen = ref(false);
const isFileDeleteModalOpen = ref(false);

// Accordion Function
const toggleAccordion = (index) => {
  accordionStatus.value[index] = !accordionStatus.value[index];
}

const isAccordionOpen = (index) => {
  return accordionStatus.value[index] || false;
}

const toggleVirusTotalReport = (index) => {
  virusTotalReportStatus.value[index] = !virusTotalReportStatus.value[index];
}

const isVirusTotalReportOpen = (index) => {
  return virusTotalReportStatus.value[index] || false;
}

// Modal Function
const openVirustotalModal = () => {
  if(checkedIndex.value.length) {
    isVirustotalModalOpen.value = true;
  } else {
    alert('검사할 파일을 선택해주세요.');
  }
}

const closeVirustotalModal = () => {
  isVirustotalModalOpen.value = false;
  clearCheckedIndex();
}

const openFileDeleteModal = () => {
  if(checkedIndex.value.length) {
    isFileDeleteModalOpen.value = true;
  } else {
    alert('삭제할 파일을 선택해주세요.');
  }
}

const closeFileDeleteModal = () => {
  isFileDeleteModalOpen.value = false;
  clearCheckedIndex();
}

</script>

<style scoped>

</style>
