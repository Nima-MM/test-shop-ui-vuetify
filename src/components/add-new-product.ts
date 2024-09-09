import { defineComponent, ref, watch } from "vue";
import { FetchApi } from "../http/fetchApi";
import Product from "./products-interface";
import { useProductsStore } from "../stores/all-products-store";

export default defineComponent({
  setup() {
    const fetchApi = new FetchApi("https://stock-manager.hooman.de/api");
    const response = ref<string | null>(null);
    const error = ref<string | null>(null);
    const dialog = ref(false);
    const product = ref<Product>({ name: "" });
    const productStore = useProductsStore();

    // TO-REFACTOR - feedback for wrong input of user
    const save = async function (): Promise<void> {
      try {
        response.value = await fetchApi.requestPost(
          "/products/add",
          product.value
        );
        productStore.addProduct(product.value);
      } catch (err) {
        error.value = `POST producta failed: Error: ${err.message}`;
        console.error("Error details: ", err.value);
      } finally {
        dialog.value = false;
      }
    };
    return { dialog, product, save };
  },
});
