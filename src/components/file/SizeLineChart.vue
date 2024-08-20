<template>
  <div>
    <h2 class="text-lg font-semibold mb-2">한달간 파일 크기 증가 추이</h2>
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
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
        label: '증가 크기',
        data: chartData.map(row => row.volume / (1024 * 1024)),
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
                let bytes = context.parsed.y * 1024 * 1024; // 원래 값을 bytes로 변환
                const units = ['bytes', 'KB', 'MB', 'GB', 'TB'];
                let unitIndex = 0;
                
                while (bytes >= 1024 && unitIndex < units.length - 1) {
                  bytes /= 1024;
                  unitIndex++;
                }

                // 소수점 두 자리까지 표시하고, 불필요한 0은 제거
                label += bytes.toFixed(2).replace(/\.?0+$/, '') + ' ' + units[unitIndex];
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
          }
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