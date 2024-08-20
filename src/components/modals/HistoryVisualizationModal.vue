<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="w-[90%] h-[90%] bg-white rounded-lg">
      <div class="flex justify-between p-3">
        <div class="flex items-center">
          <v-icon :size=20 class="text-orange-400 mr-2">mdi-alert-circle-outline</v-icon>
          <p class=" items-center text-xs italic">파일 히스토리에 대한 시각화가 정확하지 않을 수 있습니다.</p>
        </div>
        <button @click="$emit('close')" class="text-gray-400 hover:text-black">
          <v-icon>mdi-close</v-icon>
        </button>
      </div>
      <VueFlow v-model="elements" :fit-view-on-init="true" :default-zoom="2" :node-types="nodeTypes" style="height: calc(100% - 50px);"/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, defineProps, defineEmits } from 'vue'
import { VueFlow, useVueFlow, getBezierPath } from '@vue-flow/core'
import { Position } from '@vue-flow/core'
import { defineComponent, h } from 'vue'

import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'
import CustomNode from './nodes/CustomNode.vue'

const props = defineProps({
  visualizationInfo: {
    type: Object,
    required: true
  }
})

let data = props.visualizationInfo;
console.log('props.visualization', data);

// 커스텀 Slack 노드 컴포넌트
const CustomSlackNode = defineComponent({
  props: ['data'],
  setup(props) {
    return () => h(
      'div',
      { 
        style: {
          padding: '20px',
          border: '2px solid #4A154B',
          borderRadius: '10px',
          backgroundColor: 'rgba(74, 21, 75, 0.1)',
          fontSize: '20px',
          width: 300 * 5 + 'px',
          height: '300px',
          display: 'flex',
        }
      },
      [
        h('div', { style: { fontWeight: 'bold' } }, props.data.label)
      ]
    )
  }
})

const nodeTypes = {
  customSlack: CustomSlackNode,
  custom: CustomNode,
}

const elements = computed(() => {
  const slackData = data.data.slack.sort((a, b) => new Date(a.eventTs) - new Date(b.eventTs));
  const googleDriveData = data.data.googleDrive.sort((a, b) => new Date(a.eventTs) - new Date(b.eventTs));

  // 부모 노드 추가
  const nodes = [
    // {
    //   id: 'slack',
    //   type: 'customSlack',
    //   data: { label: 'Slack' },
    //   position: { x: 0, y: 0 },
    // },
    // {
    //   id: 'googleDrive',
    //   type: 'customSlack',
    //   data: { label: 'GoogleDrive' },
    //   position: { x: 0, y: 400 },
    // }
  ]
  const edges = []

  slackData.forEach((item, index) => {
    const nodeId = `${item.eventId}`;
    let yPosition;
    let tuning = 25;
    switch(item.eventType.toLowerCase()) {
      case 'file_upload':
        yPosition = Math.floor((Math.random() * (tuning - (-tuning))) + (-tuning));
        break;
      case 'file_change':
        yPosition = -300;
        break;
      case 'file_delete':
        yPosition = -600;
        break;
      default:
        yPosition = 0; // 기본값
    }

    nodes.push({
      id: nodeId,
      type: 'custom',
      data: { 
        originNode : item.eventId === data.data.originNode,
        eventType: item.eventType,
        saas: item.saas,
        fileName: item.fileName,
        email: item.email,
        eventTs: item.eventTs,
        uploadChannel: item.uploadChannel,
        similarity : item.similarity
      },
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      position: { x: 50 + index * 400, y: yPosition },
      // parentNode: item.saas,
      // extent: 'parent',
    })
  })

  googleDriveData.forEach((item, index) => {
    const nodeId = `${item.eventId}`;
    let yPosition;
    let tuning = 25;
    switch(item.eventType.toLowerCase()) {
      case 'file_upload':
        yPosition = Math.floor((Math.random() * (tuning - (-tuning))) + (-tuning));
        break;
      case 'file_change':
        yPosition = 600;
        break;
      case 'file_delete':
        yPosition = 300;
        break;
      default:
        yPosition = 900; // 기본값
    }

    nodes.push({
      id: nodeId,
      type: 'custom',
      data: { 
        originNode : item.eventId === data.data.originNode,
        eventType: item.eventType,
        saas: item.saas,
        fileName: item.fileName,
        email: item.email,
        eventTs: item.eventTs,
        uploadChannel: item.uploadChannel,
        similarity : item.similarity
      },
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      position: { x: 50 + index * 400, y: yPosition },
    })
  })


  googleDriveData.forEach((item, index) => {
    const nodeId = `file-${item.eventId}`
    nodes.push({
      id: nodeId,
      data: { 
        label: `활동 종류 : ${item.eventType}<br>\
                파일명 : ${item.fileName}<br>\
                사용자 : ${item.email}<br>\
                히스토리 시각 : ${new Date(item.eventTs).toLocaleString()}`,
        events: `${item.eventTs}`,
        selected: true,
      },
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      position: { x: 50 + index * 350, y: 150 },
      parentNode: item.saas,
      extent: 'parent',
      style: {
        padding: '10px',
        // border: '2px solid ' + (item.eventId % 2 === 0 ? 'rgba(0, 255, 75, 0.2)' : 'rgba(255, 0, 75, 0.2)'),
        borderRadius: '5px',
        backgroundColor: 'white',
        fontSize: '12px',
        lineHeight: 1.5,
        width: '300px',
        textAlign: 'left'
      }
    })
    
    if (index > 0) {
      const prevNodeId = `file-${googleDriveData[index - 1].eventId}`
      edges.push({
        id: `e-${prevNodeId}-${nodeId}`,
        source: prevNodeId,
        target: nodeId,
        animated: true,
        style: { stroke: '#4A154B',
                textColor: '#000',
        }
      })
    }
  })


// Edges 생성
  data.data.edges.forEach((item) => {
    const edgeId = `e-${item.source}-${item.target}`;
    edges.push({
      id: edgeId,
      source: `${item.source}`,  // 문자열로 변환
      target: `${item.target}`,  // 문자열로 변환
      label: item.label == 'File_SaaS_Match' ? '같은 파일': (item.label == 'File_Hash_Match' ? '내용 동일': '파일 그룹' ),
      animated: item.label == ['File_Hash_Match', 'File_SaaS_Match'] ? true : false,
      style: { 
        stroke: item.label == 'File_SaaS_Match' ? '#000' : '#A7A7A7',
        // fill: '#ddd',

      },
      labelStyle: { fill: '#000', fontWeight: 700 },
      markerStart: {
        type: item.label == 'File_Group_Relation' ? 'arrowclosed' : '',
        width: 20,
        height: 20,
        color: '#A7A7A7',
      },
      markerEnd: {
        type: 'arrowclosed',
        width: 20,
        height: 20,
        color: item.label == 'File_SaaS_Match' ? '#000' : '#A7A7A7',
      },
    });
  });

  console.log(nodes);
  console.log(edges);

  return [...nodes, ...edges]
})

const { fitView } = useVueFlow()

onMounted(() => {
  setTimeout(() => {
    fitView()
  }, 0)
})

</script>

<style>

</style>