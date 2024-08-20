<template>
  <div class="w-full float-right px-5">
    <header-breadcrumb></header-breadcrumb>
    <cycle-loading
      v-if="loading"></cycle-loading>
    <main 
      class="scroll-h scroll overflow-auto rounded-lg"
      v-else-if="!loading && isApiOk">
      <div>
        <history-statistics :historyStatistics="historyStatistics"></history-statistics>
        <history-trends :historyTrends="historyTrends"></history-trends>
        <history-details :historyDetails="historyDetails"></history-details>
      </div>
    </main>
    <content-error
      v-else></content-error>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { historyStatisticsApi, historyDetailsApi } from '@/apis/file.js'
import HeaderBreadcrumb from '@/components/HeaderBreadcrumb.vue'
import ContentError from '@/components/ContentError.vue'
import CycleLoading from '@/components/CycleLoading.vue'
import HistoryStatistics from '@/components/file/HistoryStatistics.vue'
import HistoryTrends from '@/components/file/HistoryTrends.vue'
import HistoryDetails from '@/components/file/HistoryDetails.vue'

let loading = ref(true);
let isApiOk = ref(false);

let historyStatistics = ref([]);
let historyTrends = ref([]);
let historyDetails = ref([]);

let data = {
  "orgId": 3
}

Promise.all([
  historyStatisticsApi(data),
  historyDetailsApi(data),
]).then((values) => {
  console.log(values[0], values[1]);
  // historyStatistics.value = [values[0].data.totalUpload, values[0].data.totalChanged, values[0].data.totalDeleted];
  historyStatistics.value = [20, 20, 20];
  // historyTrends.value = values[0].data.fileHistoryStatistics;
  historyDetails.value = values[1].data[0];
  isApiOk.value = true;
}).catch((err) => {
  console.log(err);
}).finally(() => {
  loading.value = false;
});

</script>
