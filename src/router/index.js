import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'KISIA 해커톤',
    component: () => import('../views/kisiaView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
