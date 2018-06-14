import Vue from 'vue'
import Router from 'vue-router'

import menuModule from 'vuex-store/modules/menu'

Vue.use(Router)

// const lazyLoading = (name, index = false) => () => import(`components/${name}${index ? '/index' : ''}.vue`)

export default new Router({
  linkActiveClass: 'open active',
  mode: 'history',

  routes: [
    ...generateRoutesFromMenu(menuModule.state.items),
    {
      path: '*',
      redirect: { name: getDefaultRoute(menuModule.state.items).name }
    }
  ]
})

function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
    if (item.children) {
      generateRoutesFromMenu(item.children, routes)
    }
  }
  return routes
}

function getDefaultRoute (menu = []) {
  let defaultRoute

  menu.forEach((item) => {
    if (item.meta.default) {
      defaultRoute = item
    } else if (item.children) {
      let defaultChild = item.children.find((i) => i.meta.default)
      defaultRoute = defaultChild || defaultRoute
    }
  })

  return defaultRoute
}
