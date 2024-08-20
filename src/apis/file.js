import router from '@/router/index.js';
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  withCredentials: true
})

let totalFileInfoApi = async () => {
  try {
    const response = await api.get('/api/v1/files/board');
    if(response.data.status == 'error') {
      router.push('/login');
      return;
    }
    if(response.status == '200') {
      console.log(response.data);
      return response.data;
    }
  } catch (err) {
    console.error('Error:', err);
    throw err;  
  }
};

let fileScanApi = async () => {
  try {
    // const response = await api.get('/api/v1/files/scan');
    // if(response.data.status == 'error') {
    //   router.push('/login');
    //   return;
    // }
    // if(response.status == '200') {
    //   console.log('dlpscan', response.data);
    //   return response.data;
    // }
    const response = {
      "status": "success",
      "data": {
          "total": 5,
          "dlpTotal": 0,
          "malwareTotal": 5,
          "files": [
              {
                  "id": 1,
                  "name": "[KISIA] S-개발자 프로젝트 보고서 - 선민수(6월 3주차).docx",
                  "size": 347336,
                  "type": "docx",
                  "saas": "GoogleDrive",
                  "user": "minsu",
                  "path": "SAMSUNG/GoogleDrive/테스트 2 드라이브/815bfc300920af61b5b294154b091a47d4236a02f44028c6db96fd590e618eef/[KISIA] S-개발자 프로젝트 보고서 - 선민수(6월 3주차).docx",
                  "date": "2024-08-13T07:09:41",
                  "vtReport": null,
                  "fileStatus": {
                      "gscanStatus": 1,
                      "dlpStatus": -1,
                      "vtStatus": -1
                  },
                  "gscan": {
                      "step1": {
                          "correct": true,
                          "mimeType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                          "signature": "docx",
                          "extension": "docx"
                      },
                      "step2": "null"
                  }
              },
              {
                  "id": 2,
                  "name": "구드연동4.png",
                  "size": 111981,
                  "type": "png",
                  "saas": "GoogleDrive",
                  "user": "mandeuk",
                  "path": "SAMSUNG/GoogleDrive/테스트 2 드라이브/fd9e19620aabe658a62e1a1e6070757cc24b2b9e18e33c9a9b58b1cc12292e4f/구드연동4.png",
                  "date": "2024-08-19T02:15:46",
                  "vtReport": null,
                  "fileStatus": {
                      "gscanStatus": 1,
                      "dlpStatus": -1,
                      "vtStatus": -1
                  },
                  "gscan": {
                      "step1": {
                          "correct": true,
                          "mimeType": "image/png",
                          "signature": "unknown",
                          "extension": "png"
                      },
                      "step2": "null"
                  }
              },
              {
                  "id": 3,
                  "name": "[KISIA] S-개발자 프로젝트 보고서 - 박서현.docx",
                  "size": 406015,
                  "type": "docx",
                  "saas": "GoogleDrive",
                  "user": "박서현",
                  "path": "SAMSUNG/GoogleDrive/테스트입니다/b972ad0553808be387cbda100d12d9b4a121da4f146784b26a58b194194200a0/[KISIA] S-개발자 프로젝트 보고서 - 박서현.docx",
                  "date": "2024-08-12T07:06:40",
                  "vtReport": null,
                  "fileStatus": {
                      "gscanStatus": 1,
                      "dlpStatus": -1,
                      "vtStatus": -1
                  },
                  "gscan": {
                      "step1": {
                          "correct": true,
                          "mimeType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                          "signature": "docx",
                          "extension": "docx"
                      },
                      "step2": "null"
                  }
              },
              {
                  "id": 4,
                  "name": "python-3.12.4-amd64.exe",
                  "size": 26772456,
                  "type": "exe",
                  "saas": "GoogleDrive",
                  "user": "mandeuk",
                  "path": "SAMSUNG/GoogleDrive/테스트 2 드라이브/da5809df5cb05200b3a528a186f39b7d6186376ce051b0a393f1ddf67c995258/python-3.12.4-amd64.exe",
                  "date": "2024-08-19T02:16:33",
                  "vtReport": {
                      "type": "exe",
                      "sha256": "da5809df5cb05200b3a528a186f39b7d6186376ce051b0a393f1ddf67c995258",
                      "v3": "undetected",
                      "alyac": "undetected",
                      "kaspersky": "undetected",
                      "falcon": "undetected",
                      "avast": "undetected",
                      "sentinelone": "undetected",
                      "detectEngine": 0,
                      "completeEngine": 70,
                      "score": 0,
                      "threatLabel": "none",
                      "reportUrl": "https://www.virustotal.com/gui/file/da5809df5cb05200b3a528a186f39b7d6186376ce051b0a393f1ddf67c995258"
                  },
                  "fileStatus": {
                      "gscanStatus": 1,
                      "dlpStatus": -1,
                      "vtStatus": 1
                  },
                  "gscan": {
                      "step1": {
                          "correct": false,
                          "mimeType": "application/x-msdownload",
                          "signature": "exe",
                          "extension": "exe"
                      },
                      "step2": "null"
                  }
              },
              {
                  "id": 5,
                  "name": "google_drive_func.zip",
                  "size": 53028,
                  "type": "zip",
                  "saas": "GoogleDrive",
                  "user": "박서현",
                  "path": "SAMSUNG/GoogleDrive/테스트입니다/테스트 하위폴더/790d5050628a25adb94f7a288dcb9c7e029dce9e15e283226faeb0e218a38e9c/google_drive_func.zip",
                  "date": "2024-08-13T16:24:24",
                  "vtReport": null,
                  "fileStatus": {
                      "gscanStatus": -1,
                      "dlpStatus": -1,
                      "vtStatus": -1
                  },
                  "gscan": {
                      "step1": {
                          "correct": true,
                          "mimeType": "application/x-zip-compressed",
                          "signature": "zip",
                          "extension": "zip"
                      },
                      "step2": "null"
                  }
              },
              {
                "id": 24,
                "name": "winmine.exe",
                "size": 119808,
                "type": "exe",
                "saas": "slack",
                "user": "HaHayy",
                "path": "SAMSUNG/slack/psh_slacktest/slack-전체/HaHayy",
                "date": "2024-08-16T08:16:15",
                "vtReport": {
                    "type": "exe",
                    "sha256": "d1a612a1791614b628a5c99f03b60ff1b979b8d1f088e99228893cb000c5daf4",
                    "v3": "undetected",
                    "alyac": "undetected",
                    "kaspersky": "undetected",
                    "falcon": "undetected",
                    "avast": "undetected",
                    "sentinelone": "unsupported",
                    "detectEngine": 5,
                    "completeEngine": 72,
                    "score": 6,
                    "threatLabel": "trojan.",
                    "reportUrl": "https://www.virustotal.com/gui/file/d1a612a1791614b628a5c99f03b60ff1b979b8d1f088e99228893cb000c5daf4"
                },
                "fileStatus": {
                    "gscanStatus": 1,
                    "dlpStatus": -1,
                    "vtStatus": 1
                },
                "gscan": {
                    "step1": {
                        "correct": true,
                        "mimeType": "application/vnd.microsoft.portable-executable",
                        "signature": "exe",
                        "extension": "exe"
                    },
                    "step2": "null"
                }
            },
          ]
      }
  };
  return response;
  } catch (err) {
    console.error('Error:', err);
    throw err;  
  }
};

