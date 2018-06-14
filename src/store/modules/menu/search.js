import lazyLoading from './lazyLoading'

export default {
  name: 'Search',
  path: '/search',
  props: (route) => ({
    type: route.query.type,
    location: route.query.location
  }),
  component: lazyLoading('search/Search'),
  meta: {
    default: false,
    title: 'Search', // TASK: добавить перевод
    iconClass: 'vuestic-icon vuestic-icon-dashboard'
  }
}
