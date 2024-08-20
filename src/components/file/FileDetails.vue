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
            <button
              class="inline-block border border-red-600 px-3 py-2 align-text-bottom text-sm font-semibold text-red-600 hover:bg-red-600 hover:text-white active:bg-red-600"
              @click="openFileDeleteModal"
            >
              <v-icon :size="20">mdi-delete-outline</v-icon> 파일삭제
            </button>
            <button
              class="inline-block border border-orange px-3 py-2 align-text-bottom text-sm font-semibold text-orange hover:bg-orange hover:text-white hover:border-orange active:bg-orange"
              @click="openconnectModal"
            >
              <v-icon :size="20">mdi-refresh</v-icon> 새로고침
            </button>
          </div>
          <div class="flex ml-auto space-x-2">
            
            <select class="block w-sm text-sm font-medium transition duration-75 border border-gray-300 rounded-md shadow-sm focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none" >
              <option value="week">DLP</option>
              <option value="month">악성 탐지</option>
              <option value="year">VirusTotal</option>
              <option value="year">파일명</option>
              <option value="year">SaaS</option>
              <option value="year">사용자</option>
              <option value="year" selected>생성날짜</option>
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
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full bg-white">
          <thead class="bg-indigo-900">
            <tr>
              <th class="px-2 py-3 w-[5%] text-center text-sm font-bold font-medium text-white tracking-wider"></th>
              <th class="px-1 py-3 w-[5%] text-center text-sm font-bold font-medium text-white tracking-wider">DLP</th>
              <th class="px-1 py-3 w-[7%] text-center text-sm font-bold font-medium text-white tracking-wider">악성탐지</th>
              <th class="px-2 py-3 w-[7%] text-center text-sm font-bold font-medium text-white tracking-wider">VirusTotal</th>
              <th class="px-2 py-3 w-[26%] text-left text-sm font-bold font-medium text-white tracking-wider">파일명</th>
              <th class="px-2 py-3 w-[10%] text-center text-sm font-bold font-medium text-white tracking-wider">파일 유형</th>
              <th class="px-2 py-3 w-[10%] text-left text-sm font-bold font-medium text-white tracking-wider">SaaS</th>
              <th class="px-2 py-3 w-[15%] text-left text-sm font-bold font-medium text-white tracking-wider">사용자</th>
              <th class="px-2 py-3 w-[15%] text-center text-sm font-bold font-medium text-white tracking-wider">생성 날짜</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <template v-for="(details, index) in totalData" :key="index" >
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
                  <span v-if="details.fileStatus.dlpStatus === -1">
                    <v-icon :size="22" class="text-gray-300">mdi-minus-circle-outline</v-icon>
                  </span>
                  <span v-else-if="details.fileStatus.dlpStatus === 0">
                    <v-icon :size="22" class="text-amber-400">mdi-dots-horizontal-circle-outline</v-icon>
                  </span>
                  <span v-else-if="details.fileStatus.dlpStatus === 1">
                    <v-icon :size="22" class="text-emerald-600">mdi-check-circle-outline</v-icon>
                  </span>
                  <span v-else>
                    <v-icon :size="24" class="text-rose-600">mdi-help-circle-outline</v-icon>
                  </span>
                </td>
                <td class="px-2 py-2 text-center whitespace-nowrap">
                  <span v-if="details.fileStatus.gscanStatus === -1">
                    <v-icon :size="22" class="text-gray-300">mdi-minus-circle-outline</v-icon>
                  </span>
                  <span v-else-if="details.fileStatus.gscanStatus === 0">
                    <v-icon :size="22" class="text-amber-400">mdi-dots-horizontal-circle-outline</v-icon>
                  </span>
                  <span v-else-if="details.fileStatus.gscanStatus === 1">
                    <v-icon :size="22" class="text-emerald-600">mdi-check-circle-outline</v-icon>
                  </span>
                  <span v-else>
                    <v-icon :size="24" class="text-rose-600">mdi-help-circle-outline</v-icon>
                  </span>
                </td>
                <td class="px-2 py-2 text-center whitespace-nowrap">
                  <span v-if="details.fileStatus.vtStatus === -1" class="bg-gray-200 text-slate-900 text-xs me-2 px-2.5 py-0.5 rounded-full">미검사</span>
                  <span v-if="details.fileStatus.vtStatus === 0" class="bg-amber-200 text-amber-800 text-xs me-2 px-2.5 py-0.5 rounded-full">스캔중</span>
                  <span v-if="details.fileStatus.vtStatus === 1" class="bg-green-200 text-green-800 text-xs me-2 px-2.5 py-0.5 rounded-full">완료</span>
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
                <!-- <td class="px-2 py-2 whitespace-nowrap text-xs text-center">{{ getDate(details.date) }}</td> -->
                <!-- <td class="px-2 py-2 whitespace-nowrap text-xs text-center">{{ getDate(details.date) }}</td> -->
                <td class="px-2 py-2 whitespace-nowrap text-xs text-center">{{ details.date }}</td>
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
                      <span class="inline-block w-3/6 p-2 bg-white text-xs">{{ details.path }}</span>
                      <span class="inline-block w-1/6 p-2 border-x border-gray-200 text-sm text-center">접근 가능 사용자 수</span>
                      <span class="inline-block w-1/6 p-2 bg-white text-xs">{{ "20" }}</span>
                    </div>


                    <!-- 악성탐지 -->
                    <div class="p-2 border-t border-gray-200 border-l bg-gray-100 cursor-pointer" @click="toggleGscanReport(index)">
                      <v-icon v-if="!gscanStatus[index]" class="mr-2">mdi-chevron-right</v-icon>
                      <v-icon v-else class="mr-2">mdi-chevron-down</v-icon>악성탐지
                    </div>
                    <div v-if="isGscanOpen(index) && details.fileStatus.gscanStatus == 1" class="bg-white">
                      <div class="flex items-stretch border-t border-gray-200">
                        <span class="flex items-center justify-center w-1/4 p-2 bg-gray-100 border-x border-gray-200 text-center text-sm">확장자 시그니쳐 일치 여부</span>
                        <span class="flex inline-block w-1/4 p-2 bg-white text-xs">
                          일치 여부 : {{ details.gscan.step1.correct  }}<br>
                          MimeType 값 : {{ details.gscan.step1.mimeType }}<br>
                          Signature 값: {{ details.gscan.step1.signature }}<br>
                          파일 확장자 : {{ details.gscan.step1.extension }}
                        </span>
                        <span class="flex items-center justify-center w-[12.5%] p-2 bg-gray-100 border-x border-gray-200 text-sm text-center">심층분석</span>
                        <span class="inline-block w-[37.5%] p-2 bg-white text-xs self-stretch">
                          {{details.gscan.step2 }}
                        </span>
                      </div>
                    </div>

                    <!-- DLP Report -->
                    <div class="p-2 border-t border-gray-200 border-l bg-gray-100 cursor-pointer" @click="toggleDLPReport(index)">
                      <v-icon v-if="!dlpReportStatus[index]" class="mr-2">mdi-chevron-right</v-icon>
                      <v-icon v-else class="mr-2">mdi-chevron-down</v-icon>DLP Report
                    </div>
                    <div v-if="isDLPReportOpen(index) && (details.fileStatus.dlpStatus == 1)" class="bg-white">
                      <div class="flex">
                        <div class="w-1/2 border-t border-gray-200">
                          <div>
                            <span class="inline-block w-1/3 p-2 h-1/3 leading-[4rem] bg-gray-100 border-x border-gray-200 text-sm text-center">탐지 정책 수</span>
                            <span class="inline-block w-2/3 p-2 h-1/3 bg-white text-xs">20</span>
                          </div>
                          <div class="border-t border-gray-200">
                            <span class="inline-block w-1/3 p-2 h-1/3 leading-[4rem] bg-gray-100 border-x border-gray-200 text-sm text-center">탐지 개수</span>
                            <span class="inline-block w-2/3 p-2 h-1/3 bg-white text-xs">20</span>
                          </div>
                          <div class="border-t border-gray-200">
                            <span class="inline-block w-1/3 p-2 h-1/3 leading-[4rem] bg-gray-100 border-x border-gray-200 text-sm text-center">권장 조치사항</span>
                            <span class="inline-block w-2/3 p-2 h-1/3 bg-white text-xs">20</span>
                          </div>
                        </div>
                        <div class="w-1/2 border-t border-l border-gray-200">
                          <dlp-chart></dlp-chart>
                        </div>
                      </div>
                    </div>

                    <!-- VT Report -->
                    <div class="p-2 border-t border-gray-200 border-l bg-gray-100 cursor-pointer" @click="toggleVirusTotalReport(index)">
                      <v-icon v-if="!virusTotalReportStatus[index]" class="mr-2">mdi-chevron-right</v-icon>
                      <v-icon v-else class="mr-2">mdi-chevron-down</v-icon>VirusTotal Report
                    </div>
                    <!-- 원본 VT Report -->
                    <!-- <div v-if="isVirusTotalReportOpen(index) && details.fileStatus.vtStatus == 1" class="bg-white"> -->
                    <div v-if="isVirusTotalReportOpen(index)" class="bg-white">
                      <!-- VirusTotal Report content -->
                      <div class="flex h-full">
                        <div class="flex flex-col w-1/2 border-t border-gray-200">
                          <div class="flex flex-1 items-center border-b border-gray-200">
                            <span class="w-1/3 h-full flex items-center justify-center p-2 bg-gray-100 border-x border-gray-200 text-sm">SHA-256</span>
                            <span class="w-2/3 h-full flex items-center p-2 bg-white text-xs break-all">{{ details.vtReport.sha256 }}</span>
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
                            <span class="w-1/3 flex items-center justify-center p-2 bg-gray-100 border-x border-gray-200 text-sm text-center">Santinal One</span>
                            <span class="w-2/3 flex items-center p-2 text-xs bg-white">{{ details.vtReport.sentinelone }}</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <!-- VT Report -->


                  </div>
                </td>
              </tr>
            </template>
              <!-- Accordion row -->
          </tbody>
        </table>
      </div>
    </div>
    {{ typeof totalPage + ' '+ totalPage }}
    <the-pagination :totalPage="totalPage" @send-event="reset"></the-pagination>
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
import FileDeleteModal from '@/components/modals/FileDeleteModal.vue'
import { getSaasImg, getDate, getfileSize } from '@/utils/utils.js'


