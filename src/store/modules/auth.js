import {fetchApi} from 'src/api/api'

const state = {
  user: {
    status: '',
    token: ''
  }
}

const mutations = {
  AUTH_REQUEST: (state) => {
    state.user.status = 'loading'
  },
  AUTH_SUCCESS: (state, token) => {
    state.user.status = 'success'
    state.user.token = token
  },
  AUTH_ERROR: (state, err) => {
    state.user.status = err
  },
  AUTH_LOGOUT: (state) => {
    state.user.status = ''
    state.user.token = ''
  }
}

const actions = {
  GET_TOKEN: ({commit, dispatch}) => {
    dispatch('GET_COOKIE', { name: 'token' })
    .then(token => {
      if (token) {
        commit('AUTH_SUCCESS', token)
      } else {
        commit('AUTH_LOGOUT')
      }
    })
  },
  AUTH_REQUEST: ({commit, dispatch}, props) => {
    commit('AUTH_REQUEST')
    return new Promise((resolve, reject) => {
      fetchApi({ method: 'get', url: 'signin', props })
      .then(resp => {
        if (resp.success) {
          const token = resp.token
          commit('AUTH_SUCCESS', token)
          dispatch('SET_COOKIE', { name: 'token', value: token })
          // axios.defaults.headers.common['Authorization'] = token
          // TASK: запрос данных пользователя
        } else {
          commit('AUTH_ERROR', 'error')
          dispatch('DELETE_COOKIE', { name: 'token' })
        }
        resolve(resp)
      })
      .catch(err => {
        commit('AUTH_ERROR', err)
        commit('setLoading', true)
        dispatch('DELETE_COOKIE', { name: 'token' })
        reject(err)
      })
    })
  },
  REGISTER_REQUEST: ({commit, dispatch}, props) => {
    commit('AUTH_REQUEST')
    commit('setLoading', true)
    return new Promise((resolve, reject) => {
      fetchApi({ method: 'get', url: 'signup', props })
      .then(resp => {
        commit('setLoading', false)
        if (resp.success) {
          const token = resp.token
          commit('AUTH_SUCCESS', token)
          dispatch('SET_COOKIE', { name: 'token', value: token })
          // axios.defaults.headers.common['Authorization'] = token
          // TASK: запрос данных пользователя
        } else {
          commit('AUTH_ERROR', 'error')
          dispatch('DELETE_COOKIE', { name: 'token' })
        }
        resolve(resp)
      })
      .catch(err => {
        commit('AUTH_ERROR', err)
        commit('setLoading', true)
        dispatch('DELETE_COOKIE', { name: 'token' })
        reject(err)
      })
    })
  },
  AUTH_LOGOUT: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      // delete axios.defaults.headers.common['Authorization']
      commit('AUTH_LOGOUT')
      dispatch('DELETE_COOKIE', { name: 'token' })
      resolve()
    })
  },

}

export default {
  state,
  mutations,
  actions
}
