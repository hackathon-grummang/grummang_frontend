<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
    <div class="flex items-center bg-white shadow-sm rounded-lg p-4">
      <div>
        <h3 class="font-semibold text-gray-700">업로드</h3>
        <p class="text-3xl font-semibold">{{ animatedStats[0] }}</p>
      </div>
      <v-icon :size="44" class="text-orange ml-auto">mdi-file-upload-outline</v-icon>
    </div>

    <div class="flex items-center bg-white shadow-sm rounded-lg p-4">
      <div>
        <h3 class="font-semibold text-gray-700">수정</h3>
        <p class="text-3xl font-semibold">{{ animatedStats[1] }}</p>
      </div>
      <v-icon :size="44" class="text-amber-400 ml-auto">mdi-file-edit-outline</v-icon>
    </div>

    <div class="flex items-center bg-white shadow-sm rounded-lg p-4">
      <div>
        <h3 class="font-semibold text-gray-700">삭제</h3>
        <p class="text-3xl font-semibold">{{ animatedStats[2] }}</p>
      </div>
      <v-icon :size="44" class="text-slate-400 ml-auto">mdi-file-remove-outline</v-icon>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps } from 'vue'

const props = defineProps({
  historyStatistics: {
    type: Object,
    required: true
  }
});

let animatedStats = ref(props.historyStatistics);

// animateCountUp(0, 0, animatedStats.value[0], (val) => animatedStats.value[0] = val);
// animateCountUp(1, 0, animatedStats.value[1], (val) => animatedStats.value[1] = val);
// animateCountUp(2, 0, animatedStats.value[2], (val) => animatedStats.value[2] = val);


function animateCountUp(index, start, end, callback) {
  const duration = 1000; // duration of animation in ms
  const frameDuration = 1000 / 60; // 60 frames per second
  const totalFrames = Math.round(duration / frameDuration);
  const easeOutQuad = t => t * (2 - t);
  
  let frame = 0;
  const countUp = () => {
    frame++;
    const progress = easeOutQuad(frame / totalFrames);
    const currentValue = Math.round(start + (end - start) * progress);
    callback(currentValue);
    if (frame < totalFrames) {
      requestAnimationFrame(countUp);
    }
  };
  countUp();
}
</script>

<style scoped>
/* Add your styles here */
</style>
