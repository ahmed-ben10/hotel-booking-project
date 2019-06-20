import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Meta from 'vue-meta';
import store from './store/store.js';
Vue.config.productionTip = false

 Vue.use(Meta);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
