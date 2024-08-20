<template>
  <!-- <div class="bg-white rounded-lg p-4 mb-5 shadow-sm">
    <div class="flex justify-between mb-1">
      <span class="font-semibold pb-2">파일 안전 점수</span>
      <span class="font-semibold">{{ 100 - (animatedStats[2]*2) }}</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-4">
      {{ animatedStats[2] * 2 }}
      <div class="bg-indigo-900 h-4 rounded-full" style="{ width: `100 - ${animatedStats[2] * 2}%` }"></div>
    </div>
  </div> -->
  <div class="grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-3 gap-5 mb-5">
    <div class="flex items-center col-span-1 bg-white shadow-sm rounded-lg p-4">
      <div>
        <h3 class="font-semibold text-gray-700">전체 파일 개수</h3>
        <p class="text-3xl font-semibold">{{ totalCount }}</p>
      </div>
      <v-icon :size="44" class="text-orange ml-auto">mdi-file-cloud-outline</v-icon>
    </div>

    <div class="flex items-center col-span-1 row-start-2 bg-white shadow-sm rounded-lg p-4">
      <div>
        <h3 class="font-semibold text-gray-700">악성 파일 개수</h3>
        <p class="text-3xl font-semibold">{{ totalMalware }}</p>
      </div>
      <v-icon :size="44" class="text-red-600 ml-auto">mdi-file-code-outline</v-icon>
    </div>

    <div class="flex items-center col-span-1 row-start-3 bg-white shadow-sm rounded-lg p-4">
      <div>
        <h3 class="font-semibold text-gray-700">전체 파일 용량</h3>
        <!-- <p class="text-3xl font-semibold">{{ formatFileSize("120301230") }}</p> -->
        <p class="text-3xl font-semibold">{{ getfileSize(totalVolume) }}</p>
      </div>
      <v-icon :size="44" class="text-indigo-900 ml-auto">mdi-database</v-icon>
    </div>

    <!-- Line 차트 -->
    <div class="flex items-center col-span-2 row-start-1 row-end-4 bg-white shadow-sm rounded-lg p-4">
      <div class="w-full">
        <size-line-chart :data="statistics"></size-line-chart>
      </div>
    </div>

    <div class="flex items-center col-span-2 row-start-1 row-end-4 bg-white shadow-sm rounded-lg p-4">
      <div class="w-full">
        <count-line-chart :data="statistics"></count-line-chart>
      </div>
    </div>


  </div>
</template>

<script setup>
import { ref, watch, defineProps } from 'vue'
import { getfileSize } from '@/utils/utils.js'

import CountLineChart from '@/components/file/CountLineChart.vue'
import SizeLineChart from '@/components/file/SizeLineChart.vue'

const props = defineProps({
  detectionFileCount: {
    type: Object,
    required: true
  }
});

console.log('왜 null이야 : ',props.detectionFileCount.data);
const totalCount = ref(props.detectionFileCount.data.totalCount);
console.log('totalCount : ', totalCount.value);
const totalMalware = ref(props.detectionFileCount.data.totalMalware);
const totalVolume = ref(props.detectionFileCount.data.totalVolume);
const statistics = ref(props.detectionFileCount.data.statistics);

console.log('statics : ', statistics.value);
</script>

<style scoped>
/* Add your styles here */
</style>
