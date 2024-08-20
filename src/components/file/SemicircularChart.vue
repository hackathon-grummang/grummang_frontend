<template>
  <div class="score-gauge m-auto">
    <canvas ref="myChart"></canvas>
    <div class="score-text">
      <p class="m-0 text-2xl font-bold">{{ props.score }}%</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';
import { removeZeroDivision } from '@/utils/utils.js';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const props = defineProps({
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

const data = {
  datasets: [
    {
      label: props.name,
      data: [props.score, 100 - props.score],
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
}
.score-text {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>