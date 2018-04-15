import axios from 'axios'
const state = {
  topList: []
}

const mutations = {
  getTopList (state, payload) {
    console.log(payload)
    state.topList = payload.res.data.topList
  }
}

const actions = {
  getTopListData ({
    commit
  }) {
    axios.get('v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1')
      .then(response => {
        commit({
          type: 'getTopList',
          res: response.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default {
  state,
  mutations,
  actions
}
