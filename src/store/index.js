import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import recom from './modules/recom'
import toplist from './modules/toplist'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    recom,
    toplist
  }
})
