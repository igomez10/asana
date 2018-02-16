import Vue from 'vue'
import Router from 'vue-router'
import TaskContainer from '@/components/TaskContainer'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Router)

// Router definition, only have one route, the nonexistan projectid is handled
// by the component TaskContainer. "/" is not expected by default
export default new Router({
  routes: [{
    path: '/asana/:projectid',
    name: 'TaskContainer',
    component: TaskContainer,
    props: true
  },
  {
    path: '/',
    name: 'TaskContainer',
    component: TaskContainer
  }],
  // mode history removes the !# in the address
  mode: 'history'
})
