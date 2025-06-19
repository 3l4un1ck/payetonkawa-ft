'use client';

import { motion } from 'framer-motion';
import {mockProducts} from "@/shared/mocks/products";

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
                            className="bg-[#1e0735] p-4 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                        >
                            <img
                                src={product.imageUrl}
                                alt={product.title}
                                className="w-full h-48 object-cover rounded-xl mb-4"
                            />
                            <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
                            <p className="text-purple-400 font-bold">${product.price.toFixed(2)}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
