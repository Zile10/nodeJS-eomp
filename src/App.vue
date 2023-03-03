<template>
  <navbar></navbar>
  <router-view/>
  <Footer></Footer>
</template>

<style>
div.view {
  background-color: #f7e1e1;
}

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
import navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue'
export default {
  components : {
    navbar,
    Footer
  }
}
</script>
