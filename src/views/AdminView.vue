<template lang="">
  <spinner v-if="showSpinner"/>
  <div v-else>
    <users></users>
    <product></product>
  </div>
</template>
<script>
import users from "../components/Users.vue";
import product from "../components/Products.vue";
import spinner from "../components/Spinner.vue";

import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  components: {
    users,
    product,
    spinner,
  },
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts");
    store.dispatch("fetchUsers");
    const showSpinner = computed(() => store.state.showSpinner);
    return {
      showSpinner,
    };
  },
};
</script>
<style lang=""></style>
