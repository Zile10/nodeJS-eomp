<template>
  <div class="view">
    <div v-if="showSpinner">
      <Spinner></Spinner>
    </div>
    
      <productCards v-else/>
  </div>
</template>
<script>
import productCards from "../components/ProductCards.vue";
import Spinner from "../components/Spinner.vue"

import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  components: {
    productCards,
    Spinner
  },
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts");
    const showSpinner = computed(() => store.state.showSpinner);
    return {
      showSpinner,
    };
  },
};
</script>
