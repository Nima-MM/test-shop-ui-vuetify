import { ref, computed } from "vue";
import Product from "../components/products-interface";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("productsStore", () => {
  const products = ref<[Product]>([{ name: "" }]);

  const getState = computed(() => products.value);

  function setState(product: [Product]) {
    products.value = product;
  }

  function addProduct(newProduct: Product) {
    products.value.push(newProduct);
  }

  return { getState, setState, addProduct };
});
