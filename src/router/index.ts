import { createRouter, createWebHistory, RouterLink } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/auth',
      name: 'authentication',
      component: () => import('@/components/authentication/Auth.vue'),
      redirect: { name: 'signin' },
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
