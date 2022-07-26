import Vue from 'vue'
import VueRouter from 'vue-router'
import buttton from '@/views/button'
import table from '@/views/table'
import advert from '@/views/table/advert'

Vue.use(VueRouter)

const routes = [
  // 图表练习
  {
    path: '/',
    name: 'echaets',
    component: () => import('@/views/echarts')
  },
  // button封装
  {
    path: '/button',
    name: 'button',
    component: buttton
  },
  // table封装1
  {
    path: '/table',
    name: 'table',
    component: table
  },
  // table封装2
  {
    path: '/advert',
    name: 'advert',
    component: advert
  },
  // form表单封装
  {
    path: '/form',
    name: 'form',
    component: () => import('@/views/form')
  },
  // form表单封装2
  {
    path: '/formview',
    name: 'formview',
    component: () => import('@/views/form/formview')
  },
  // checkbox和验证码倒计时封装
  {
    path: '/form_code',
    name: 'form_code',
    component: () => import('@/views/form/form_code')
  }
]

const router = new VueRouter({
  routes
})

export default router
