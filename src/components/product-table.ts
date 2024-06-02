import { ref } from 'vue';
import { FetchApi } from '@/http/fetchApi';

const fetchApi = new FetchApi("https://stock-manager.hooman.de/api/");
const products = ref([]);

async function loadProducts() {
    products.value = await fetchApi.requestGet("products");
}
