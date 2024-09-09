import { defineComponent, ref, watch } from "vue";
import { FetchApi } from "../http/fetchApi";
import Product from "./products-interface";
import { useProductsStore } from "../stores/all-products-store";
import { RefSymbol } from "@vue/reactivity";

export default defineComponent({
  setup() {
    const fetchApi = new FetchApi(
      "https://stock-manager.hooman.de/api/products/"
    );
    const error = ref<string | null>(null);
    const response = ref<any>(null);
    const id = ref<number>(0);
    const dialog = ref(false);
    const productStore = useProductsStore();

    // TO-REFACTOR - feedback for wrong input of user
    const del = async () => {
      if (id.value !== null || id.value !== undefined) {
        try {
          // TO-REFACTOR - wants init value - yet to fix - STORY 10 - but actualy works...
          productStore.delProduct(id.value);
          response.value = await fetchApi.requestDel(id.value);
        } catch (err) {
          error.value = `Deleting prdouct failed: Error: ${err.message}`;
          console.error(error.value);
        } finally {
          dialog.value = false;
          console.log(response.value);
        }
      } else {
        console.error("AHHHHHHHH");
      }
    };
    return { id, dialog, del };
  },
});
