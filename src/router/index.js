import Vue from 'vue'
import Router from 'vue-router'
import PagesView from '../views/PagesView'
import Recom from '../views/Recom'
import Toplist from '../views/Toplist'
import Search from '../views/Search'
import TopDetailView from '../views/TopDetailView'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/pages/'
  },
  {
    path: '/pages',
    component: PagesView,
    children: [{
      path: '',
      redirect: '/pages/recom'
    },
    {
      path: 'recom',
      name: 'Recom',
      component: Recom
    },
    {
      path: 'toplist',
      name: 'Toplist',
      component: Toplist
    },
    {
      path: 'search',
      name: 'Search',
      component: Search
    }
    ]
  },
  {
    path: '/topdetail/:id',
    name: 'TopDetail',
    component: TopDetailView,
    props: true
  }
  ]
})
