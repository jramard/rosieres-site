import Vue from 'vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/fr'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/reset.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'swiper/css/swiper.min.css';
import 'flag-icon-css/css/flag-icon.css';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(ElementUI, { locale });

new Vue({
  render: h => h(App),
}).$mount('#app');