let fileVtUploadApi = async (data) => {
  try {
    const response = await api.post('/api/v1/vt/upload', data);
    if(response.data.status == 'error') {
      // router.push('/login');
      return;
    }
    if(response.status == '200') {
      console.log(response.data);
      return response.data;
    }
  } catch (err) {
    console.error('Error:', err);
    throw err;  
  }
};

let historyStatisticsApi = async () => {
  try {
    // const response = await api.get('/api/v1/files/history/statistics', );
    // if(response.data.status == 'error') {
    //   // router.push('/login');
    //   return;
    // }
    // if(response.status == '200') {
    //   console.log(response.data);
    //   return response.data;
    // }
    const response = {
      "status": "success",
      "data": {
          "totalUpload": 31,
          "totalDeleted": 0,
          "totalChanged": 0,
          "totalMoved": 0,
          "fileHistoryStatistics": [
            {
              "date": "2024-07-22",
              "uploadCount": 7,
              "deletedCount": 3,
              "modifyCount": 12,
              "movedCount": 18
            },
            {
              "date": "2024-07-23",
              "uploadCount": 15,
              "deletedCount": 9,
              "modifyCount": 4,
              "movedCount": 11
            },
            {
              "date": "2024-07-24",
              "uploadCount": 2,
              "deletedCount": 19,
              "modifyCount": 8,
              "movedCount": 5
            },
            {
              "date": "2024-07-25",
              "uploadCount": 13,
              "deletedCount": 6,
              "modifyCount": 17,
              "movedCount": 1
            },
            {
              "date": "2024-07-26",
              "uploadCount": 0,
              "deletedCount": 14,
              "modifyCount": 20,
              "movedCount": 10
            },
            {
              "date": "2024-07-27",
              "uploadCount": 18,
              "deletedCount": 11,
              "modifyCount": 3,
              "movedCount": 16
            },
            {
              "date": "2024-07-28",
              "uploadCount": 9,
              "deletedCount": 5,
              "modifyCount": 15,
              "movedCount": 7
            },
            {
              "date": "2024-07-29",
              "uploadCount": 4,
              "deletedCount": 17,
              "modifyCount": 1,
              "movedCount": 13
            },
            {
              "date": "2024-07-30",
              "uploadCount": 16,
              "deletedCount": 8,
              "modifyCount": 10,
              "movedCount": 2
            },
            {
              "date": "2024-07-31",
              "uploadCount": 11,
              "deletedCount": 0,
              "modifyCount": 19,
              "movedCount": 6
            },
            {
              "date": "2024-08-01",
              "uploadCount": 5,
              "deletedCount": 12,
              "modifyCount": 7,
              "movedCount": 14
            },
            {
              "date": "2024-08-02",
              "uploadCount": 20,
              "deletedCount": 3,
              "modifyCount": 9,
              "movedCount": 18
            },
            {
              "date": "2024-08-03",
              "uploadCount": 8,
              "deletedCount": 15,
              "modifyCount": 2,
              "movedCount": 10
            },
            {
              "date": "2024-08-04",
              "uploadCount": 1,
              "deletedCount": 7,
              "modifyCount": 13,
              "movedCount": 4
            },
            {
              "date": "2024-08-05",
              "uploadCount": 14,
              "deletedCount": 10,
              "modifyCount": 6,
              "movedCount": 19
            },
            {
              "date": "2024-08-06",
              "uploadCount": 3,
              "deletedCount": 18,
              "modifyCount": 11,
              "movedCount": 8
            },
            {
              "date": "2024-08-07",
              "uploadCount": 17,
              "deletedCount": 2,
              "modifyCount": 5,
              "movedCount": 15
            },
            {
              "date": "2024-08-08",
              "uploadCount": 10,
              "deletedCount": 13,
              "modifyCount": 16,
              "movedCount": 0
            },
            {
              "date": "2024-08-09",
              "uploadCount": 6,
              "deletedCount": 1,
              "modifyCount": 18,
              "movedCount": 12
            },
            {
              "date": "2024-08-10",
              "uploadCount": 19,
              "deletedCount": 4,
              "modifyCount": 14,
              "movedCount": 7
            },
            {
              "date": "2024-08-11",
              "uploadCount": 12,
              "deletedCount": 16,
              "modifyCount": 0,
              "movedCount": 9
            },
            {
              "date": "2024-08-12",
              "uploadCount": 7,
              "deletedCount": 20,
              "modifyCount": 3,
              "movedCount": 17
            },
            {
              "date": "2024-08-13",
              "uploadCount": 2,
              "deletedCount": 9,
              "modifyCount": 15,
              "movedCount": 5
            },
            {
              "date": "2024-08-14",
              "uploadCount": 15,
              "deletedCount": 5,
              "modifyCount": 8,
              "movedCount": 13
            },
            {
              "date": "2024-08-15",
              "uploadCount": 8,
              "deletedCount": 11,
              "modifyCount": 1,
              "movedCount": 20
            },
            {
              "date": "2024-08-16",
              "uploadCount": 13,
              "deletedCount": 7,
              "modifyCount": 19,
              "movedCount": 3
            },
            {
              "date": "2024-08-17",
              "uploadCount": 1,
              "deletedCount": 14,
              "modifyCount": 10,
              "movedCount": 6
            },
            {
              "date": "2024-08-18",
              "uploadCount": 18,
              "deletedCount": 0,
              "modifyCount": 12,
              "movedCount": 16
            },
            {
              "date": "2024-08-19",
              "uploadCount": 4,
              "deletedCount": 19,
              "modifyCount": 7,
              "movedCount": 11
            },
            {
              "date": "2024-08-20",
              "uploadCount": 16,
              "deletedCount": 8,
              "modifyCount": 2,
              "movedCount": 14
            }
          ]
      }
  };
    return response;
  } catch (err) {
    console.error('Error:', err);
    throw err;  
  }
};

