<template>
  <div class="main">
    <h1>Hallo</h1>
    <div class="products" :for="product in this.products">
      {{ product }}
    </div>
  </div>
</template>

<script setup lang="ts">
import api from "@/http/fetchApi";

// // interface Products {
// //   id: Number,
// //   name: String,
// //   stock: Number,
// //   reservations: []
// // }
export default {
  data() {
    return {
      products: {
        id: Number,
        name: String,
        stock: Number,
        reservations: [],
      },
    };
  },
  methods: {
    // // let x = api(https://stock-manager.hooman.de/api/products)
    // // fetch("https://stock-manager.hooman.de/api/products")
    // //   .then(res => res.json())
    // //   .then(res => {
    // //       // this is not allowed
    // //       // let a:Actor = <Actor>res;

    // //       // I use an intermediate variable a to get around this...
    // //       let a:any = res; 
    // //       let b:Actor = <Actor>a;
    // //   })
//     export class ApiHelper {

// }

</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
}
</style>