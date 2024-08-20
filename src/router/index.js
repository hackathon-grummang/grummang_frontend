import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'KISIA 해커톤',
    component: () => import('../views/KisiaView.vue')
  },
  {
    path: '/event',
    name: '파일 히스토리',
    component: () => import('../views/FileEvent.vue')
  },
  {
    path: '/error',
    name: '에러 페이지',
    component: () => import('../views/ErrorView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
