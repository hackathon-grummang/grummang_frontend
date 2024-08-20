<template>
  <footer style="background: #4D4C7D; opacity: 1;">
    <div class="relative mx-auto max-w-screen-xl p-2">
      <div class="lg:flex lg:items-center lg:justify-between">
        <div class="flex justify-center text-teal-600 lg:justify-start dark:text-teal-300">
          <div class="flex items-center justify-center">
            <img src="../../public/gurummang_logo.png" alt="Logo" class="size-9 mr-4">
            <h1 class="text-2xl font-bold text-white">구름망 CASB</h1>
          </div>
          <p class="flex items-center pl-6 text-center text-xs text-white lg:text-right dark:text-white">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>

        <ul class="flex items-center gap-12">
          <li>
            <a
              class="text-gray-700 text-sm transition hover:text-gray-700/75 text-white hover:text-white/75"
              href="#"
              @click.prevent="showModal = true"
            >
              개인약관
            </a>
          </li>

          <li>
            <a
              class="text-gray-700 text-sm transition hover:text-gray-700/75 text-white hover:text-white/75"
              href="#"
            >
              사용설명
            </a>
          </li>

          <li>
            <a
              class="text-gray-700 text-sm transition hover:text-gray-700/75 text-white hover:text-white/75"
              href="#"
            >
              구름망
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>

  <GrummangModal v-model="showModal" />
</template>

<script setup>
import { ref } from 'vue'
import GrummangModal from '../components/modals/GrummangModal.vue'

const showModal = ref(false)
</script>

<style>
</style>