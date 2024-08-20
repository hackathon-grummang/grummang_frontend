<template>
  <div class="bg-white p-4 rounded-lg shadow-sm">
    <h2 class="text-lg font-semibold mb-2">파일 히스토리 추이</h2>
    <canvas ref="chartRef" class=""></canvas>
    <div class="flex justify-end items-center">
      <span class="size-3 rounded bg-orange"></span>
      <span class="text-xs px-1.5">업로드</span>
      <span class="size-3 rounded bg-amber-400"></span>
      <span class="text-xs px-1.5">수정</span>
      <span class="size-3 rounded bg-slate-400"></span>
      <span class="text-xs px-1.5">삭제</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart, LineController, LineElement,PointElement, LinearScale, Title,CategoryScale,RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, RadialLinearScale, ArcElement, Tooltip, Legend);

const props = defineProps({
  historyTrends: {
    type: Object,
    required: true
  }
});

const chartRef = ref(null);

const chartData = props.historyTrends;

// console.log(chartData);

onMounted(() => {
  const ctx = chartRef.value.getContext('2d');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: chartData.map(row => row.date),
      datasets: [{
        label: '업로드',
        data: chartData.map(row => row.uploadCount),
        fill: false,
        borderColor: '#FF9A00',
        backgroundColor: '#FF9A00',
        borderDash: [4, 3],
        hoverBorderDash: [0, 0],
        pointRadius: 0,
        pointHoverRadius: 2,
        borderWidth: 1,
        hoverBorderWidth: 2,
        tension: 0.1,
      },
      {
        label: '수정',
        data: chartData.map(row => row.modifyCount),
        fill: false,
        borderColor: 'rgb(251, 191, 36)',
        hoverBorderColor: 'rgb(251, 191, 36)',
        backgroundColor: 'rgb(251, 191, 36)',
        borderDash: [4, 3],
        hoverBorderDash: [0, 0],
        pointRadius: 0,
        pointHoverRadius: 2,
        borderWidth: 1,
        hoverBorderWidth: 2,
        tension: 0.1,
      },
      {
        label: '삭제',
        data: chartData.map(row => row.deletedCount),
        fill: false,
        borderColor: 'rgb(200, 200, 200)',
        hoverBorderColor: 'rgb(148, 163, 184)',
        backgroundColor: 'rgb(148, 163, 184)',
        borderDash: [4, 3],
        hoverBorderDash: [0, 0],
        pointRadius: 0,
        pointHoverRadius: 2,
        borderWidth: 1,
        hoverBorderWidth: 2,
        tension: 0.1,
      }]
    },
    options: {
      responsive: true,
      aspectRatio: 4,
      hover: {
        mode: 'dataset',
        intersect: false
      },
      plugins: {
        legend: {
          display: false,
          position: 'bottom',
        },
        tooltip: {
          mode: 'nearest',
          intersect: true,
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: '횟수' 
          },
          ticks: {
            stepSize: 10
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
// onMounted(() => {
//   const ctx = chartRef.value.getContext('2d');
  
//   new Chart(ctx, {
//     type: 'line',
//     data: {
//       labels: chartData.map(row => row.date),
//       datasets: [{
//         label: '업로드',
//         data: chartData.map(row => row.upload),
//         fill: false,
//         borderColor: 'rgb(200, 200, 200)',
//         hoverBorderColor: 'rgb(249, 115, 22)',
//         // backgroundColor: 'rgb(249, 115, 22)',
//         tension: 0.1,
//         borderWidth: 2,
//         pointHoverRadius: 2,
//         pointHoverBorderWidth: 2
//       },
//       {
//         label: '수정',
//         data: chartData.map(row => row.edit),
//         fill: false,
//         borderColor: 'rgb(200, 200, 200)',
//         hoverBorderColor: 'rgb(251, 191, 36)',
//         // backgroundColor: 'rgb(251, 191, 36)',
//         tension: 0.1,
//         borderWidth: 2,
//         pointHoverRadius: 2,
//         pointHoverBorderWidth: 2
//       },
//       {
//         label: '삭제',
//         data: chartData.map(row => row.delete),
//         fill: false,
//         borderColor: 'rgb(200, 200, 200)',
//         hoverBorderColor: 'rgb(148, 163, 184)',
//         // backgroundColor: 'rgb(148, 163, 184)',
//         tension: 0.1,
//         borderWidth: 2,
//         pointHoverRadius: 2,
//         pointHoverBorderWidth: 2
//       }]
//     },
//     options: {
//       responsive: true,
//       aspectRatio: 4,
//       hover: {
//         mode: 'dataset',
//         intersect: false
//       },
//       plugins: {
//         legend: {
//           display: true,
//           position: 'bottom',
//           labels: {
//             usePointStyle: false,
//             pointStyle: '',
//             generateLabels: function(chart) {
//               const datasets = chart.data.datasets;
//               return datasets.map((dataset, i) => ({
//                 text: dataset.label,
//                 fillStyle: dataset.hoverBorderColor,
//                 hidden: !chart.isDatasetVisible(i),
//                 lineCap: dataset.borderCapStyle,
//                 lineDash: dataset.borderDash,
//                 lineDashOffset: dataset.borderDashOffset,
//                 lineJoin: dataset.borderJoinStyle,
//                 lineWidth: dataset.borderWidth,
//                 strokeStyle: dataset.hoverBorderColor,
//                 pointStyle: 'circle',
//                 datasetIndex: i
//               }));
//             }
//           }
//         },
//         tooltip: {
//           mode: 'nearest',
//           intersect: true,
//           backgroundColor: 'rgba(0, 0, 0, 0.7)',
//           titleColor: 'white',
//           bodyColor: 'white',
//           borderColor: function(context) {
//             if (context.tooltip && context.tooltip.dataPoints && context.tooltip.dataPoints.length > 0) {
//               return context.tooltip.dataPoints[0].dataset.hoverBorderColor;
//             }
//             return 'white';
//           },
//           borderWidth: 2,
//           callbacks: {
//             labelColor: function(context) {
//               return {
//                 borderColor: context.dataset.hoverBorderColor,
//                 backgroundColor: context.dataset.hoverBorderColor
//               };
//             },
//           }
//         }
//       },
//       scales: {
//         y: {
//           beginAtZero: true,
//           title: {
//             display: true,
//             text: '크기'  // MB 단위 제거
//           },
//           ticks: {
//             stepSize: 10
//             // callback 함수 제거
//           }
//         },
//         x: {
//           title: {
//             display: true,
//             text: '날짜'
//           },
//           ticks: {
//             font: { size: 10 },
//             maxTicksLimit: 20
//           }
//         }
//       }
//     }
//   });
// });
</script>