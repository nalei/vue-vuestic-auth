import Cookies from 'js-cookie'

const actions = {
  SET_COOKIE ({state, dispatch}, props) {
    Cookies.set(props.name, props.value)
  },
  GET_COOKIE ({state, dispatch}, props) {
    return Cookies.get(props.name)
  },
  DELETE_COOKIE ({state, dispatch}, props) {
    Cookies.remove(props.name)
  }
}

export default {
  actions
}
