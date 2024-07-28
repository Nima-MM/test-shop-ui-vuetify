<template>
  <v-dialog v-model="dialog" max-width="500">
    <v-card max-width="400"
      ><v-card-title>
        <span class="text-h5">NEW uh yEah</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="20" md="6" sm="20">
              <v-text-field v-model="product.name" placeholder="Produktname"
                >P</v-text-field
              >
            </v-col>
            <v-col cols="20" md="6" sm="20">
              <v-text-field
                v-model="product.stock"
                placeholder="Stueckzahl"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue-darken-1"
          variant="text"
          text="Cancel"
          @click="dialog = false"
        >
        </v-btn>
        <v-btn color="blue-darken-1" variant="text" text="Save" @click="save">
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-btn class="mb-2" color="primary" dark @click="dialog = true">
    New Item
  </v-btn>
</template>

<script src="./add-new-product" lang="ts"></script>
