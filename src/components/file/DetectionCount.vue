<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
    <div class="flex items-center bg-white shadow-sm rounded-lg p-4">
      <div>
        <h3 class="font-semibold text-gray-700">전체 파일 개수</h3>
        <p class="text-3xl font-semibold">{{ animatedStats[0] }}</p>
      </div>
      <v-icon :size="44" class="text-orange ml-auto">mdi-file-cloud-outline</v-icon>
    </div>

    <div class="flex items-center bg-white shadow-sm rounded-lg p-4">
      <div>
        <h3 class="font-semibold text-gray-700">악성 파일 개수</h3>
        <p class="text-3xl font-semibold">{{ animatedStats[2] }}</p>
      </div>
      <v-icon :size="44" class="text-red-600 ml-auto">mdi-file-code-outline</v-icon>
    </div>

  </div>
</template>

<script setup>
import { ref, watch, defineProps } from 'vue'

const props = defineProps({
  detectionFileCount: {
    type: Object,
    required: true
  }
});

let animatedStats = ref(props.detectionFileCount);
</script>

<style scoped>
/* Add your styles here */
</style>
