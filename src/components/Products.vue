<template>
    <div>
        <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product"> 
                    <td>{{product.productName}}</td>
                    <td>R{{ product.productPrice}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';

export default {
    setup(){
        const store = useStore();
        store.dispatch("fetchProducts");
        let products = computed(() => store.state.products)
        return{
            products,
        }
    },
    name : 'products_cust',

}
</script>
<style lang="">
    
</style>