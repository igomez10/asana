<!-- A top bar with the asana logo and a color background -->
<template>
<nav class='navbar'>
  <div class="nav-wrapper">
    <div class='logodiv'>
      <img src="../assets/Logo-Horizontal-White.png">
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
img {
  width: 10rem;
  display: flex;
  margin-left: 1rem;
  position: relative;
  top: 1rem
}

.nav-wrapper {
  background-color: rgb(36, 43, 54)
}

.logodiv {
  height: 100%
}
</style>
