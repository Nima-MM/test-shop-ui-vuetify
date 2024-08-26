import { defineComponent, ref } from "vue";
import { FetchApi } from "../Legacy/src/http/fetch-api";
import Product from "./products-interface";

export default defineComponent ({
    setup(){
        const fetchApi = new FetchApi(
            "https://stock-manager.hooman.de/api/"
        );
        const respone = ref<string | null>(null);
        const error = ref<string | null>(null);
        const dialog = ref(false);
        const product = ref<Product>({name: ""});
        
        return { dialog }
    }
})