<template>

  <v-dialog v-model="dialog" max-width="500">
    <v-card max-width="400">
      <v-card-title><span>CREATE NEW PRODUCT</span></v-card-title>
      <v-card-text>TEXT TEXT</v-card-text>
    </v-card>
  </v-dialog>
  <v-btn class="mb-2" color="primary" dark @click="dialog = true">
    new producta
  </v-btn>
</template>

<script src="./add-new-product" lang="ts"></script>