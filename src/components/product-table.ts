import { defineComponent, onBeforeMount, ref } from "vue";
import { FetchApi } from "@/http/fetchApi";
import Product from "./products-interface";

export default defineComponent({
  setup() {
    const fetchApi = new FetchApi("https://stock-manager.hooman.de/api/");
    const products = ref<[Product]>();
    const isLoading = ref(false);
    const error = ref<string | null>(null);

    onBeforeMount(() => {
      loadProducts();
    });

    async function loadProducts(): Promise<void> {
      isLoading.value = true;
      try {
        products.value = await fetchApi.requestGet("products");
      } catch (err) {
        error.value = `Fetching products failed. Error: ${err.message}`;
        console.error(error.value);
      } finally {
        isLoading.value = false;
      }
    }

    return { products, isLoading, error };
  },
});
