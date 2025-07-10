import { Product } from '@/domain/entities/Product';
import { ProductRepository } from '@/domain/repositories/ProductRepository';
import { fetcher } from '@/infrastructure/http/fetcher';

const BASE_URL = 'http://localhost:3000';

export class ApiProductRepository implements ProductRepository {
    // async getAll(token: string): Promise<Product[]> {
    //     return await fetcher<Product[]>(BASE_URL, '/products');
    // }

    // async getById(id: string): Promise<Product> {
    //     return await fetcher<Product>(BASE_URL, `/products/${id}`);
    // }
}
