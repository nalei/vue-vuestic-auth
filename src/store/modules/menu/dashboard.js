import lazyLoading from './lazyLoading'
import store from 'vuex-store'

export default {
  name: 'Dashboard',
  path: '/dashboard',
  component: lazyLoading('dashboard/Dashboard'),
  beforeEnter: (to, from, next) => {
    store.dispatch('GET_TOKEN')
    .then(() => {
      if (store.getters.isAuthenticated) {
        next()
        return
      }
      next('/auth/login')
    })
  },
  meta: {
    default: false,
    title: 'menu.dashboard',
    iconClass: 'vuestic-icon vuestic-icon-dashboard'
  }
}
