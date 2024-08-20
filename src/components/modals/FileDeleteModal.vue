<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-lg shadow-lg w-1/4 max-w-lg">
      <div class="flex justify-end p-3">
        <button @click="$emit('close')" class="text-gray-400 hover:text-black">
          <v-icon>mdi-close</v-icon>
        </button>
      </div>
      <div class="px-4">
        <div class="mb-2 space-y-2 text-center">
          <label for="saasType" class="block pb-2 text-2xl font-semibold text-red-600"> 
            <v-icon :size="30">mdi-delete-outline</v-icon> 파일삭제 </label>
          <p class="text-base pb-3">SaaS에 저장된 <strong>{{ fileCount }}</strong>개의 파일을 <br/>정말 삭제하겠습니까?</p>
          <p class="text-xs text-red-600 font-semibold">파일을 삭제하면은 더 이상 복구할 수 없습니다.</p>
        </div>
      </div>
      <div class="flex justify-center p-3 space-x-2">
        <button  @click="$emit('close')" class="w-1/2 border border-red-600 px-3 py-2 align-text-bottom text-sm font-semibold text-red-600 hover:bg-red-800 hover:text-white active:bg-red-800">아니오</button>
        <button @click="close" class="w-1/2 bg-red-600 border border-red-600 px-3 py-2 align-text-bottom text-sm font-semibold text-white hover:bg-red-800 active:bg-red-800">예</button>
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
import axios from 'axios';
import saasErrorModal from '@/components/modals/SaasErrorModal.vue'
import { validateEmail } from '@/utils/validation.js'
import { getWebhookApi, TokenValidationApi, connectSaasApi } from '@/apis/register.js'

const props = defineProps({
  checkedIndex: {
    type: Object,
    required: true
  }
});

let emit = defineEmits(['close']);

let fileCount = ref(Object.keys(props.checkedIndex).length);;
// 리스트 값
// console.log(Object.values(props.checkedIndex));

let isErrorModalOpen = ref(false);
let errorCode = ref(null);

const openErrorModal = () => {
  isErrorModalOpen.value = true;
};

const closeErrorModal = () => {
  isErrorModalOpen.value = false;
}

const syncSaaS = () => {
  // 다음 스텝 -> 해당 값들을 POST로 보내기
  let connectData = {
    "orgId": 1,     // samsung
    "saasId": saasType.value,    // slack
    "alias": alias.value,
    "adminEmail": saasEmail.value,
    "apiToken": apiToken.value,
    "webhookUrl": webhookUrl.value
  };

  connectSaasApi(connectData).then((response) => {
    console.log(response);
    errorCode = response.errorCode;
    if(errorCode != 200) {
      openErrorModal();
      watch(isErrorModalOpen, (afterValue, beforeValue) => {
        if (afterValue === false) {
          emit('close');
        }
      });
    }
    else {
      emit('close');
    }
  })
  .catch(err => alert(err + "\n서버에 문제가 발생했어요."));
};


</script>

<style scoped>

</style>
