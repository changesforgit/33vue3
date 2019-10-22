import Vue from 'vue'
import VueRouter from 'vue-router'
import gender from '../views/gender.vue'
import hobby from '../views/hobby.vue'
import Introduction from '../views/Introduction.vue'
import total from '../views/total.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'gender',
    component: gender
  },
  {
        path: '/hobby',
        name: 'hobby',
        component: hobby
  },
  {
        path: '/Introduction',
        name: 'Introduction',
        component: Introduction
  },
  {
        path: '/total',
        name: 'total',
        component: total
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
