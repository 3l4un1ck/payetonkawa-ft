import { ProductRepository } from '@/domain/repositories/ProductRepository';
import { Product } from '@/domain/entities/Product';

export class GetAllProducts {
    constructor(private productRepo: ProductRepository) {}

    async execute(): Promise<Product[]> {
        // return this.productRepo.getAll();
        return [];
    }
}
