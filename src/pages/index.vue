<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar"></v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer">
          <!-- component:add-new-product  -->
          <add-new-product></add-new-product>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <!-- component:product-table  -->
      <product-table />
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
  //
</script>
