<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar"></v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer">
          <v-spacer></v-spacer>
          <add-new-product />
          <v-spacer></v-spacer>
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
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  text="Delete"
                  @click="del"
                >
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-btn class="mb-2" color="primary" dark @click="dialog = true">
            Delete Product
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <product-table />
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
//
import {
  defineComponent,
  onBeforeMount,
  ref,
  Ref,
  computed,
  toRefs,
} from "vue";
import { FetchApi } from "@/http/fetchApi";
const fetchApi = new FetchApi("https://stock-manager.hooman.de/api/products/");
const productTableRef = ref<any>(null);
const error = ref<string | null>(null);
const response = ref<string | null>(null);
const id = ref<Number>();
const dialog = ref(false);

const del = async () => {
  if (id.value !== null) {
    try {
      response.value = await fetchApi.requestDel(id.value);
      if (productTableRef.value?.loadProducts) {
        productTableRef.value.loadProducts(); // Ruft die Methode zum Neuladen der Produkte auf
      }
    } catch (err) {
      error.value = `Deleting prdouct failed: Error: ${err.message}`;
      console.error(error.value);
    } finally {
      dialog.value = false;
      console.log(response.value);
    }
  }
};
</script>
