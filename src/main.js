// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import Header from './components/Header';
import Home from './components/home/Home';
import Slider from './components/home/PromoSlider';
import Footer from './components/Footer';

Vue.component('app-header', Header);
Vue.component('app-home', Home);
Vue.component('app-slider', Slider);
Vue.component('app-footer', Footer);


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
