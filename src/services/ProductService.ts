import $api from "../http/index"
import { Product } from "../types/types"

interface ApiResponse {
    status: number;
    statusText: string;
    data: Product[];
}

export default class ProductService {
    static async getProducts(): Promise<ApiResponse> {
        return $api.get('/products')
    }
}