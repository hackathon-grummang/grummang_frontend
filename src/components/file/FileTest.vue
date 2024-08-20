<template>
  <div class="w-full h-3/5 bg-white rounded-lg mt-10">
    <VueFlow v-model="elements" :fit-view-on-init="true" :default-zoom="0.7" :node-types="nodeTypes" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { VueFlow, useVueFlow, getBezierPath } from '@vue-flow/core'
import { Position } from '@vue-flow/core'
import { defineComponent, h } from 'vue'

import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'

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
}

// 샘플 데이터
const data = {
    "status": "success",
    "data": {
        "slack": [
            {
                "eventId": 1,
                "saas": "slack",
                "eventType": "file_uploaded",
                "fileName": "requirements.txt",
                "hash256": "886b15487fa6ae32484b1bb291abb6ac8ad78d5c09ad686651676215719f598b",
                "saasFileId": "F078MV1L5HS",
                "eventTs": "2024-06-18T05:51:37",
                "email": "hsp003636@gmail.com",
                "uploadChannel": null
            },
            {
                "eventId": 4,
                "saas": "slack",
                "eventType": "file_uploaded",
                "fileName": "Injector.pdf",
                "hash256": "26a4ed4d2dd44f70bd41650874c4388bf5444290a3b9c094a9ae652bfbb6fbbc",
                "saasFileId": "F078KQN3X26",
                "eventTs": "2024-06-18T07:13:08",
                "email": "hsp003636@gmail.com",
                "uploadChannel": null
            },
            {
                "eventId": 7,
                "saas": "slack",
                "eventType": "file_uploaded",
                "fileName": "123123123123123123fsdfgdsfg.png",
                "hash256": "139e1cfe2293dc36ecf6d49bfea7b5f046aa073edd40485a892140973e5ffc91",
                "saasFileId": "F07EMFUPV5Z",
                "eventTs": "2024-07-30T05:23:37",
                "email": "hsp003636@gmail.com",
                "uploadChannel": "SAMSUNG/slack/psh_slacktest/소셜/hsp003636"
            },
            {
                "eventId": 10,
                "saas": "slack",
                "eventType": "file_uploaded",
                "fileName": "다운로드.png",
                "hash256": "dd3453005c8846cc80540c609690266e42b9076a6bde174b6614b69a5776250a",
                "saasFileId": "F07FBFRET2L",
                "eventTs": "2024-07-30T09:29:26",
                "email": "hsp003636@gmail.com",
                "uploadChannel": "SAMSUNG/slack/psh_slacktest/소셜/hsp003636"
            }
        ],
        "googleDrive": [
          {
                "eventId": 11,
                "saas": "googleDrive",
                "eventType": "uploaded",
                "fileName": "requirements.txt",
                "hash256": "886b15487fa6ae32484b1bb291abb6ac8ad78d5c09ad686651676215719f598b",
                "saasFileId": "F078MV1L5HS",
                "eventTs": "2024-06-18T05:51:37",
                "email": "hsp003636@gmail.com",
                "uploadChannel": null
            },
            {
                "eventId": 14,
                "saas": "googleDrive",
                "eventType": "uploaded",
                "fileName": "Injector.pdf",
                "hash256": "26a4ed4d2dd44f70bd41650874c4388bf5444290a3b9c094a9ae652bfbb6fbbc",
                "saasFileId": "F078KQN3X26",
                "eventTs": "2024-06-18T07:13:08",
                "email": "hsp003636@gmail.com",
                "uploadChannel": null
            },
            {
                "eventId": 17,
                "saas": "googleDrive",
                "eventType": "uploaded",
                "fileName": "123123123123123123fsdfgdsfg.png",
                "hash256": "139e1cfe2293dc36ecf6d49bfea7b5f046aa073edd40485a892140973e5ffc91",
                "saasFileId": "F07EMFUPV5Z",
                "eventTs": "2024-07-30T05:23:37",
                "email": "hsp003636@gmail.com",
                "uploadChannel": "SAMSUNG/slack/psh_slacktest/소셜/hsp003636"
            },
            {
                "eventId": 18,
                "saas": "googleDrive",
                "eventType": "uploaded",
                "fileName": "다운로드.png",
                "hash256": "dd3453005c8846cc80540c609690266e42b9076a6bde174b6614b69a5776250a",
                "saasFileId": "F07FBFRET2L",
                "eventTs": "2024-07-30T09:29:26",
                "email": "hsp003636@gmail.com",
                "uploadChannel": "SAMSUNG/slack/psh_slacktest/소셜/hsp003636"
            }
        ]
    }
}

const elements = computed(() => {
  const slackData = data.data.slack.sort((a, b) => new Date(a.eventTs) - new Date(b.eventTs));
  const googleDriveData = data.data.googleDrive.sort((a, b) => new Date(a.eventTs) - new Date(b.eventTs));
  const nodes = [
    {
      id: 'slack',
      type: 'customSlack',
      data: { label: 'Slack' },
      position: { x: 0, y: 0 },
    },
    {
      id: 'googleDrive',
      type: 'customSlack',
      data: { label: 'GoogleDrive' },
      position: { x: 0, y: 400 },
    }
  ]
  const edges = []

  slackData.forEach((item, index) => {
    const nodeId = `file-${item.eventId}`
    nodes.push({
      id: nodeId,
      data: { 
        label: `활동 종류 : ${item.eventType}<br>\
                SaaS : ${item.saas}<br>\
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
      const prevNodeId = `file-${slackData[index - 1].eventId}`
      edges.push({
        id: `e-${prevNodeId}-${nodeId}`,
        source: prevNodeId,
        target: nodeId,
        animated: true,
        style: { stroke: '#4A154B',
                textColor: '#FFF',
        }
      })
    }
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
      console.log(googleDriveData[index - 1].eventId);
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