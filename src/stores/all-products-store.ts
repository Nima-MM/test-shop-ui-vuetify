import { ref, computed } from "vue";
import Product from "../components/products-interface";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("productsStore", () => {
  const products = ref<[Product]>([{ name: "" }]);

  const getState = computed(() => products.value);

  function setState(product: [Product]) {
    products.value = product;
  }

  // TO-REFACTOR - the id is not visible...
  function addProduct(newProduct: Product) {
    products.value.push(newProduct);
  }

  // TO-REFACTOR - ignores number typo - yet to convert declaritive into number...
  // TO-REFACTOR - feedback for wrong input of user
  function delProduct(productId: number) {
    productId = Number(productId);
    console.log("productId value + (typeof): ", productId, typeof productId);
    console.log("products proxy Array: ", products.value);
    if (productId >= 0) {
      const index = products.value.findIndex(
        (product) => product.id === productId
      );
      console.log("INDEX: ", index);
      if (index !== -1) {
        products.value.splice(index, 1);
      } else {
        console.error("Idd nicht vergeben!");
      }
    } else {
      console.error("Id nicht vergeben!");
    }
  }

  return { getState, setState, addProduct, delProduct };
});
