import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueCompositionAPI from '@vue/composition-api';
import hooks from '@u3u/vue-hooks';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;


require('../output.css');
require('./assets/css/style.css')


Vue.use(hooks);
Vue.use(VueCompositionAPI);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
