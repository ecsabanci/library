import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue';
import Store from '../views/Store.vue';
import Operations from '../views/Operations.vue';
import BookAdding from '../views/BookAdding.vue';
import UserOperations from '../views/UserOperations.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/store',
    name: 'Store',
    component: Store
  },
  {
    path: '/operations',
    name: 'Operations',
    component: Operations,
  },
  {
    path: '/bookadding',
    name: 'BookAdding',
    component: BookAdding
  },
  {
    path: '/userOperations/:id',
    name: 'UserOperations',
    component: UserOperations,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
