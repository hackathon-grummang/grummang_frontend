import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL // Replace with your API base URL
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api