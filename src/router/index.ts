import { createRouter, createWebHistory, RouterLink } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashboardView,
      meta: { layout: 'DefaultLayout' },
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/Settings.vue'),
      meta: { layout: 'DefaultLayout' },
    },
    {
      path: '/auth',
      name: 'authentication',
      component: () => import('@/views/auth/AuthView.vue'),
      redirect: { name: 'signin' },
      meta: { layout: 'AuthLayout' },
      children: [
        { path: 'signin', name: 'signin', component: () => import('@/components/authentication/SignIn.vue') },
        { path: 'signup', name: 'signup', component: () => import('@/components/authentication/SignUp.vue') },
      ],
    },
    /* {
       path: '/about',
       name: 'about',
       // route level code-splitting
       // this generates a separate chunk (About.[hash].js) for this route
       // which is lazy-loaded when the route is visited.
       component: () => import('../views/AboutView.vue'),
     }, */
  ],
})

export default router
