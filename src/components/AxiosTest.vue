<template>
  <div>
    <h1>Posts</h1>
    <button @click="fetchPosts">Fetch Posts</button>
    <div v-if="loading">Loading...</div>
    <ul v-else-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
    <div v-else-if="error">Error: {{ error }}</div>
  </div>

  <div>
    <h1>내부 axios 테스트</h1>
    <button @click="internalFetch">Fetch Posts</button>
  <div>{{ posts }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

// axios 테스트
const posts = ref([])
const loading = ref(false)
const error = ref(null)

const fetchPosts = async () => {
  loading.value = true
  error.value = null
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    posts.value = response.data.slice(0, 5)  // 처음 5개의 포스트만 가져옵니다
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}


const internalFetch = async () => {
  loading.value = true
  error.value = null
  try {
    const response = await axios.post('https://a107-211-212-221-147.ngrok-free.app/api/v1/file/slack/total')
    posts.value = response.data
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}



</script>

<style lang="scss" scoped>

</style>