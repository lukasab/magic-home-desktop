import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'devices',
            component: require('@/screens/Devices').default
        },
        {
            path: '/settings',
            name: 'settings',
            component: require('@/screens/Settings').default
        },
        {
          path: '/color-picker',
          name: 'color-picker',
          component: require('@/screens/ColorPicker').default
        },
        {
          path: '/keybind-picker',
          name: 'keybind-picker',
          component: require('@/screens/KeybindPicker').default
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