const props = defineProps({
  fileDetails: Object,
  required: true
});
const fileDetails = ref(props.fileDetails.data.files);

console.log('fileDetails', props.fileDetails.data);

const items = ref([]);
const totalData = ref([]);
const selectPages = ref(1); // 1이라는 페이지로 셋팅
const totalPage = ref(0); // totalData의 개수에 따라 페이지네이션을 그려지는 리스트를 뜻합니다.
const totalCount = ref(null);
const limit = ref(10) // 한 페이지에 보여줄 아이템 개수

const getData = () => {
  totalData.value = props.fileDetails.data.files;
  totalCount.value = totalData !== undefined ? totalData.value.length : 0;
  totalPage.value = Math.ceil(totalCount.value / limit.value) !== 0 ? Math.ceil(totalCount.value / limit.value) : 1;
  totalData.value = disassemble(selectPages.value - 1, totalData.value, limit.value);
}

const disassemble = (index, data, size) => {
  const res = new Array();

  for(let i = 0; i < data.length; i += size) {
    res.push(data.slice(i, i + size));
  }
  console.log('res:', res);
  return res[index];
}

onMounted(() => {
  getData();
})

const reset = (pageIdx) => {
  if(pageIdx === 0 ) selectPages.value = 1;
  else selectPages.value = pageIdx;
}

watch(selectPages, () => {
  getData();
})

let checkedIndex = ref([]);

const clearCheckedIndex = () => {
  checkedIndex.value = [];
}

const accordionStatus = ref({});
const gscanStatus = ref({});
const dlpReportStatus = ref({});
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

const toggleGscanReport = (index) => {
  gscanStatus.value[index] = !gscanStatus.value[index];
}

const isGscanOpen = (index) => {
  return gscanStatus.value[index] || false;
}

const toggleDLPReport = (index) => {
  dlpReportStatus.value[index] = !dlpReportStatus.value[index];
}

const isDLPReportOpen = (index) => {
  return dlpReportStatus.value[index] || false;
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
