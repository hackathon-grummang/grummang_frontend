<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-lg shadow-lg w-1/4 max-w-lg">
      <!-- <div class="flex justify-end p-3">
        <button @click="$emit('close')" class="text-gray-400 hover:text-black">
          <v-icon>mdi-close</v-icon>
        </button>
      </div> -->
      <div class="flex justify-center p-3">
        <img src="../../../public/assets/virustotal.png" alt="VirusTotal 이미지" class="size-1/2">
      </div>
      <div class="px-4">
        <div class="mb-2 space-y-2 text-center">
          <label for="saasType" class="block pb-2 text-2xl font-semibold text-gray-700"> VirusTotal 파일 검사 </label>
          <p class="text-base pb-3">선택한 <strong>{{ fileCount }}</strong>개의 파일을 VirusTotal 로<br/>파일 검사를 진행하겠습니까?</p>
          <p class="text-xs text-red-600 font-semibold">VirusTotal로 검사할 시에, 파일이 외부로 유출될 수 있습니다.</p>
        </div>
      </div>
      <div class="flex justify-center p-3 space-x-2">
        <button  @click="$emit('close')" class="w-1/2 border border-blue-600 px-3 py-2 align-text-bottom text-sm font-semibold text-blue-600 hover:bg-blue-800 hover:text-white active:bg-blue-800">아니오</button>
        <button @click="uploadVirustotalScan" class="w-1/2 bg-blue-600 border border-blue-600 px-3 py-2 align-text-bottom text-sm font-semibold text-white hover:bg-blue-800 active:bg-blue-800">예</button>
      </div>
    </div>
  </div>

  <saas-error-modal
    v-if="isErrorModalOpen"
    :errorCode="errorCode"
    :errorType="'연동'"
    @close="closeErrorModal"
  ></saas-error-modal>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue';
import saasErrorModal from '@/components/modals/SaasErrorModal.vue'
import { fileVtUploadApi } from '@/apis/file.js'

const props = defineProps({
  checkedIndex: {
    type: Object,
    required: true
  }
});

let emit = defineEmits(['close']);

let fileCount = ref(Object.keys(props.checkedIndex).length);
// 리스트 값
console.log(Object.values(props.checkedIndex));

let isErrorModalOpen = ref(false);
let errorCode = ref(null);

const openErrorModal = () => {
  isErrorModalOpen.value = true;
};

const closeErrorModal = () => {
  isErrorModalOpen.value = false;
}

const uploadVirustotalScan = () => {
  let data = {
    "fileIds": Object.values(props.checkedIndex)
  }
  console.log(data);
  fileVtUploadApi(data).then((response) => {
    console.log(response);
    if(response.status != 'success') {
      alert('파일을 전송하는 데에 문제가 발생했어요.');
    }
    emit('close');
  })
  .catch((err) => {
    alert(err + "\n서버에 문제가 발생했어요.")
  });


  // connectSaasApi(connectData).then((response) => {
  //   console.log(response);
  //   errorCode = response.errorCode;
  //   if(errorCode != 200) {
  //     openErrorModal();
  //     watch(isErrorModalOpen, (afterValue, beforeValue) => {
  //       if (afterValue === false) {
  //         emit('close');
  //       }
  //     });
  //   }
  //   else {
  //     emit('close');
  //   }
  // })
  // .catch(err => alert(err + "\n서버에 문제가 발생했어요."));
};


</script>

<style scoped>

</style>
