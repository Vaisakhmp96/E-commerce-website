import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store/index'
import productData from './components/productData.vue'
import cartData from './components/cartData.vue'
import signupData from './components/signupData.vue'
import loginData from './components/loginData.vue'
import VueResource from 'vue-resource'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const routes = [
  { name: 'Home', path: '/productData', component: productData},
  { path: '/cartData', component: cartData },
  { path: '/signupData', component: signupData},
  {name:"Login", path: '/', component: loginData}
]// Register routes
const router = new VueRouter({
  routes
})
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter) // Define routes
Vue.filter('snippet', function(value){
  return value.slice(0,100) + '...';
})
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})