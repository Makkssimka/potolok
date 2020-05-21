import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { VueHammer } from 'vue2-hammer';
import VueMeta from 'vue-meta';

Vue.config.productionTip = false;
Vue.use(VueHammer);
Vue.use(VueMeta);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
