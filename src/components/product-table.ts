import { defineComponent, onBeforeMount, ref } from "vue";
import { FetchApi } from "@/http/fetchApi";
import { useProductsStore } from "../stores/all-products-store";

export default defineComponent({
  setup() {
    const fetchApi = new FetchApi("https://stock-manager.hooman.de/api/");
    const isLoading = ref(false);
    const error = ref<string | null>(null);
    const productStore = useProductsStore();

    onBeforeMount(() => {
      loadProducts();
    });

    async function loadProducts(): Promise<void> {
      isLoading.value = true;
      try {
        productStore.setState(await fetchApi.requestGet("products"));
      } catch (err) {
        error.value = `Fetching products failed. Error: ${err.message}`;
        console.error(error.value);
      } finally {
        isLoading.value = false;
      }
    }

    return { productStore, isLoading, error };
  },
});
