import Vue from 'vue'
import VueRouter from 'vue-router'
import buttton from '@/views/button'
import table from '@/views/table'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
