import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import ThreadShow from '@/pages/ThreadShow'
import NotFound from '@/pages/404'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props : true
    },
    {
      path: '*',
      name: 'Not_found',
      component: NotFound,

    }
  ],
  mode : 'history'
})
