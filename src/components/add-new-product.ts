import { defineComponent, ref } from "vue";
import { FetchApi } from "@/http/fetchApi";
import Product from "./products-interface";

export default defineComponent({
  setup() {
    const dialog = ref(false);
    const fetchApi = new FetchApi(
      "https://stock-manager.hooman.de/api/products/"
    );
    const error = ref<string | null>(null);
    const response = ref<string | null>(null);
    const productTableRef = ref<any>(null);
    const product = ref<Product>({
      name: "",
      reservations: [],
    });

    const save = async function postProduct(): Promise<void> {
      try {
        console.log("Attempting to save product: ", product.value);
        response.value = await fetchApi.requestPost("add", product.value);
        // zoom Neuladen der Seite
        if (productTableRef.value?.loadProducts) {
          productTableRef.value.loadProducts();
        }
      } catch (err) {
        error.value = `POST prdouct failed: Error: ${err.message}`;
        console.error("Error details: ", err.value);
      } finally {
        dialog.value = false;
        console.log(response);
      }
    };

    return { save, dialog, product };
  },
});
