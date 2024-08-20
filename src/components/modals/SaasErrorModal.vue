<template>
  <div class="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-xl w-1/4">
      <div class="p-3">
        <div class="flex justify-end">
          <button @click="$emit('close')" class="text-gray-400 hover:text-black">
            <v-icon>mdi-close</v-icon>
          </button>
        </div>

        <p class="text-sm text-red-700 font-bold text-center mb-4">SaaS {{ errorType }} 중에 에러가 발생했습니다.</p>
        <p class="text-sm text-black text-center mb-4">Error Code : {{ errorCode }}</p>

        <div class="flex justify-end pt-3">
          <button 
            class="inline-block px-4 py-2 rounded align-text-bottom text-white text-base bg-red-600 hover:bg-red-700"
            @click="$emit('close')" 
          >확인
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  errorType: {
    type: String,
    required: true
  },
  errorCode: {
    type: Number,
    required: true
  },
});

const emit = defineEmits(['close'])
</script>