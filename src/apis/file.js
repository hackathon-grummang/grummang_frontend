import router from '@/router/index.js';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_YUBIN_API;

let totalFileInfoApi = async () => {
  try {
    // const response = await api.get('/api/v1/files/board');
    // if(response.data.status == 'error') {
    //   router.push('/login');
    //   return;
    // }
    // if(response.status == '200') {
    //   console.log(response.data);
    //   return response.data;
    // }

    const response = {
      "status": "success",
      "data": {
          "totalCount": 24,
          "totalVolume": 39593624,
          "totalDlp": 0,
          "totalMalware": 1,
          "totalType": [
              {
                  "type": "cpp",
                  "count": 3
              },
              {
                  "type": "pdf",
                  "count": 5
              },
              {
                  "type": "text",
                  "count": 4
              },
              {
                  "type": "docx",
                  "count": 1
              },
              {
                  "type": "binary",
                  "count": 3
              },
              {
                  "type": "php",
                  "count": 2
              },
              {
                  "type": "exe",
                  "count": 2
              },
              {
                  "type": "xlsx",
                  "count": 3
              },
              {
                  "type": "python",
                  "count": 1
              }
          ],
          "statistics": [
            {
              "date": "2024-08-19 22:00",
              "volume": 3,
              "count": 2
            },
            {
              "date": "2024-08-19 23:00",
              "volume": 1,
              "count": 4
            },
            {
              "date": "2024-08-20 00:00",
              "volume": 5,
              "count": 3
            },
            {
              "date": "2024-08-20 01:00",
              "volume": 2,
              "count": 1
            },
            {
              "date": "2024-08-20 02:00",
              "volume": 4,
              "count": 5
            },
            {
              "date": "2024-08-20 03:00",
              "volume": 0,
              "count": 2
            },
            {
              "date": "2024-08-20 04:00",
              "volume": 3,
              "count": 3
            },
            {
              "date": "2024-08-20 05:00",
              "volume": 1,
              "count": 0
            },
            {
              "date": "2024-08-20 06:00",
              "volume": 5,
              "count": 4
            },
            {
              "date": "2024-08-20 07:00",
              "volume": 2,
              "count": 1
            },
            {
              "date": "2024-08-20 08:00",
              "volume": 4,
              "count": 5
            },
            {
              "date": "2024-08-20 09:00",
              "volume": 3,
              "count": 2
            },
            {
              "date": "2024-08-20 10:00",
              "volume": 1,
              "count": 3
            },
            {
              "date": "2024-08-20 11:00",
              "volume": 5,
              "count": 4
            },
            {
              "date": "2024-08-20 12:00",
              "volume": 0,
              "count": 1
            },
            {
              "date": "2024-08-20 13:00",
              "volume": 4,
              "count": 5
            },
            {
              "date": "2024-08-20 14:00",
              "volume": 2,
              "count": 0
            },
            {
              "date": "2024-08-20 15:00",
              "volume": 3,
              "count": 2
            },
            {
              "date": "2024-08-20 16:00",
              "volume": 1,
              "count": 4
            },
            {
              "date": "2024-08-20 17:00",
              "volume": 5,
              "count": 3
            },
            {
              "date": "2024-08-20 18:00",
              "volume": 2,
              "count": 1
            },
            {
              "date": "2024-08-20 19:00",
              "volume": 4,
              "count": 5
            },
            {
              "date": "2024-08-20 20:00",
              "volume": 0,
              "count": 2
            },
            {
              "date": "2024-08-20 21:00",
              "volume": 3,
              "count": 3
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
    const response = await axios.post('/api/v1/vt/upload', data);
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

let historyStatisticsApi = async (data) => {
  try {
    const response = await axios.post('/api/v1/files/history/statistics', data);
    if(response.data.status == 'error') {
      // router.push('/login');
      return;
    }
    if(response.status == '200') {
    //   console.log(response.data);
      return response.data;
    }
  } catch (err) {
    console.error('Error:', err);
    throw err;  
  }
};

let historyDetailsApi = async (data) => {
  try {
    const response = await axios.post('/api/v1/files/history', data);
    if(response.data.status == 'error') {
      // router.push('/login');
      return;
    }
    if(response.status == '200') {
    //   console.log(response.data);
      return response.data;
    }
  } catch (err) {
    console.error('Error:', err);
    throw err;  
  }
};

let historyVisualizatuonApi = async (data) => {
  try {
    const response = await axios.post('/api/v1/files/history/visualize', data);
    if(response.data.status == 'error') {
      // router.push('/login');
      return;
    }
    if(response.status == '200') {
    //   console.log(response.data);
      return response.data;
    }
  } catch (err) {
    console.error('Error:', err);
    throw err;  
  }
};

export { totalFileInfoApi, fileScanApi, fileVtUploadApi, historyStatisticsApi, historyDetailsApi, historyVisualizatuonApi };