<!-- This is the root compoent where the Navbar and the routerview are rendered -->
<template>
<transition name="fade">
<div>
  <Navbar></Navbar>
  <div class='bigtitle'>
    <div class='container'></div>
    <div class='container containertext'>
      <h3 class='titlephrase'>Tasks in project</h3>
      <h3 class='projectid'>{{$store.state.projectid}}</h3>
    </div>
    <div class='container'></div>
  </div>
  <router-view/>
</div>
</transition>
</template>

<script>
// the navbar is always imported, regardless of the address, the router-view
// rendered component is not imported
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  max-width: 40%
}

.bigtitle {
  margin: 1rem;
  display: flex;
  flex-direction: row;
  text-align: center;
}

.projectid {
  font-weight: 800;
  margin: 0px
}

.titlephrase {
  font-weight: 300;
  margin: 0px;
  margin-bottom: 0.3rem
}

.container {
  flex: 1
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.containertext {
  border-radius: 100px;
  background-color: white;
}
</style>
