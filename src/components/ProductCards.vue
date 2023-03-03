<template>
  <div>
    <div class="container">
      <div class="row gap-4 mx-4 d-sm-flex justify-content-center">
        <div
          class="card"
          style="width: 18rem"
          v-for="product in products"
          :key="product"
        >
          <img :src="product.imgURL" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">{{ product.productName }}</h5>
            <p class="card-text">{{ product.productDescription }}</p>
            <p class="card-text">{{ product.productPrice }}</p>
            <a href="#" class="btn btn-primary">View More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts");
    let products = computed(() => store.state.products);
    return {
      products,
    };
  },
};
</script>
<style scoped>
.card img {
  max-height: 320px;
  
}
.card-body {
    max-height: 250px;
    overflow-y: auto;
}
</style>
