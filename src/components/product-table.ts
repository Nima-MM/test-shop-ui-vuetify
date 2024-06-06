import { defineAsyncComponent, defineComponent, onBeforeMount, ref } from 'vue';
import { FetchApi } from '@/http/fetchApi';


export default defineComponent({
    setup() {
        const fetchApi = new FetchApi("https://stock-manager.hooman.de/api/");
        const products = ref([]);
        const isLoading = ref(false);

        onBeforeMount(() => {
            loadProducts();
        })

        async function loadProducts() {
            this.isLoading = true;
            products.value = await fetchApi.requestGet("products");
        }

        return { products };
    }
})