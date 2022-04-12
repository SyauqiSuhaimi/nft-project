import { createRouter, createWebHashHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import FAQ from '../views/FaqView.vue'
import ContactUs from '../views/ContactUsView.vue'
import ProtectView from '../views/ProtectView.vue'
import Map from '../components/Map.vue'

const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/contacUs',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQ
  },

  {
    path: '/protect',
    name: 'ProtectView',
    component: ProtectView
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    console.log(savedPosition)
    if(savedPosition){
      return savedPosition;
    }
    else if(to.hash){
      return{
        selector: to.hash,
      }
    }
    else
    {
      return{x:0, y:0};
    }
  }
})

export default router
