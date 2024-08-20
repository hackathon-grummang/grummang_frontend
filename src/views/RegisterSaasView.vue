<template>
  <side-nav class="w-1/6 float-left"></side-nav>
  <div class="w-5/6 float-right px-5">
    <header-breadcrumb></header-breadcrumb>
    <main>
      <Suspense>
      <register-main 
        v-if="responseData"
        :responseData="responseData"></register-main>
      <content-error v-else></content-error>
      </Suspense>
    </main>
  </div>

  <!-- <footer>
    <the-footer></the-footer>
  </footer> -->
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import SideNav from '@/components/SideNav.vue'
import HeaderBreadcrumb from '@/components/HeaderBreadcrumb.vue'
import TheFooter from '@/components/TheFooter.vue'
import RegisterMain from '@/components/RegisterMain.vue'
import ContentError from '@/components/ContentError.vue'
import { getSaasListApi } from '@/apis/register.js'

let responseData = ref(null);
let error = ref(null);
let orgId = 1;

responseData.value = getSaasListApi(orgId);

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

const fetchPosts = async (orgId) => {
  try {
    const response = await axios.get('/api/v1/org-saas/1');
    if(response.status == '200') {
      return await response.data;
    }
  } catch (err) {
    console.error('Error:', err);
    throw err;  
  }
};

</script>
