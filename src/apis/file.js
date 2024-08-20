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
          "total": 31,
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
                  "id": 6,
                  "name": "[KISIA] S-개발자 프로젝트 보고서 - 선민수(6월 2주차).docx",
                  "size": 314110,
                  "type": "docx",
                  "saas": "GoogleDrive",
                  "user": "minsu",
                  "path": "SAMSUNG/GoogleDrive/테스트 2 드라이브/90c181e0388191173dbff34046ddec3386f875f2012c208070afff1b60e675f7/[KISIA] S-개발자 프로젝트 보고서 - 선민수(6월 2주차).docx",
                  "date": "2024-08-13T07:09:39",
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
                  "id": 7,
                  "name": "1차-ppt.pptx",
                  "size": 54688844,
                  "type": "pptx",
                  "saas": "GoogleDrive",
                  "user": "박서현",
                  "path": "SAMSUNG/GoogleDrive/테스트 2 드라이브/55c1d7c5d670e5dac1032fa83ad530d5579d134157077358403d71cab1280723/1차-ppt.pptx",
                  "date": "2024-08-13T02:52:42",
                  "vtReport": {
                      "type": "pptx",
                      "sha256": "55c1d7c5d670e5dac1032fa83ad530d5579d134157077358403d71cab1280723",
                      "v3": "undetected",
                      "alyac": "unsupported",
                      "kaspersky": "undetected",
                      "falcon": "undetected",
                      "avast": "undetected",
                      "sentinelone": "undetected",
                      "detectEngine": 0,
                      "completeEngine": 68,
                      "score": 0,
                      "threatLabel": "none",
                      "reportUrl": "https://www.virustotal.com/gui/file/55c1d7c5d670e5dac1032fa83ad530d5579d134157077358403d71cab1280723"
                  },
                  "fileStatus": {
                      "gscanStatus": 1,
                      "dlpStatus": -1,
                      "vtStatus": 1
                  },
                  "gscan": {
                      "step1": {
                          "correct": true,
                          "mimeType": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                          "signature": "pptx",
                          "extension": "pptx"
                      },
                      "step2": "null"
                  }
              },
              {
                  "id": 8,
                  "name": "requirements.txt",
                  "size": 265,
                  "type": "cpp",
                  "saas": "slack",
                  "user": "hsp003636",
                  "path": null,
                  "date": "2024-06-18T05:51:37",
                  "vtReport": {
                      "type": "txt",
                      "sha256": "886b15487fa6ae32484b1bb291abb6ac8ad78d5c09ad686651676215719f598b",
                      "v3": "undetected",
                      "alyac": "undetected",
                      "kaspersky": "undetected",
                      "falcon": "undetected",
                      "avast": "undetected",
                      "sentinelone": "unsupported",
                      "detectEngine": 0,
                      "completeEngine": 63,
                      "score": 0,
                      "threatLabel": "none",
                      "reportUrl": "https://www.virustotal.com/gui/file/886b15487fa6ae32484b1bb291abb6ac8ad78d5c09ad686651676215719f598b"
                  },
                  "fileStatus": {
                      "gscanStatus": -1,
                      "dlpStatus": -1,
                      "vtStatus": 1
                  },
                  "gscan": {
                      "step1": {
                          "correct": true,
                          "mimeType": "text/plain",
                          "signature": "unknown",
                          "extension": "txt"
                      },
                      "step2": "null"
                  }
              },
              {
                  "id": 9,
                  "name": "DLL 다운로드.pdf",
                  "size": 338027,
                  "type": "pdf",
                  "saas": "slack",
                  "user": "hsp003636",
                  "path": null,
                  "date": "2024-06-18T05:33:11",
                  "vtReport": {
                      "type": "pdf",
                      "sha256": "a9d475223d9893fb7cafa400517d0caae7b9f4e46fc4ba2075bc4be870b4b9a6",
                      "v3": "undetected",
                      "alyac": "undetected",
                      "kaspersky": "undetected",
                      "falcon": "undetected",
                      "avast": "undetected",
                      "sentinelone": "undetected",
                      "detectEngine": 0,
                      "completeEngine": 66,
                      "score": 0,
                      "threatLabel": "none",
                      "reportUrl": "https://www.virustotal.com/gui/file/a9d475223d9893fb7cafa400517d0caae7b9f4e46fc4ba2075bc4be870b4b9a6"
                  },
                  "fileStatus": {
                      "gscanStatus": 1,
                      "dlpStatus": -1,
                      "vtStatus": 1
                  },
                  "gscan": {
                      "step1": {
                          "correct": true,
                          "mimeType": "application/pdf",
                          "signature": "pdf",
                          "extension": "pdf"
                      },
                      "step2": "null"
                  }
              },
              {
                  "id": 10,
                  "name": "sdflasdjfsakdf.txt",
                  "size": 27,
                  "type": "text",
                  "saas": "slack",
                  "user": "hsp003636",
                  "path": null,
                  "date": "2024-06-18T07:49:18",
                  "vtReport": {
                      "type": "txt",
                      "sha256": "26bedea4b575cd26089f0c8ca31dbb6de300e6a9d8e5e10ff2f3339068ed2b3e",
                      "v3": "undetected",
                      "alyac": "undetected",
                      "kaspersky": "undetected",
                      "falcon": "undetected",
                      "avast": "undetected",
                      "sentinelone": "unsupported",
                      "detectEngine": 0,
                      "completeEngine": 65,
                      "score": 0,
                      "threatLabel": "none",
                      "reportUrl": "https://www.virustotal.com/gui/file/26bedea4b575cd26089f0c8ca31dbb6de300e6a9d8e5e10ff2f3339068ed2b3e"
                  },
                  "fileStatus": {
                      "gscanStatus": 1,
                      "dlpStatus": -1,
                      "vtStatus": 1
                  },
                  "gscan": {
                      "step1": {
                          "correct": true,
                          "mimeType": "text/plain",
                          "signature": "unknown",
                          "extension": "txt"
                      },
                      "step2": "null"
                  }
              },
              {
                  "id": 11,
                  "name": "Injector.pdf",
                  "size": 435445,
                  "type": "pdf",
                  "saas": "slack",
                  "user": "hsp003636",
                  "path": null,
                  "date": "2024-06-18T07:13:08",
                  "vtReport": {
                      "type": "pdf",
                      "sha256": "26a4ed4d2dd44f70bd41650874c4388bf5444290a3b9c094a9ae652bfbb6fbbc",
                      "v3": "undetected",
                      "alyac": "undetected",
                      "kaspersky": "undetected",
                      "falcon": "undetected",
                      "avast": "undetected",
                      "sentinelone": "undetected",
                      "detectEngine": 0,
                      "completeEngine": 66,
                      "score": 0,
                      "threatLabel": "none",
                      "reportUrl": "https://www.virustotal.com/gui/file/26a4ed4d2dd44f70bd41650874c4388bf5444290a3b9c094a9ae652bfbb6fbbc"
                  },
                  "fileStatus": {
                      "gscanStatus": 1,
                      "dlpStatus": -1,
                      "vtStatus": 1
                  },
                  "gscan": {
                      "step1": {
                          "correct": true,
                          "mimeType": "application/pdf",
                          "signature": "pdf",
                          "extension": "pdf"
                      },
                      "step2": "null"
                  }
              },
              {
                  "id": 12,
                  "name": "cve-2018-0798.pdf",
                  "size": 352543,
                  "type": "pdf",
                  "saas": "slack",
                  "user": "hsp003636",
                  "path": null,
                  "date": "2024-06-18T05:30:38",
                  "vtReport": {
                      "type": "pdf",
                      "sha256": "e92a29ec079eebecc18e38f43b18f32266140ad4669dd30c813b13ab97fc25de",
                      "v3": "undetected",
                      "alyac": "undetected",
                      "kaspersky": "undetected",
                      "falcon": "undetected",
                      "avast": "undetected",
                      "sentinelone": "undetected",
                      "detectEngine": 0,
                      "completeEngine": 67,
                      "score": 0,
                      "threatLabel": "none",
                      "reportUrl": "https://www.virustotal.com/gui/file/e92a29ec079eebecc18e38f43b18f32266140ad4669dd30c813b13ab97fc25de"
                  },
                  "fileStatus": {
                      "gscanStatus": 1,
                      "dlpStatus": -1,
                      "vtStatus": 1
                  },
                  "gscan": {
                      "step1": {
                          "correct": true,
                          "mimeType": "application/pdf",
                          "signature": "pdf",
                          "extension": "pdf"
                      },
                      "step2": "null"
                  }
              },
              {
                  "id": 13,
                  "name": "하이루.txt",
                  "size": 14,
                  "type": "text",
                  "saas": "slack",
                  "user": "여신호_9698",
                  "path": "SAMSUNG/slack/psh_slacktest/개발/여신호_9698",
                  "date": "2024-07-29T06:33:41",
                  "vtReport": {
                      "type": "txt",
                      "sha256": "dced11053f08e466f31f78b6121ef5962d40bddaaddb0c565b3a996962e89e05",
                      "v3": "undetected",
                      "alyac": "undetected",
                      "kaspersky": "undetected",
                      "falcon": "undetected",
                      "avast": "undetected",
                      "sentinelone": "unsupported",
                      "detectEngine": 0,
                      "completeEngine": 65,
                      "score": 0,
                      "threatLabel": "none",
                      "reportUrl": "https://www.virustotal.com/gui/file/dced11053f08e466f31f78b6121ef5962d40bddaaddb0c565b3a996962e89e05"
                  },
                  "fileStatus": {
                      "gscanStatus": 1,
                      "dlpStatus": -1,
                      "vtStatus": 1
                  },
                  "gscan": {
                      "step1": {
                          "correct": true,
                          "mimeType": "text/plain",
                          "signature": "unknown",
                          "extension": "txt"
                      },
                      "step2": "null"
                  }
              },
              {
                  "id": 14,
                  "name": "123123123123123123fsdfgdsfg.png",
                  "size": 60,
                  "type": "text",
                  "saas": "slack",
                  "user": "hsp003636",
                  "path": "SAMSUNG/slack/psh_slacktest/소셜/hsp003636",
                  "date": "2024-07-30T05:23:37",
                  "vtReport": null,
                  "fileStatus": {
                      "gscanStatus": 1,
                      "dlpStatus": -1,
                      "vtStatus": -1
                  },
                  "gscan": {
                      "step1": {
                          "correct": false,
                          "mimeType": "text/plain",
                          "signature": "unknown",
                          "extension": "png"
                      },
                      "step2": "null"
                  }
              },
              {
                  "id": 15,
                  "name": "test.docx",
                  "size": 13478,
                  "type": "docx",
                  "saas": "slack",
                  "user": "여신호_9698",
                  "path": "SAMSUNG/slack/psh_slacktest/개발/여신호_9698",
                  "date": "2024-07-29T07:13:50",
                  "vtReport": {
                      "type": "docx",
                      "sha256": "e1583e2ebd90387a6631ae07f8a96ede0b0402588f277be0d706a6054b46e4ca",
                      "v3": "undetected",
                      "alyac": "undetected",
                      "kaspersky": "undetected",
                      "falcon": "undetected",
                      "avast": "undetected",
                      "sentinelone": "undetected",
                      "detectEngine": 0,
                      "completeEngine": 69,
                      "score": 0,
                      "threatLabel": "none",
                      "reportUrl": "https://www.virustotal.com/gui/file/e1583e2ebd90387a6631ae07f8a96ede0b0402588f277be0d706a6054b46e4ca"
                  },
                  "fileStatus": {
                      "gscanStatus": 1,
                      "dlpStatus": -1,
                      "vtStatus": 1
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
                  "id": 16,
                  "name": "XENICS STORMX VM3.lnk",
                  "size": 1910,
                  "type": "binary",
                  "saas": "slack",
                  "user": "hsp003636",
                  "path": "SAMSUNG/slack/psh_slacktest/소셜/hsp003636",
                  "date": "2024-07-30T09:28:53",
                  "vtReport": {
                      "type": "lnk",
                      "sha256": "d941f42479d7247091583248e14534b8657caed6d7760ad4aa78f45d23550d51",
                      "v3": "undetected",
                      "alyac": "undetected",
                      "kaspersky": "undetected",
                      "falcon": "undetected",
                      "avast": "undetected",
                      "sentinelone": "undetected",
                      "detectEngine": 0,
                      "completeEngine": 66,
                      "score": 0,
                      "threatLabel": "none",
                      "reportUrl": "https://www.virustotal.com/gui/file/d941f42479d7247091583248e14534b8657caed6d7760ad4aa78f45d23550d51"
                  },
                  "fileStatus": {
                      "gscanStatus": -1,
                      "dlpStatus": -1,
                      "vtStatus": 1
                  },
                  "gscan": {
                      "step1": {
                          "correct": true,
                          "mimeType": "application/octet-stream",
                          "signature": "unknown",
                          "extension": "lnk"
                      },
                      "step2": "null"
                  }
              },
              {
                  "id": 17,
                  "name": "2._제11회_소프트웨어_개발보안_경진대회_본선_서비스개요서.hwp",
                  "size": 56832,
                  "type": "binary",
                  "saas": "slack",
                  "user": "yubin",
                  "path": "SAMSUNG/slack/psh_slacktest/개발/yubin",
                  "date": "2024-08-16T08:04:59",
                  "vtReport": null,
                  "fileStatus": {
                      "gscanStatus": -1,
                      "dlpStatus": -1,
                      "vtStatus": -1
                  },
                  "gscan": {
                      "step1": {
                          "correct": true,
                          "mimeType": "application/octet-stream",
                          "signature": "unknown",
                          "extension": "hwp"
                      },
                      "step2": "null"
                  }
              },
              {
                  "id": 18,
                  "name": "file9.php",
                  "size": 169,
                  "type": "php",
                  "saas": "slack",
                  "user": "yubin",
                  "path": "SAMSUNG/slack/psh_slacktest/개발/yubin",
                  "date": "2024-08-16T08:07:55",
                  "vtReport": {
                      "type": "php",
                      "sha256": "43221a48512962f46b114510bd934addab5ee57855bb7afe26b3c2420db6f101",
                      "v3": "undetected",
                      "alyac": "undetected",
                      "kaspersky": "undetected",
                      "falcon": "undetected",
                      "avast": "undetected",
                      "sentinelone": "unsupported",
                      "detectEngine": 0,
                      "completeEngine": 64,
                      "score": 0,
                      "threatLabel": "none",
                      "reportUrl": "https://www.virustotal.com/gui/file/43221a48512962f46b114510bd934addab5ee57855bb7afe26b3c2420db6f101"
                  },
                  "fileStatus": {
                      "gscanStatus": -1,
                      "dlpStatus": -1,
                      "vtStatus": 1
                  },
                  "gscan": {
                      "step1": {
                          "correct": false,
                          "mimeType": "text/plain",
                          "signature": "unknown",
                          "extension": "php"
                      },
                      "step2": "null"
                  }
              },
              {
                  "id": 19,
                  "name": "Hello pe.exe",
                  "size": 37376,
                  "type": "exe",
                  "saas": "slack",
                  "user": "yubin",
                  "path": "SAMSUNG/slack/psh_slacktest/개발/yubin",
                  "date": "2024-08-16T08:06:00",
                  "vtReport": null,
                  "fileStatus": {
                      "gscanStatus": 1,
                      "dlpStatus": -1,
                      "vtStatus": -1
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
              {
                  "id": 20,
                  "name": "file5.php",
                  "size": 409,
                  "type": "php",
                  "saas": "slack",
                  "user": "yubin",
                  "path": "SAMSUNG/slack/psh_slacktest/소셜/yubin",
                  "date": "2024-08-16T08:10:17",
                  "vtReport": {
                      "type": "php",
                      "sha256": "aa855424e794baacefe131bf2e4d89a21ff280f7f64334cadd125b1800cdf12b",
                      "v3": "undetected",
                      "alyac": "undetected",
                      "kaspersky": "undetected",
                      "falcon": "undetected",
                      "avast": "undetected",
                      "sentinelone": "unsupported",
                      "detectEngine": 1,
                      "completeEngine": 64,
                      "score": 1,
                      "threatLabel": "none",
                      "reportUrl": "https://www.virustotal.com/gui/file/aa855424e794baacefe131bf2e4d89a21ff280f7f64334cadd125b1800cdf12b"
                  },
                  "fileStatus": {
                      "gscanStatus": -1,
                      "dlpStatus": -1,
                      "vtStatus": 1
                  },
                  "gscan": {
                      "step1": {
                          "correct": false,
                          "mimeType": "text/plain",
                          "signature": "unknown",
                          "extension": "php"
                      },
                      "step2": "null"
                  }
              },
              {
                  "id": 21,
                  "name": "소프트웨어_개발보안_가이드(2021.12.29) (2).pdf",
                  "size": 5836421,
                  "type": "pdf",
                  "saas": "slack",
                  "user": "yubin",
                  "path": "SAMSUNG/slack/psh_slacktest/개발/yubin",
                  "date": "2024-08-16T08:07:18",
                  "vtReport": {
                      "type": "pdf",
                      "sha256": "0621bc054baba87a62220ef2e182bdf57b70e2ab1bd0aa7d69f28e905a1fba73",
                      "v3": "undetected",
                      "alyac": "undetected",
                      "kaspersky": "undetected",
                      "falcon": "unsupported",
                      "avast": "undetected",
                      "sentinelone": "undetected",
                      "detectEngine": 0,
                      "completeEngine": 59,
                      "score": 0,
                      "threatLabel": "none",
                      "reportUrl": "https://www.virustotal.com/gui/file/0621bc054baba87a62220ef2e182bdf57b70e2ab1bd0aa7d69f28e905a1fba73"
                  },
                  "fileStatus": {
                      "gscanStatus": 1,
                      "dlpStatus": -1,
                      "vtStatus": 1
                  },
                  "gscan": {
                      "step1": {
                          "correct": true,
                          "mimeType": "application/pdf",
                          "signature": "pdf",
                          "extension": "pdf"
                      },
                      "step2": "null"
                  }
              },
              {
                  "id": 22,
                  "name": "구름망WBS_v0.1.xlsx",
                  "size": 20341,
                  "type": "xlsx",
                  "saas": "slack",
                  "user": "yubin",
                  "path": "SAMSUNG/slack/psh_slacktest/개발/yubin",
                  "date": "2024-08-16T08:12:08",
                  "vtReport": null,
                  "fileStatus": {
                      "gscanStatus": 1,
                      "dlpStatus": -1,
                      "vtStatus": -1
                  },
                  "gscan": {
                      "step1": {
                          "correct": true,
                          "mimeType": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                          "signature": "xlsx",
                          "extension": "xlsx"
                      },
                      "step2": "null"
                  }
              },
              {
                  "id": 23,
                  "name": "구름망WBS_v0.1 (1).xlsx",
                  "size": 18266,
                  "type": "xlsx",
                  "saas": "slack",
                  "user": "yubin",
                  "path": "SAMSUNG/slack/psh_slacktest/개발/yubin",
                  "date": "2024-08-16T08:12:18",
                  "vtReport": null,
                  "fileStatus": {
                      "gscanStatus": 1,
                      "dlpStatus": -1,
                      "vtStatus": -1
                  },
                  "gscan": {
                      "step1": {
                          "correct": true,
                          "mimeType": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                          "signature": "xlsx",
                          "extension": "xlsx"
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
              {
                  "id": 25,
                  "name": "headache.exe.bak",
                  "size": 37376,
                  "type": "binary",
                  "saas": "slack",
                  "user": "HaHayy",
                  "path": "SAMSUNG/slack/psh_slacktest/소셜/HaHayy",
                  "date": "2024-08-16T08:15:30",
                  "vtReport": null,
                  "fileStatus": {
                      "gscanStatus": -1,
                      "dlpStatus": -1,
                      "vtStatus": -1
                  },
                  "gscan": {
                      "step1": {
                          "correct": true,
                          "mimeType": "application/octet-stream",
                          "signature": "unknown",
                          "extension": "bak"
                      },
                      "step2": "null"
                  }
              },
              {
                  "id": 26,
                  "name": "구름망WBS_v0.1 (2).xlsx",
                  "size": 18306,
                  "type": "xlsx",
                  "saas": "slack",
                  "user": "yubin",
                  "path": "SAMSUNG/slack/psh_slacktest/개발/yubin",
                  "date": "2024-08-16T08:12:24",
                  "vtReport": null,
                  "fileStatus": {
                      "gscanStatus": 1,
                      "dlpStatus": -1,
                      "vtStatus": -1
                  },
                  "gscan": {
                      "step1": {
                          "correct": true,
                          "mimeType": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                          "signature": "xlsx",
                          "extension": "xlsx"
                      },
                      "step2": "null"
                  }
              },
              {
                  "id": 27,
                  "name": "소프트웨어_보안약점_진단가이드(2021) (1).pdf",
                  "size": 32303234,
                  "type": "pdf",
                  "saas": "slack",
                  "user": "yubin",
                  "path": "SAMSUNG/slack/psh_slacktest/개발/yubin",
                  "date": "2024-08-16T08:06:59",
                  "vtReport": {
                      "type": "pdf",
                      "sha256": "75336080bd167cfd2655c5587c2c7e07c9916a70ddd4063d22178591c60ba888",
                      "v3": "undetected",
                      "alyac": "undetected",
                      "kaspersky": "undetected",
                      "falcon": "undetected",
                      "avast": "undetected",
                      "sentinelone": "undetected",
                      "detectEngine": 0,
                      "completeEngine": 63,
                      "score": 0,
                      "threatLabel": "none",
                      "reportUrl": "https://www.virustotal.com/gui/file/75336080bd167cfd2655c5587c2c7e07c9916a70ddd4063d22178591c60ba888"
                  },
                  "fileStatus": {
                      "gscanStatus": 1,
                      "dlpStatus": -1,
                      "vtStatus": 1
                  },
                  "gscan": {
                      "step1": {
                          "correct": true,
                          "mimeType": "application/pdf",
                          "signature": "pdf",
                          "extension": "pdf"
                      },
                      "step2": "null"
                  }
              },
              {
                  "id": 8,
                  "name": "requirements.txt",
                  "size": 265,
                  "type": "cpp",
                  "saas": "slack",
                  "user": "HaHayy",
                  "path": "SAMSUNG/slack/psh_slacktest/slack-전체/HaHayy",
                  "date": "2024-08-16T08:18:19",
                  "vtReport": {
                      "type": "txt",
                      "sha256": "886b15487fa6ae32484b1bb291abb6ac8ad78d5c09ad686651676215719f598b",
                      "v3": "undetected",
                      "alyac": "undetected",
                      "kaspersky": "undetected",
                      "falcon": "undetected",
                      "avast": "undetected",
                      "sentinelone": "unsupported",
                      "detectEngine": 0,
                      "completeEngine": 63,
                      "score": 0,
                      "threatLabel": "none",
                      "reportUrl": "https://www.virustotal.com/gui/file/886b15487fa6ae32484b1bb291abb6ac8ad78d5c09ad686651676215719f598b"
                  },
                  "fileStatus": {
                      "gscanStatus": -1,
                      "dlpStatus": -1,
                      "vtStatus": 1
                  },
                  "gscan": {
                      "step1": {
                          "correct": true,
                          "mimeType": "text/plain",
                          "signature": "unknown",
                          "extension": "txt"
                      },
                      "step2": "null"
                  }
              },
              {
                  "id": 28,
                  "name": "solve.cpp",
                  "size": 2516,
                  "type": "cpp",
                  "saas": "slack",
                  "user": "HaHayy",
                  "path": "SAMSUNG/slack/psh_slacktest/소셜/HaHayy",
                  "date": "2024-08-16T08:19:08",
                  "vtReport": null,
                  "fileStatus": {
                      "gscanStatus": -1,
                      "dlpStatus": -1,
                      "vtStatus": -1
                  },
                  "gscan": {
                      "step1": null,
                      "step2": "null"
                  }
              },
              {
                  "id": 29,
                  "name": "programers.py",
                  "size": 401,
                  "type": "python",
                  "saas": "slack",
                  "user": "HaHayy",
                  "path": "SAMSUNG/slack/psh_slacktest/개발/HaHayy",
                  "date": "2024-08-16T08:19:25",
                  "vtReport": null,
                  "fileStatus": {
                      "gscanStatus": -1,
                      "dlpStatus": -1,
                      "vtStatus": -1
                  },
                  "gscan": {
                      "step1": null,
                      "step2": "null"
                  }
              },
              {
                  "id": 30,
                  "name": "[[정책에 대한 일관성]]...!! .txt",
                  "size": 135,
                  "type": "text",
                  "saas": "slack",
                  "user": "hsp003636",
                  "path": "SAMSUNG/slack/psh_slacktest/소셜/hsp003636",
                  "date": "2024-08-17T04:43:13",
                  "vtReport": null,
                  "fileStatus": {
                      "gscanStatus": 1,
                      "dlpStatus": -1,
                      "vtStatus": -1
                  },
                  "gscan": {
                      "step1": null,
                      "step2": "null"
                  }
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

let fileVtUploadApi = async (data) => {
  try {
    const response = await api.post('/api/v1/vt/upload', data);
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

let historyStatisticsApi = async () => {
  try {
    const response = await api.get('/api/v1/files/history/statistics', );
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

let historyDetailsApi = async () => {
  try {
    const response = await api.get('/api/v1/files/history');
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

let historyVisualizatuonApi = async (data) => {
  try {
    const response = await api.post('/api/v1/files/history/visualize', data);
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

export { totalFileInfoApi, fileScanApi, fileVtUploadApi, historyStatisticsApi, historyDetailsApi, historyVisualizatuonApi };