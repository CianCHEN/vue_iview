// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//import iview Start
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)
//import iview End
//import axios start 
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
//import axios end

Vue.config.productionTip = false

// loading bar start 
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next()
});

router.afterEach(route => {
    iView.LoadingBar.finish();
});
// loading bar end


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
