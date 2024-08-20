import router from '@/router/index.js';
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  withCredentials: true
})

// axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

let saasScoreApi = async (saas) => {
  try {
    // const response = await axios.post('/api/v1/board/' + saas +'/files/count', data);
    // if(response.status == '200') {
    //   return response.data;
    // }
    const response = 80;
    return response;
  } catch (err) {
    console.error('Error:', err);
    throw err;  
  }
};

let fileStatisticsApi = async (saas) => {
  try {
    const response = await api.get('/api/v1/board/' + saas +'/files/count');
    console.log(response);
    if(response.status == '200') {
      return response.data;
    }
  } catch (err) {
    console.error('Error:', err);
    if(err.response.status == '401') {
      router.push('/login');
      console.log('누구냐!')
    }
    throw err;  
  }
};

let fileSizeApi = async (saas) => {
  try {
    const response = await api.get('/api/v1/board/' + saas +'/files/size');
    if(response.status == '200') {
      return response.data;
    }
  } catch (err) {
    console.error('Error:', err);
    throw err;  
  }
}

let fileRecentApi = async (saas) => {
  try {
    const response = await api.get('/api/v1/board/' + saas +'/files/recent');
    if(response.status == '200') {
      return response.data;
    }
  } catch (err) {
    console.error('Error:', err);
    throw err;  
  }
}

let usersTop5Api = async (saas, data) => {
  try {
    const response = await api.get('/api/v1/board/' + saas +'/user-ranking');
    if(response.status == '200') {
      return response.data;
    }
  } catch (err) {
    console.error('Error:', err);
    throw err;  
  }
};

export { saasScoreApi, fileStatisticsApi, fileSizeApi, fileRecentApi, usersTop5Api };