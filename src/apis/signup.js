import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

let gasbLoginApi = async (data) => {
  try {
    const response = await axios.post('/api/v1/auth/login', data, { withCredentials: true });
    // console.log('첫 로그인 :', response);
    // console.log(document.cookie);
    if (response.status === 200 && response.data.status === 'success') {
      console.log('정상 로그인 :', response.data);
      return response.data;
    }
    return false;
  } catch (err) {
    console.error('Error:', err);
  }
};

let gasbSignupApi = async (data) => {
  try {
    const response = await axios.post('/api/v1/auth/register', data);
    if (response.status === 200) {
      return response.data;
    } else {
      alert('회원가입에 실패했습니다.');
      return false;
    }
  } catch (err) {
    console.error('Error:', err);
    return false;
  }
}

export { gasbLoginApi, gasbSignupApi };