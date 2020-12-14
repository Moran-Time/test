import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import App from './App.vue';
import axios from "axios"
Vue.config.productionTip = false;

// Vue.use(Vant)
Vue.prototype.$axios = axios
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')