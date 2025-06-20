"use client";

import {useState} from "react";
import {useCartStore} from "@/store/cartStore";
import {motion} from "framer-motion";
import {toast} from "sonner";

interface Props {
    product: {
        id: string;
        name: string;
        image: string;
        price: number;
        quantity: number;
    };
}

export default function ProductCard({product}: Props) {
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
            whileHover={{scale: 1.03}}
            className={`border rounded-xl overflow-hidden shadow-md p-4 transition bg-white text-[#6F4E37] ${shake ? "animate-shake" : ""}`}
        >
            <img src={product.image} alt={product.name} className="w-full h-100 object-contain rounded-md"/>
            <h2 className="mt-2 text-lg font-semibold text-[#6F4E37] font-bold">{product.name}</h2>
            <div className="flex items-center justify-between mt-2"><span className="text-3xl text-[#8d735a] font-bold">À partir de</span><p className="text-2xl text-[#6F4E37] font-bold">{product.price} €</p></div>
            <button
                onClick={handleAddToCart}
                className="mt-3 px-4 py-2 bg-[#d7b899] hover:bg-[#b08b5c] text-[#6F4E37] rounded font-semibold transition text-center w-full"
            >
                Ajouter
            </button>
        </motion.div>
    );
}