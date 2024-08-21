<template>
  <div>
    <h2 class="text-lg font-semibold mb-2">하루간 파일 개수 증가 추이</h2>
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { Chart, LineController, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(LineController, RadialLinearScale, ArcElement, Tooltip, Legend);

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
});

const chartRef = ref(null);

const chartData = props.data;

onMounted(() => {
  const ctx = chartRef.value.getContext('2d');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: chartData.map(row => row.date),
      datasets: [{
        label: '증가 개수',
        data: chartData.map(row => row.count),
        fill: false,
        borderColor: 'rgb(49 46 129)',
        tension: 0.1,
        borderWidth: 2 
      },
      // {
      //   label: '파일 개수',
      //   data: chartData.map(row => row.volume),
      //   fill: false,
      //   borderColor: 'rgb(75, 13, 192)',
      //   tension: 0.1
      // }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
          text: 'Volume Over Time'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: '개수'
          },
          ticks: {
            stepSize: 1
          }
        },
        x: {
          title: {
            display: true,
            text: '날짜'
          },
          ticks: {
            // stepSize: 1,
            font: { size: 10 },
            // autoSkip: true,
            maxTicksLimit: 20 // 최대 10개의 라벨만 표시
          }
        }
      }
    }
  });
});
</script>