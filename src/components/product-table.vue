<template>
  <v-container class="main-container-table fill-height">
    <v-data-table
      v-model="selected"
      :loading="isLoading"
      :items="products"
      show-select
    >
            <template v-slot:loading>
        <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
      </template>
    </v-data-table>
    <v-alert v-if="error" type="error" closable>
      {{ error }}
    </v-alert>
  </v-container>
</template>

<script src="./product-table" lang="ts"></script>