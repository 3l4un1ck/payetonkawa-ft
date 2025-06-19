"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface Props {
    product: {
        id: string;
        name: string;
        image: string;
        price: number;
    };
}

export default function ProductCard({ product }: Props) {
    const addItem = useCartStore((s) => s.addItem);
    const [shake, setShake] = useState(false);

    const handleAddToCart = () => {
        addItem(product);
        setShake(true);
        toast.success(`${product.name} ajouté au panier`);
        setTimeout(() => setShake(false), 500);
    };

    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            className={`border rounded-xl overflow-hidden shadow-md p-4 transition ${shake ? "animate-shake" : ""}`}
        >
            <img src={product.image} alt={product.name} className="w-full h-100 object-contain rounded-md" />
            <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.price} €</p>
            <button
                onClick={handleAddToCart}
                className="mt-3 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
                Ajouter
            </button>
        </motion.div>
    );
}
