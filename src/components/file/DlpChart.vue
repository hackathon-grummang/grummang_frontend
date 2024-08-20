<template>
  <div class="flex-col p-2 h-52 bg-white">
    <h2 class="text-base font-bold mb-2">DLP 탐지</h2>
    <canvas ref="myChart" class="w-full"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const props = defineProps({
  fileSize: Number,
});

const myChart = ref(null);

const data = {
  labels: ['정책v1', '정책v2', 'Yellow'],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    categoryPercentage: 0.5, // Reduced category width to make bars closer
    barPercentage: 0.5, // Reduced bar width to make bars closer
    barThickness: 20,
    maxBarThickness: 20
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false, // Add this to allow the chart to fill the container
    plugins: {
      legend: {
        display: false, // Hide legend labels
      },
    },
    scales: {
      x: {
        beginAtZero: true
      }
    }
  },
};

onMounted(() => {
  const ctx = myChart.value.getContext('2d');
  new Chart(ctx, config);
});
</script>

<style scoped>
canvas {
  width: 100% !important;
  height: auto;
}
</style>
