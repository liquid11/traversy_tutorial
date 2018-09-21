import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vueResource from 'vue-resource'
import Users from './components/Users'
import test from './components/test'

Vue.config.productionTip = false

Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: '__dirname',
  routes: [
    { path: '/', component: Users },
    { path: '/test', component: test }

  ]
})
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
new Vue({
  router,
  template: `
  <div>
  <ul>
  <li><router-link to="/">Users</router-link></li>
  <li><router-link to="/test">Test</router-link></li>
</ul>
<router-view></router-view>
</div>`,
    render: h => h(App)
}).$mount('#app');
