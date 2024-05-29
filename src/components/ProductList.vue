
<template>
  <div class="main">
    <h1>Hallo</h1>
    <!-- <v-list lines="three">
      <v-list-item class="products" v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.stock }}
      </v-list-item>
    </v-list> -->
    <v-data-table :items="products"></v-data-table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { FetchApi } from "@/http/fetchApi";

const fetchApi = new FetchApi("api/");
const products = ref([]);

products.value = await fetchApi.getRequest("products");
// console.log("PRODUCTS: ", products.value);
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
