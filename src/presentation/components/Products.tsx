'use client';

import { motion } from 'framer-motion';
import {mockProducts} from "@/shared/mocks/products";
import ProductCard from './ProductCard';

export default function Products() {
    return (
        <section className="bg-[#0f0120] text-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                >
                    Popular Products
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                        >
                            <ProductCard
                                product={{
                                    id: product.id,
                                    name: product.title,
                                    image: product.imageUrl,
                                    price: product.price,
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
