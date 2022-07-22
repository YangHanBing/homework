import Vue from 'vue'
import VueRouter from 'vue-router'
import buttton from '@/views/button'
import table from '@/views/table'
import advert from '@/views/table/advert'

Vue.use(VueRouter)

const routes = [{
    path: '/button',
    name: 'button',
    component: buttton
  },
  {
    path: '/table',
    name: 'table',
    component: table
  },
  {
    path: '/advert',
    name: 'advert',
    component: advert
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('@/views/form')
  },
  {
    path: '/formview',
    name: 'formview',
    component: () => import('@/views/form/formview')
  }
]

const router = new VueRouter({
  routes
})

export default router
