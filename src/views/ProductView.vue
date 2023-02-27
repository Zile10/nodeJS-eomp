<template>
  <div class="product">
    <products></products>
    <router-view></router-view>
    <h1>This is an about page</h1>
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