let historyDetailsApi = async () => {
  try {
    // const response = await api.get('/api/v1/files/history');
    // if(response.data.status == 'error') {
    //   // router.push('/login');
    //   return;
    // }
    // if(response.status == '200') {
    //   console.log(response.data);
    //   return response.data;
    // }
    const response = {
      "status": "success",
      "data": [
          {
              "totalEvent": 5,
              "fileHistoryDto": [
                  {
                      "eventId": 12,
                      "saas": "slack",
                      "eventType": "file_upload",
                      "fileName": "cve-2018-0798.pdf",
                      "saasFileId": "F078MT457SQ",
                      "uploadTs": "2024-06-18T05:30:38",
                      "eventTs": "2024-06-18T05:30:38",
                      "email": "hsp003636@gmail.com",
                      "uploadChannel": null
                  },
                  {
                      "eventId": 9,
                      "saas": "slack",
                      "eventType": "file_upload",
                      "fileName": "DLL 다운로드.pdf",
                      "saasFileId": "F078GG9D7UM",
                      "uploadTs": "2024-06-18T05:33:11",
                      "eventTs": "2024-06-18T05:33:11",
                      "email": "hsp003636@gmail.com",
                      "uploadChannel": null
                  },
                  {
                      "eventId": 8,
                      "saas": "slack",
                      "eventType": "file_upload",
                      "fileName": "requirements.txt",
                      "saasFileId": "F078MV1L5HS",
                      "uploadTs": "2024-06-18T05:51:37",
                      "eventTs": "2024-06-18T05:51:37",
                      "email": "hsp003636@gmail.com",
                      "uploadChannel": null
                  },
                  {
                      "eventId": 11,
                      "saas": "slack",
                      "eventType": "file_upload",
                      "fileName": "Injector.pdf",
                      "saasFileId": "F078KQN3X26",
                      "uploadTs": "2024-06-18T07:13:08",
                      "eventTs": "2024-06-18T07:13:08",
                      "email": "hsp003636@gmail.com",
                      "uploadChannel": null
                  },
              ]
          }
      ]
  };
    return response;
  } catch (err) {
    console.error('Error:', err);
    throw err;  
  }
};

