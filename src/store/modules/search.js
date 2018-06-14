import {fetchApi} from 'src/api/api'

const state = {
  results: []
}

const mutations = {
  SEARCH_SUCCESS: (state, results) => {
    state.results = results
  }
}

const actions = {
  GET_MODEL: ({commit}, id) => {
    const props = {
      id: id
    }
    return new Promise((resolve, reject) => {
      fetchApi({ method: 'get', url: 'user', props })
      .then(resp => {
        // TASK: обработать null
        commit('SEARCH_SUCCESS', resp)
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  SEARCH_REQUEST: ({commit}, props) => {
    return new Promise((resolve, reject) => {
      fetchApi({ method: 'get', url: 'search', props })
      .then(resp => {
        // TASK: обработать null
        const results = resp.results
        commit('SEARCH_SUCCESS', results)
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
