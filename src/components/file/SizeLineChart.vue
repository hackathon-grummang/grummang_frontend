<template>
  <div>
    <h2 class="text-lg font-semibold mb-2">하루간 파일 크기 증가 추이</h2>
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart, LineController, LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

Chart.register(LineController, LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend);

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
});

const chartRef = ref(null);

const chartData = props.data;

console.log('SizeLine : ', chartData);

onMounted(() => {
  const ctx = chartRef.value.getContext('2d');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: chartData.map(row => row.date),
      datasets: [{
        label: '증가 크기',
        data: chartData.map(row => (row.volume / (1024 * 1024)).toFixed(2)),  // 여기서 변환하지 않음
        fill: false,
        borderColor: 'rgb(49 46 129)',
        tension: 0.1,
        borderWidth: 2 
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
          text: 'Volume Over Time'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y + ' MB';
              }
              return label;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: '크기 (MB)'
          },
          ticks: {
            stepSize: 10,
            callback: function(value, index, values) {
              return value + ' MB';
            }
          },
          suggestedMin: 0,
          suggestedMax: 50  // 최대값을 50MB로 설정 (필요에 따라 조정)
        },
        x: {
          title: {
            display: true,
            text: '날짜'
          },
          ticks: {
            font: { size: 10 },
            maxTicksLimit: 20
          }
        }
      }
    }
  });
});
</script>