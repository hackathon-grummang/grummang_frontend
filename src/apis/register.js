import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

let getSaasListApi = async (orgId) => {
  try {
    // const response = await axios.get('/api/v1/org-saas/' + orgId);
    // if(response.status == '200') {
    //   return response.data;
    // }
    const response = [
      {adminEmail: "sasd@123123.vv",
        alias: "fffffff",
        apiToken: "",
        id: 28,
        name: "slack",
        registerDate: "2024-08-20T13:44:51.000+00:00",
        status: 0,
        webhookUrl: "https://back.grummang.com/webhook/slack/590aa7c1-02d5-4a3f-9ae5-a5c685d18e7e"},
      {
        adminEmail: "hsp003636@gmail.com",
        alias: "asdfasdfasdf",
        apiToken: "",
        id: 88,
        name: "GoogleDrive",
        registerDate: "2024-08-20T11:14:37.000+00:00",
        status: 0
      }
    ]
      return response;
  } catch (err) {
    console.error('Error:', err);
    throw err;  
  }
};

let getWebhookApi = async (saasId) => {
  try {
    const response = await axios.get('/api/v1/org-saas/'+saasId+'/mkUrl');
    if(response.status == '200') {
      // console.log(await response.data.webhookUrl);
      return response.data.webhookUrl;
    }
  } catch (err) {
    console.error('Error:', err);
    throw err;  // 에러를 다시 throw하여 호출자가 처리할 수 있게 합니다.
  }
};

let TokenValidationApi = async (data, saasId) => {
  try {
    // const response = await axios.post('/api/v1/org-saas/slackValid', {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // });
    const response = await axios.post('/api/v1/org-saas/slackValid', data);
    if(response.status == 200) {
      console.log('검증되었습니다.' + response.data.validation);
      return response.data.validation;
    }
    else return false;
  } catch (err) {
    console.error('Error:', err);
    throw err;  // 에러를 다시 throw하여 호출자가 처리할 수 있게 합니다.
  }
}

let connectSaasApi = async (data) => {
  try {
    const response = await axios.post('/api/v1/org-saas/register', data);
    if(response.status == '200') {
      console.log('connectSaasApi : ' + response);
      return response.data;
    }
  } catch (err) {
    console.error('Error:', err);
    throw err;  // 에러를 다시 throw하여 호출자가 처리할 수 있게 합니다.
  }
}

let modifySaasApi = async (data) => {
  try {
    const response = await axios.post('/api/v1/org-saas/modify', data);
    if(response.status == '200') {
      console.log('modifySaasApi : ' + response);
      return response.data;
    }
  } catch (err) {
    console.error('Error:', err);
    throw err;  // 에러를 다시 throw하여 호출자가 처리할 수 있게 합니다.
  }
}

let unconnectSaasApi = async (id) => {
  try {
    const response = await axios.post('/api/v1/org-saas/delete', id);
    if(response.status == '200') {
      console.log('unconnectSaasApi : ' + response);
      return response.data;
    }
  } catch (err) {
    console.error('Error:', err);
    throw err;  // 에러를 다시 throw하여 호출자가 처리할 수 있게 합니다.
  }
}


export { getSaasListApi, getWebhookApi, TokenValidationApi, connectSaasApi, modifySaasApi, unconnectSaasApi };