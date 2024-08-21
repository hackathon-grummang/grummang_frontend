<template>
  <!-- <side-nav class="w-1/6 float-left"></side-nav> -->
  <div class="w-full float-right px-5">
    <header-breadcrumb></header-breadcrumb>
    <cycle-loading
      v-if="loading"></cycle-loading>
    <main class="scroll-h scroll overflow-auto rounded-lg"
      v-else-if="!loading && isApiOk">
      <Suspense>
      <register-main 
        v-if="responseData"
        :responseData="responseData"></register-main>
      </Suspense>
    </main>
    <content-error v-else></content-error>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import HeaderBreadcrumb from '@/components/HeaderBreadcrumb.vue'
import RegisterMain from '@/components/RegisterMain.vue'
import DetectionCount from '@/components/file/DetectionCount.vue'
import FileDetails from '@/components/file/FileDetails.vue'

import ContentError from '@/components/ContentError.vue'
import CycleLoading from '@/components/CycleLoading.vue'
// Api 들
import { getSaasListApi } from '@/apis/register.js'
import { fileScanApi } from '@/apis/file.js'

let loading = ref(true);
let isApiOk = ref(false);

let responseData = ref(null);
let error = ref(null);
let orgId = 3;

let detectionFileCount = ref(null);
let fileDetails = ref(null);

Promise.all([
  getSaasListApi(orgId)
  ]).then((values) => {
    responseData.value = values[0];
    isApiOk.value = true;
}).catch((err) => {
  console.log(err);
}).finally(() => {
  loading.value = false;
});

</script>
