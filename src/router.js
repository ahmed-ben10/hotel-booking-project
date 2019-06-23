import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/home.page.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Uitgelichte artiesten',
      component: Home
    },
    {
      path: '/hotel-informatie',
      name: 'hotel-informatie',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './pages/hotelInformatie/hotelInformatie.page.vue')
    },
    {
      path: '/reservering',
      name: 'kamer',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './pages/kamer/kamer.page.vue')
    },
    {
      path: '/mijn-Gereserveerde-Kamers',
      name: 'Mijn gereserveerde kamers',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './pages/mijnGereserveerdeKamers/mijnGereserveerdeKamers.page.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './pages/contact/contact.page.vue')
    }
  ]
})
