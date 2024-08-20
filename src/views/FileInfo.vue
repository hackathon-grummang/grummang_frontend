<template>
  <!-- <side-nav class="w-1/6 float-left"></side-nav> -->
  <div class="w-full float-right px-5">
    <header-breadcrumb></header-breadcrumb>
    <cycle-loading
      v-if="loading"></cycle-loading>
    <main class="scroll-h scroll overflow-auto rounded-lg"
      v-else-if="!loading && isApiOk">
      <detection-count
        :detectionFileCount="detectionFileCount"></detection-count>
      <file-details
        :fileDetails="fileDetails"></file-details>
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
import { fileScanApi, totalFileInfoApi } from '@/apis/file.js'

let isApiOk = ref(false);
let loading = ref(true);
let error = ref(null);
let orgId = 3;

let detectionFileCount = ref(null);
let fileDetails = ref(null);

let data = {
  "orgId": orgId
}

Promise.all([
  fileScanApi(data),
  totalFileInfoApi(data),
  ]).then((values) => {
    console.log('fileScan',values[0]);
    fileDetails.value = values[0]
  // detectionFileCount.value = [values[0].data.total, values[0].data.dlpTotal, values[0].data.malwareTotal];
    detectionFileCount.value = values[1];
  isApiOk.value = true;
}).catch((err) => {
  console.log(err);
}).finally(() => {
  loading.value = false;
});

</script>
