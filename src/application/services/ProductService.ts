import { ApiProductRepository } from '@/infrastructure/repositories/ApiProductRepository';
import {GetAllProducts} from "@/application/usecases/GetAllProducts";

const repo = new ApiProductRepository();
// const getAllProducts = new GetAllProducts(repo);

// export const ProductService = {
//     getAll: (token: string) => getAllProducts.execute(token),
// };
