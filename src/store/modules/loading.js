// import request from 'superagent'

const state = {
  loading: true
}

const getters = {

}

const mutations = {
  removeLoading (state, payload) {
    state.loading = false
  },
  addLoading (state, payload) {
    state.loading = true
  }
}

const actions = {
  removeLoading ({
    commit
  }) {
    commit({
      type: 'removeLoading'
    })
  },
  addLoading ({
    commit
  }) {
    commit({
      type: 'addLoading'
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
