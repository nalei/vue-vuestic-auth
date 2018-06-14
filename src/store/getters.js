import utils from 'services/utils'

const isAuthenticated = state => !!state.auth.user.token
const locale = state => state.i18n.locale
const authStatus = state => state.auth.user.status
const menuItems = state => state.menu.items
const sidebarOpened = state => state.app.sidebar.opened
const toggleWithoutAnimation = state => state.app.sidebar.withoutAnimation
const config = state => state.app.config
const palette = state => state.app.config.palette
const isLoading = state => state.app.isLoading
const breadcrumbs = state => {
  return (keyword) => utils.findInNestedByName(state.menu.items, keyword)
}

export {
  isAuthenticated,
  locale,
  authStatus,
  menuItems,
  toggleWithoutAnimation,
  sidebarOpened,
  config,
  palette,
  isLoading,
  breadcrumbs
}
