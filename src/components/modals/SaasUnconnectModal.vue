<template>
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-xl w-1/4">
      <div class="p-3">
        <div class="flex justify-end">
          <button @click="$emit('close')" class="text-gray-400 hover:text-black">
            <v-icon>mdi-close</v-icon>
          </button>
        </div>
        <div class="flex justify-center p-4">
          <img src="@/assets/grummang_mascot_small.png" alt="구름망 캐릭터" class="size-1/3 object-cover rounded-full">
        </div>
        <div class="flex justify-center">
          <img class="size-7 float-left rounded-full mr-2" :src="getSaasImg(props.selectedSaas.name)" :alt="props.selectedSaas.name"/>
          <h1 class="text-2xl font-bold mb-2">{{ props.selectedSaas.name }}</h1>
        </div>

        <p class="text-sm font-bold text-center mb-4">별칭 : {{ props.selectedSaas.alias }}</p>
        <p class="text-sm text-red-700 font-bold text-center mb-2">위 SaaS의 연동 해제하시겠습니까?</p>
        <p class="text-xs text-black text-center mb-2">
          위 SaaS의 연동 해제하면은<br> 앞으로 CASB에서 관리될 수 없습니다.<br>
          정말 Jira의 연동을 해제하시겠습니까?
        </p>

        <div class="py-4">
          <label class="inline-flex items-center">
            <input type="checkbox" v-model="confirmed" class="form-checkbox size-4" />
            <span class="ml-2 text-sm font-bold">위 SaaS 연동을 해제하는 것에 동의하겠습니다.</span>
          </label>
        </div>

            <!-- class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50" -->
        <div class="grid grid-cols-2 gap-4">
          <button 
            class="inline-block rounded border border-indigo-900 px-4 py-2 align-text-bottom text-sm font-semibold text-indigo-900 hover:bg-indigo-900 hover:text-white active:bg-indigo-900"
            @click="$emit('close')"
          >
            아니요
          </button>
            <!-- :class="['inline-block rounded px-6 py-3 align-text-bottom text-base font-bold text-rose-600', confirmed ? 'hover: border border-rose-600 bg-rose-600 hover:text-white active:bg-rose-600' : 'bg-gray-400 cursor-not-allowed']" -->
          <button
            :class="['inline-block px-4 py-2 rounded align-text-bottom text-white text-sm font-semibold', confirmed ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-400 cursor-not-allowed']"
            :disabled="!confirmed"
            @click="UnconnectSaas(saasId)"
          >
            예
          </button>
        </div>
      </div>
    </div>
  </div>

  <saas-error-modal
    v-if="isErrorModalOpen"
    :errorCode="errorCode"
    :errorType="'해제'"
    @close="closeErrorModal"
  ></saas-error-modal>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue'
import saasErrorModal from '@/components/modals/SaasErrorModal.vue'
import { getSaasImg } from '@/utils/utils.js'
import { unconnectSaasApi } from '@/apis/register.js'

const props = defineProps({
  selectedSaas: {
    type: Object,
    required: true
  }
});

let emit = defineEmits(['close'])

let saasId = ref(props.selectedSaas.id);
let confirmed = ref(false);
let isErrorModalOpen = ref(false);
let errorCode = ref(null);

const openErrorModal = () => {
  isErrorModalOpen.value = true;
};

const closeErrorModal = () => {
  isErrorModalOpen.value = false;
}

const UnconnectSaas = (saasId) => {
  console.log(saasId);

  let deleteInfo = {
    "id": saasId
  }
  unconnectSaasApi(deleteInfo).then((response) => {
    errorCode.value = response.errorCode;
    console.log(response);
    if(errorCode.value != 200) {
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
  }).catch(err => alert(err + "\n서버에 문제가 발생했어요."));
}

</script>