<template>

  <v-dialog v-model="dialog" max-width="500">
    <v-card max-width="400">
      <v-card-title><span>CREATE NEW PRODUCT</span></v-card-title>
      <v-card-text>
        <v-container>
          <v-col>
            <v-text-field v-model="product.name" placeholder="Produktname">
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="product.stock" placeholder="Stückzahl">
            </v-text-field>
          </v-col>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-btn text="Cancel" @click="dialog = false"></v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn text="Save" @click="save"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-btn class="mb-2" color="primary" dark @click="dialog = true">
    new producta
  </v-btn>
</template>

<script src="./add-new-product" lang="ts"></script>