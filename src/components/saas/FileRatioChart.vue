<template>
  <div class="flex flex-col p-4 bg-white border rounded-lg shadow-sm">
    <h2 class="text-xl font-bold mb-4">DLP 및 악성 파일 비율</h2>
    <div class="my-auto">
      <div class="my-0 mx-auto size-64">
        <canvas ref="myChart"></canvas>
      </div>
      <div class="mt-4">
        <ul class="space-y-1.5 mx-5">
          <li class="flex items-center">
            <span class="w-4 h-4 rounded-lg bg-amber-400 mr-2"></span>
            <span class="flex-1 text-sm">민감 파일 비율</span>
            <span class="bg-amber-300 text-slate-50 text-sm text-center w-16 py-0.5 px-2 rounded-xl">{{ dlpRatio }}%</span>
          </li>
          <li class="flex items-center">
            <span class="w-4 h-4 rounded-lg bg-red-600 mr-2"></span>
            <span class="flex-1 text-sm">악성 파일 비율</span>
            <span class="bg-red-600 text-slate-50 text-sm text-center w-16 py-0.5 px-2 rounded-xl">{{ malwareRatio }}%</span>
          </li>
          <li class="flex items-center">
            <span class="w-4 h-4 rounded-lg bg-gray-200 mr-2"></span>
            <span class="flex-1 text-sm">전체 파일 크기</span>
            <span class="bg-gray-200 text-slate-900 text-sm text-center w-16 py-0.5 px-2 rounded-xl">{{ fileVolume }}GB</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';
import { removeZeroDivision } from '@/utils/utils.js';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const props = defineProps({
  fileSize: Object,
});

const myChart = ref(null);
props.fileSize.totalSize = removeZeroDivision(props.fileSize.totalSize);
const fileVolume = ref(Math.round(props.fileSize.totalSize * 100) / 100);
const dlpRatio = ref(Math.round((props.fileSize.sensitiveSize / props.fileSize.totalSize) * 100));
const malwareRatio = ref(Math.round((props.fileSize.maliciousSize / props.fileSize.totalSize) * 100));

// watch(() => props.fileSize, (newSize) => {
//   fileVolume.value = newSize;
// });

const data = {
  datasets: [
    {
      label: 'DLP',
      data: [dlpRatio.value, 100 - dlpRatio.value],
      backgroundColor: ['#fbbf24', '#e5e7eb'],
      hoverOffset: 4
    },
    {
      label: 'Malware',
      data: [malwareRatio.value, 100 - malwareRatio.value],
      backgroundColor: ['#dc2626', '#e5e7eb'],
      hoverOffset: 4
    }
  ]
};

const config = {
  type: 'doughnut',
  data: data,
};

onMounted(() => {
  const ctx = myChart.value.getContext('2d');
  new Chart(ctx, config);
});

</script>

<style scoped>
</style>
