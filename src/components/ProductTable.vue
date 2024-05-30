<template>
    <v-container class="main-container-table fill-height">
        <v-data-table :items="products"></v-data-table>
    </v-container>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import  { FetchApi }  from '@/http/fetchApi'

    const fetchApi = new FetchApi("https://stock-manager.hooman.de/api/");
    const products = ref([]);
            
    products.value = await fetchApi.requestGet("products");
    // console.log("PRODUCTS.VALUE: ", products.value);

</script>
