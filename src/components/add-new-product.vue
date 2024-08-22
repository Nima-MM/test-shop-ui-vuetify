<template>

  <v-dialog v-model="dialog" max-width="500">DIALOG</v-dialog>
  <v-btn class="mb-2" color="primary" dark @click="dialog = true">
    new producta
  </v-btn>
</template>

<script src="./add-new-product" lang="ts"></script>