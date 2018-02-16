// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    // projectid is set to default by this error message. It will be overwritten
    // by the TaskContainer component when the router view loads it.s
    projectid: 'Error: You have to specify a projectid in the url',
    tasks: []
  },
  mutations: {
    // setProjectID modifies the state to set the new projectid, this method
    // is called by the TaskContainer component when it's monted
    setProjectID (state, id) {
      state.projectid = id
    }
  }
})

/* eslint-disable no-new */
// new Vue app, specify the router to add the custom routes. The store, to add
// Vuex/Redux architecture and the root component 'App'
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
