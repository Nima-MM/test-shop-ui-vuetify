<template>
    <v-container class="main-container-table fill-height">
        <v-data-table :loading="isLoading" :items="products" show-select></v-data-table>
    </v-container>
</template>

<script src="./product-table" lang="ts"></script>