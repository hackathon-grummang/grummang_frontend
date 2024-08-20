import { ref } from 'vue'
import api from '../apis/login.js'

const token = ref(localStorage.getItem('token') || null)
const user = ref(null)

export const useAuth = () => {
  const login = async (email, password) => {
    const response = await api.post('/login', { email, password })
    token.value = response.data.token
    localStorage.setItem('token', token.value)
    await fetchUser()
  }

  const register = async (lastName, firstName, email, password) => {
    await api.post('/register', { lastName, firstName, email, password })
  }

  const logout = () => {
    token.value = null
    user.value = null
    localStorage.removeItem('token')
  }

  const fetchUser = async () => {
    const response = await api.get('/user')
    user.value = response.data
  }

  return {
    token,
    user,
    login,
    register,
    logout,
    fetchUser
  }
}