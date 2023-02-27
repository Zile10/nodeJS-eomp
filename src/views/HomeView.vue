<template>
  <div>
    <Home></Home>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from '../components/Home.vue'
export default {
  components: {
    Home
  }
}
</script>
