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
// Api 들
import { getSaasListApi } from '@/apis/register.js'
import { fileScanApi } from '@/apis/file.js'

let loading = ref(true);
let isApiOk = ref(false);

let responseData = ref(null);
let error = ref(null);
let orgId = 3;

responseData.value = getSaasListApi(orgId);

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

const fetchPosts = async (orgId) => {
  try {
    const response = await axios.post('/api/v1/org-saas/3');
    if(response.status == '200') {
      return await response.data;
    }
  } catch (err) {
    console.error('Error:', err);
    throw err;  
  }
};

let detectionFileCount = ref(null);
let fileDetails = ref(null);

Promise.all([
  fileScanApi(),
  ]).then((values) => {
    console.log('fileScan',values[0]);
    fileDetails.value = values[0]
    detectionFileCount.value = [values[0].data.total, values[0].data.dlpTotal, values[0].data.malwareTotal];
    isApiOk.value = true;
}).catch((err) => {
  console.log(err);
}).finally(() => {
  loading.value = false;
});

</script>
