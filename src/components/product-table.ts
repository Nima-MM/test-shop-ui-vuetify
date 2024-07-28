import { defineComponent, onBeforeMount, ref } from "vue";
import { FetchApi } from "@/http/fetchApi";
import Product from "./products-interface";

export default defineComponent({
  setup(_, { expose }) {
    const fetchApi = new FetchApi(
      "https://stock-manager.hooman.de/api/products"
    );
    const products = ref<[Product]>();
    const isLoading = ref(false);
    const error = ref<string | null>(null);

    onBeforeMount(() => {
      loadProducts();
    });

    async function loadProducts(): Promise<void> {
      isLoading.value = true;
      try {
        products.value = await fetchApi.requestGet();
      } catch (err) {
        error.value = `Fetching products failed. Error: ${err.message}`;
        console.error(error.value);
      } finally {
        isLoading.value = false;
      }
    }

    expose({ loadProducts });

    return { products, isLoading, error };
  },
});
