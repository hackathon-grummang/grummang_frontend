<template>
  <div>
    <h2 class="text-lg font-semibold mb-2">파일 타입 비율</h2>
    <div class="flex">
      <div class="w-1/2">
        <canvas ref="chartRef"></canvas>
      </div>
      <div class="w-1/2 pl-4 flex items-center">
        <ul class="list-none p-0 w-full">
          <li v-for="item in sortedData" :key="item.type" class="mb-2 flex items-center justify-between">
            <div class="flex items-center flex-grow">
              <span class="w-4 h-4 rounded-full mr-2" :style="{ backgroundColor: getColor(item.type) }"></span>
              <span class="text-sm">{{ item.type }}</span>
            </div>
            <span class="bg-indigo-900 rounded-full px-3 py-1 w-14 text-xs font-base text-white text-center ml-2 whitespace-nowrap">
              {{ calculatePercentage(item.count) }}%
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { Chart, PolarAreaController, RadialLinearScale, ArcElement, Tooltip } from 'chart.js';

Chart.register(PolarAreaController, RadialLinearScale, ArcElement, Tooltip);

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

const chartRef = ref(null);
let chart = null;

const colors = [
  'rgb(220 38 38)',
  'rgb(251 191 36)',
  'rgb(249 115 22)',
  // '#B5C18E',
];

// 
const limit = 7;
const sortedData = computed(() => [...props.data].sort((a, b) => b.count - a.count).slice(0, limit));
const totalCount = computed(() => props.data.reduce((sum, item) => sum + item.count, 0));
const mostCommonType = computed(() => sortedData.value[0] || { type: 'N/A', count: 0 });
const leastCommonType = computed(() => sortedData.value[sortedData.value.length - 1] || { type: 'N/A', count: 0 });
const calculatePercentage = (count) => ((count / totalCount.value) * 100).toFixed(1);

const getColor = (type) => {
  const index = props.data.findIndex(item => item.type === type);
  return colors[index % colors.length];
};

const createChart = () => {
  const ctx = chartRef.value.getContext('2d');
  
  chart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: sortedData.value.map(item => item.type),
      datasets: [{
        data: sortedData.value.map(item => item.count),
        backgroundColor: colors,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.raw || 0;
              const percentage = calculatePercentage(value);
              return `${label}: ${value} (${percentage}%)`;
            }
          }
        }
      },
      scales: {
        r: {
          pointLabels: {
            display: true,
            centerPointLabels: true,
            font: {
              size: 15
            }
          },
          ticks: {
            display: false
          }
        }
      },
    }
  });
};

onMounted(() => {
  createChart();
});

watch(() => props.data, () => {
  if (chart) {
    chart.destroy();
  }
  createChart();
}, { deep: true });
</script>

<style scoped>
/* 추가 스타일 */
.bg-indigo-600 {
  background-color: #4f46e5;
}
.text-white {
  color: white;
}
</style>