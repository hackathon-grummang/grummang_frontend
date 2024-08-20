<template>
  <div class="w-full float-right px-5">
    <header-breadcrumb></header-breadcrumb>
    <content-error></content-error>
  </div>
  <!-- <footer>
    <the-footer></the-footer>
  </footer> -->
</template>

<script setup>
import { ref } from 'vue'
import HeaderBreadcrumb from '@/components/HeaderBreadcrumb.vue'
// import TheFooter from '@/components/TheFooter.vue'
import ContentError from '@/components/ContentError.vue'
import CycleLoading from '@/components/CycleLoading.vue'

let loading = ref(true);
let isApiOk = ref(false);

Promise.all([
]).then((values) => {
  isApiOk.value = false;
}).catch((err) => {
  console.log(err);
}).finally(() => {
  loading.value = false;
});

</script>
