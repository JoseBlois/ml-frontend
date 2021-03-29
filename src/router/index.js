import Vue from 'vue'
import VueRouter from 'vue-router'
import itemList from '../views/itemList';
import detailPage from '../views/detailPage';
Vue.use(VueRouter)

const routes = [
  {
    path: '/items',
    name: 'itemList',
    component: itemList,
    props: route => ({ search: route.query.search })
  },
  {
    path: '/items/:id',
    name: 'detailPage',
    component: detailPage,
  }
]

const router = new VueRouter({
  routes
})

export default router
