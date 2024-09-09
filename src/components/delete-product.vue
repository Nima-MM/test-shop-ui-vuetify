<template>
  <!-- DELETE Dialog -->
  <v-dialog v-model="dialog" max-width="500">
    <v-card max-width="400"
      ><v-card-title>
        <span class="text-h5">Are you sure?</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="20" md="6" sm="20">
              <v-text-field
                v-model="id"
                type="number"
                placeholder="Produkt-Id"
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
        <v-btn color="blue-darken-1" variant="text" text="Delete" @click="del">
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <!-- Navigation Button -->
  <v-btn class="mb-2" color="primary" dark @click="dialog = true">
    Delete Product
  </v-btn>
</template>

<script src="./delete-product" lang="ts"></script>
