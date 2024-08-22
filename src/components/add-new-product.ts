import { defineComponent, ref } from "vue";
import { FetchApi } from "../Legacy/src/http/fetch-api";
import Product from "./products-interface";

export default defineComponent ({
    setup(){
        const dialog = ref(false);

        return { dialog }
    }
})