import Vue from 'vue';
import iView from 'view-design';
import App from './app.vue';

import 'view-design/dist/styles/iview.css'

Vue.use(iView);

new Vue({
  render: h => h(App)
}).$mount('#root');