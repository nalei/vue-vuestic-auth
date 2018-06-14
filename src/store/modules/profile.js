import axios from 'axios'
import {fetchApi} from 'src/api/api'

const state = {
  data: []
}

const mutations = {
  SAVE_SUCCESS: (state, data) => {
    state.data = data
  }
}

const actions = {
  SAVE_AVATAR: ({commit}, props) => {
    const data = props.data
    axios.post('https://api.getmodel.com/api/upload?token=' + props.token, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(resp => {
      console.log(resp)
    })
    .catch(err => {
      console.log(err)
    })
    // return new Promise((resolve, reject) => {
    //   fetchApi({ method: 'post', url: 'upload?token=' + props.token, data })
    //   .then(resp => {
    //     console.log(resp)
    //     resolve(resp)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //     reject(err)
    //   })
    // })
  },
  GET_PROFILE_DATA: () => {
  },
  SAVE_PROFILE_DATA: ({commit}, props) => {
    if (props.token) {
      const data = props.data
      console.log(data)
      return new Promise((resolve, reject) => {
        fetchApi({ method: 'post', url: 'update_profile?token=' + props.token, data })
        .then(resp => {
          console.log(resp)
          resolve(resp)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
      })
    }
  }
}

export default {
  state,
  mutations,
  actions
}
