<!-- The TaskContainer component acts as a drawer to hold all the tasks   -->
<template>
<div class="taskcontainer">
  <div class='container'></div>
  <div class='task'>
    <!-- Iteration in the tasks data-property-->
    <Task v-for='task in tasks' :key="task.id" :id='task.id' :name='task.name'></Task>
  </div>
  <div class='container'></div>
</div>
</template>

<script>
import Task from './Task'
import axios from 'axios'
export default {
  name: 'TaskContainer',
  components: {
    Task
  },
  data () {
    return {
      // the data property tasks will store all the tasks
      tasks: []
    }
  },
  props: [
    // the props property projectid is passed by the vue router
    'projectid'
  ],
  methods: {
    // getTasks is the method that starts the fetching process, asks the server
    // to make a request and stores the data in the tasks data-property
    getTasks: function () {
      console.log('getting data')
      axios.get('/gettask/' + this.$store.state.projectid)
        .then(data => {
          this.tasks = data.data
        })
    }
  },
  mounted: function () {
    // when the component is mounted the state of the app is modified to store
    // the new projectid
    this.$store.commit('setProjectID', this.projectid)
    this.getTasks()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 10rem;
  display: flex;
  margin-left: 1rem;
  position: relative;
  top: 1rem
}
.nav-wrapper {
  background-color: rgb(36,43,54);
}
.logodiv {
  height: 100%;
}
i {
  background: white;
}
.container {
  flex:1;
}
.taskcontainer{
  display: flex;
}
.task {
  flex: 3;
}
</style>
