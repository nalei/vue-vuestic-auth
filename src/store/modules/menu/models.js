import lazyLoading from './lazyLoading'

export default {
  name: 'Model',
  path: '/model/:id',
  component: lazyLoading('models/Model'),
  meta: {
    default: false,
    title: 'Model',
    iconClass: 'vuestic-icon vuestic-icon-dashboard'
  }
}
