import axios from 'axios'
const state = {
  slider: [],
  radioList: []
}

const mutations = {
  getRecomData (state, payload) {
    state.slider = payload.res.data.slider
    state.radioList = payload.res.data.radioList
  }
}

const actions = {
  getRecomData ({
    commit
  }) {
    axios.get('musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1')
      .then(response => {
        commit({
          type: 'removeLoading'
        })
        commit({
          type: 'getRecomData',
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
