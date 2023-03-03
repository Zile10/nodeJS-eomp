<template>
  <div>
  <div v-if="Spinner">
    <Spinner></Spinner>
  </div>
  <div v-else>
    <products></products>
  </div>
    <router-view></router-view>

  </div>
</template>
<script>
import products from '../components/Products.vue'
export default {
  components : {
    products
  }
}
</script>
