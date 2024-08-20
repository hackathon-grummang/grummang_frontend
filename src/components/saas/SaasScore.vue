<template>
  <div class="flex items-center justify-between  px-4 py-2 mb-5 bg-white shadow-sm rounded-lg">
      <div class="w-1/12 flex items-center justify-center space-x-4 text-center">
        <h1 class="text-lg text-gray-700 px-3 content-center">
          <!-- <v-icon size="30">mdi-chevron-right</v-icon>  -->
          {{ $route.name.slice($route.name.lastIndexOf(' ')) }}
        </h1>
      </div>

      <div class="w-3/4 bg-gray-200 h-4 rounded-md ">
        <div class="bg-indigo-900 h-4 rounded-md" :style="['width: ' + score + '%']"></div>
      </div>

      <div class="w-1/13 text-lg">
        {{ score }}
      </div>

      <div class="w-1/13">
        <span v-if="score < 33" class="bg-red-200 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full">Low</span>
        <span v-else-if="score < 66" class="bg-yellow-200 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full">Medium</span>
        <span v-else class="bg-green-200 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full">High</span>
      </div>
      
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  saasScore: {
    type: Number,
    required: true
  }
});

const score = ref(props.saasScore);


</script>

<style lang="scss" scoped>

</style>