import router from '@/router/index.js';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_YUBIN_API;

let totalFileInfoApi = async (data) => {
  try {
    const response = await axios.get('/api/v1/files/board');
    if(response.data.status == 'error') {
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

let fileScanApi = async (data) => {
  try {
    const response = await axios.post('/api/v1/files/scan', data);
    if(response.data.status == 'error') {
      return;
    }
    if(response.status == '200') {
      console.log('dlpscan', response.data);
      return response.data;
    }
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