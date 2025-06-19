import { Product } from '@/domain/entities/Product';
import { ProductRepository } from '@/domain/repositories/ProductRepository';
import { fetcher } from '@/infrastructure/http/fetcher';

export class ApiProductRepository implements ProductRepository {
    async getAll(): Promise<Product[]> {
        return await fetcher<Product[]>('/products');
    }

    async getById(id: string): Promise<Product> {
        return await fetcher<Product>(`/products/${id}`);
    }
}
