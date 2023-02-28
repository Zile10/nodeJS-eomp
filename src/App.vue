<template>
  <navbar></navbar>
  <router-view/>
</template>

<style>


#app {
  font-family: 'Tilt Warp', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f7e1e1;
  height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}


</style>

<script>
import navbar from './components/Navbar.vue'

export default {
  components : {
    navbar
  }
}
</script>
