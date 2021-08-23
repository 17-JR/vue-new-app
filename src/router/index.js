import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/')
  },
  {
    // path: '/layout',
    path: '/',
    name: 'Layout',
    component: () => import('@/views/layout/'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/')
      },
      {
        path: '/qa',
        name: 'Qa',
        component: () => import('@/views/qa/')
      },
      {
        path: '/my',
        name: 'My',
        component: () => import('@/views/my/')
      },
      {
        path: '/video',
        name: 'Video',
        component: () => import('@/views/video/')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
