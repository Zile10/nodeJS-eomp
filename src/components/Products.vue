<template lang="">
    <div>
        <h4 class="text-bg-info-center">Products</h4>
        <table class="table table-dark"><thead>
              <tr>
                <th scope="col">productID</th>
                <th scope="col">productName</th>
                <th scope="col">productDescription</th>
                <th scope="col">productPrice</th>
                <th scope="col">stock</th>
                <th scope="col">imgURL</th>
              </tr>
            </thead>
            <tbody v-for="stock in products" :key="stock">
              <tr>
                <td>{{stock.productID}}</td>
                <td>{{stock.prodcutName}}</td>
                <td>{{stock.productDescription}}</td>
                <td>{{stock.productPrice}}</td>
                <td>{{stock.stock}}</td>
                <td>{{stock.cellNumb}}</td>
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
    name: 'product_component'
}
</script>
<style lang="">
    
</style>