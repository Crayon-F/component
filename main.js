import Vue from 'vue'
import App from './App.vue'
import VueLazyload from './v-lazy/v-lazy/index'
import loadingImg from './images/loading.gif'
import errorImg from './images/error.jpeg'
Vue.use(VueLazyload)
// with options
Vue.use(VueLazyload, {
  preLoad: 1,
  error: errorImg,
  loading: loadingImg,
})
new Vue({
  el:'#app',
  render:h=>h(App)
})