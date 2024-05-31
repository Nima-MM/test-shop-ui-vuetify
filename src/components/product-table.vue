<template>
    <v-container class="main-container-table fill-height">
        <v-data-table :items="products"></v-data-table>
    </v-container>
</template>

<script setup lang="ts">
    import { useProductTable } from './ProductTable';

    const { products } = await useProductTable();
</script>
