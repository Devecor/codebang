import Vue from 'vue'
import App from './App.vue'
import CodeManager from './components/CodeManager.vue'
import BufferManager from './components/BufferManager.vue'
import BuildManager from './components/BuildManager.vue'
import LaunchManager from './components/LaunchManager.vue'
import LoginDialog from './components/LoginDialog.vue'

import I18nPlugin from './plugins/gettext.js'
Vue.use(I18nPlugin)

// Dynamic import
// import('yix-engineer/src/lib.js')
//     .then(EngineerPlugin => Vue.use(EngineerPlugin))
import EngineerPlugin from 'yix-engineer/src/lib.js'
Vue.use(EngineerPlugin)

import './plugins/element.js'

Vue.config.productionTip = false
Vue.component('cb-code-manager', CodeManager)
Vue.component('cb-buffer-manager', BufferManager)
Vue.component('cb-build-manager', BuildManager)
Vue.component('cb-lanuch-manager', LaunchManager)
Vue.component('cb-login-dialog', LoginDialog)

new Vue({
  render: h => h(App),
}).$mount('#app')
