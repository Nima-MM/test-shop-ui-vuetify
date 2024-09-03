import { defineComponent, ref } from "vue";
import { FetchApi } from "../http/fetchApi";
import Product from "./products-interface";

export default defineComponent({
  setup() {
    const fetchApi = new FetchApi("https://stock-manager.hooman.de/api");
    const response = ref<string | null>(null);
    const error = ref<string | null>(null);
    const dialog = ref(false);
    const product = ref<Product>({ name: "" });

    const save = async function (): Promise<void> {
      try {
        response.value = await fetchApi.requestPost(
          "/products/add",
          product.value
        );
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
