<template>
  <div class="score-gauge m-auto">
    <canvas ref="myChart"></canvas>
    <div class="score-text">
      <h2 class="m-0 text-base">{{ props.name }}</h2>
      <p v-if="props.name == '엔진탐색'" class="m-0 text-2xl font-bold">{{ ratioValue }}%</p>
      <p v-else class="m-0 text-2xl font-bold">{{ ratioValue }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';
import { removeZeroDivision } from '@/utils/utils.js';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
    validator: (value) => value >= 0 && value <= 100
  },
  color: {
    type: String,
    required: true
  }
});

const myChart = ref(null);

const ratioValue = ref(Math.round(props.score * 100));
// watch(() => props.fileSize, (newSize) => {
//   fileVolume.value = newSize;
// });

// console.log('#' + props.color);

const data = {
  datasets: [
    {
      label: props.name,
      data: [ratioValue.value, 100 - ratioValue.value],
      backgroundColor: [props.color, '#e5e7eb'],
      cutout: "75%",
      hoverOffset: 4,
      rotation: -120,
      circumference: 240
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
.score-gauge {
  position: relative;
  width: 145px;
  height: 145px;
}
.score-text {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>