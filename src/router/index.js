import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue')
    },    
    {
      path: '/nota',
      name: 'nota',
      component: () => import('../views/Nota.vue')
    },    
    {
      path: '/nota-detail',
      name: 'nota-detail',
      component: () => import('../views/NotaDetail.vue')
    },    
  ]
})

export default router
