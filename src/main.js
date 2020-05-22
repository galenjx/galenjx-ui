import Vue from 'vue'
import App from './App.vue'

// import JxButton from './components/button.vue'
// import JxDialog from './components/dialog.vue'
// Vue.component(JxButton.name, JxButton)
// Vue.component(JxDialog.name, JxDialog)

import Galenjx from '../packages'
Vue.use(Galenjx)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
