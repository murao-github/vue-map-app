import Vue from 'vue'
import VueRouter from 'vue-router'
import GoogleMap from './components/GoogleMap'
import AboutPage from './components/AboutPage'
import NotFound from './components/NotFound'

import MapSidebar from './components/sidebar/MapSidebar'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        mainContents: GoogleMap,
        sidebar: MapSidebar
      },
      name: 'map'
    },
    {
      path: '/about',
      component: AboutPage,
      name: 'about'
    },
    {
      path: '/*',
      component: NotFound
    }
  ]
})