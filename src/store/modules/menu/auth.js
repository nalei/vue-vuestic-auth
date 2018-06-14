/**
 * Created by yarik on 18.7.17.
 */
import lazyLoading from './lazyLoading'

export default {
  name: 'auth',
  meta: {
    expanded: false,
    title: 'menu.auth',
    iconClass: 'vuestic-icon vuestic-icon-auth'
  },
  children: [
    {
      name: 'Login',
      path: '/auth/login',
      component: lazyLoading('auth/login/Login'),
      meta: {
        default: false,
        title: 'menu.login',
        newWindow: true
      }
    },
    {
      name: 'Choose',
      path: '/auth/choose',
      component: lazyLoading('auth/signup/Choose'),
      meta: {
        default: false,
        title: 'Choose',
        newWindow: true
      }
    },
    {
      name: 'Signup',
      path: '/auth/signup',
      component: lazyLoading('auth/signup/Signup'),
      meta: {
        default: false,
        title: 'menu.signUp',
        newWindow: true
      }
    },
    {
      name: 'Success',
      path: '/auth/success',
      component: lazyLoading('auth/signup/Success'),
      meta: {
        default: false,
        title: 'Success',
        newWindow: true
      }
    }
  ]
}
