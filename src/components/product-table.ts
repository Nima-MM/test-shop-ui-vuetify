import { ref, onMounted } from 'vue';
import { FetchApi } from '@/http/fetchApi';

const fetchApi = new FetchApi("https://stock-manager.hooman.de/api/");
const products = ref([]);

export async function useProductTable() {
    products.value = await fetchApi.requestGet("products");
    // console.log("PRODUCTS.VALUE: ", products.value);
    return {
        products
    };
}