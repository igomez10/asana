<!-- Task component stores the name and id of a task in the project
it also contains a button to hide the task in the current session -->
<template>
<transition name="fade">
  <div class="task collection" v-if='show'>
    <div class='taskcontainer'>
      <div class='iconcontainer' @click='show = !show'>
        <div style='flex:1'></div>
          <i class='material-icons' style='flex:3'>check</i>
        <div style='flex:1'></div>
      </div>
      <a :href='linkToTask' target="_blank" class="collection-item">{{name}}</a>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'Task',
  // the props come from the component TaskContainer
  props: [
    'id',
    'name'
  ],
  data () {
    return {
      // the property show is modified to false when the user clicks the "check" icon
      show: true
    }
  },
  computed: {
    // a computed property linkToTask stores the link to a task in app.asana.com
    linkToTask: function () {
      return 'https://app.asana.com/0/' + this.$store.state.projectid + '/' + this.id + '/f'
    }
  }
}
</script>

<style scoped>
.collection {
  margin: auto;
  margin-top: 0.5rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  flex: 3;
  border-radius: 100px
}

.collection-item {
  flex: auto;
  font-size: 1.4rem
}

.taskcontainer {
  display: flex;
  flex-direction: row;
}

.material-icons {
  top: 50%;
  margin: auto;
  width: 3rem;
  text-align: center
}

.btn {
  margin: 0px;
  height: 100%
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.iconcontainer {
  display:flex;
  flex-direction:column;
  cursor: pointer;
  background-color: rgb(246,248,249);
  position: relative;
}
.container {
  flex:1
}
</style>
