import Vue from 'vue'
import Vuex from 'vuex'
import loading from './modules/loading'
import recom from './modules/recom'
import toplist from './modules/toplist'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loading,
    recom,
    toplist
  }
})
