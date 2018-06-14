import lazyLoading from './lazyLoading'

export default {
  name: 'Home',
  path: '/',
  component: lazyLoading('landing/Home'),
  meta: {
    default: true,
    title: 'menu.landing'
  }
}