let historyVisualizatuonApi = async (data) => {
  try {
    // const response = await api.post('/api/v1/files/history/visualize', data);
    // if(response.data.status == 'error') {
    //   // router.push('/login');
    //   return;
    // }
    // if(response.status == '200') {
    //   console.log(response.data);
    //   return response.data;
    // }
    const response = {
      "status": "success",
      "data": {
          "originNode": 23,
          "slack": [
              {
                  "eventId": 22,
                  "saas": "slack",
                  "eventType": "file_upload",
                  "fileName": "구름망WBS_v0.1.xlsx",
                  "hash256": "25cacfa6bd23e307f38af0d5b6ca151a2b3da84ef1dc9af25edcce27288180e1",
                  "saasFileId": "F07H0CMC4R4",
                  "eventTs": "2024-08-16T08:12:08",
                  "email": "lee39095296@gmail.com",
                  "uploadChannel": "SAMSUNG/slack/psh_slacktest/개발/yubin",
                  "similarity": 0.99
              },
              {
                  "eventId": 23,
                  "saas": "slack",
                  "eventType": "file_upload",
                  "fileName": "구름망WBS_v0.1 (1).xlsx",
                  "hash256": "eb8cf80340b3a697408850818de1dba95365c7af6acf6e4a342d006a8d25e617",
                  "saasFileId": "F07H6U91675",
                  "eventTs": "2024-08-16T08:12:18",
                  "email": "lee39095296@gmail.com",
                  "uploadChannel": "SAMSUNG/slack/psh_slacktest/개발/yubin",
                  "similarity": 1.0
              },
              {
                  "eventId": 26,
                  "saas": "slack",
                  "eventType": "file_upload",
                  "fileName": "구름망WBS_v0.1 (2).xlsx",
                  "hash256": "6bb6f1610b254068180bc5d296179e6d34acb8c5792e4f35edd62346104a9f18",
                  "saasFileId": "F07H71VQKGA",
                  "eventTs": "2024-08-16T08:12:24",
                  "email": "lee39095296@gmail.com",
                  "uploadChannel": "SAMSUNG/slack/psh_slacktest/개발/yubin",
                  "similarity": 0.94
              }
          ],
          "googleDrive": [
            {
                "eventId": 25,
                "saas": "slack",
                "eventType": "file_upload",
                "fileName": "headache.exe.bak",
                "hash256": "e7d05f21609043ee7f28c73ff848c15f97b337b129a513f4b20f0dcdd24e22bb",
                "saasFileId": "F07H6UMTBM1",
                "eventTs": "2024-08-16T08:15:30",
                "email": "coex0113@gmail.com",
                "uploadChannel": "SAMSUNG/slack/psh_slacktest/소셜/HaHayy",
                "similarity": 1.0
            }
        ],
          "edges": []
      }
  };
    return response;
  } catch (err) {
    console.error('Error:', err);
    throw err;  
  }
};

export { totalFileInfoApi, fileScanApi, fileVtUploadApi, historyStatisticsApi, historyDetailsApi, historyVisualizatuonApi };