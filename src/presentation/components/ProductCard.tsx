"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";
import { Heart } from "lucide-react";

interface Props {
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
    quantity: number | undefined;
  };
}

export default function ProductCard({ product }: Props) {
  const addItem = useCartStore((s) => s.addItem); // Fonction pour ajouter au panier
  const [shake, setShake] = useState(false); // Animation du panier
  const [qty, setQty] = useState(1); // Quantité

  const handleAddToCart = () => {
    addItem({ ...product, quantity: qty }); // Ajouter l'article avec la quantité
    setShake(true);
    toast.success(`${product.name} x${qty} ajouté au panier`);
    setTimeout(() => setShake(false), 500);
  };

  const handleWishlist = () => {
    toast.success(`${product.name} ajouté à votre wishlist.`);
  };

  const increase = () => setQty((q) => Math.min(q + 1, 99));
  const decrease = () => setQty((q) => Math.max(q - 1, 1));

  return (
      <motion.div
          whileHover={{ scale: 1.03 }}
          className={`relative border rounded-3xl overflow-hidden shadow-lg p-5 transition bg-white text-[#6F4E37] ${
              shake ? "animate-shake" : ""
          }`}
      >
        {/* Icône de wishlist */}
        <button
            onClick={handleWishlist}
            className="absolute top-4 right-4 text-xl text-[#b08b5c] hover:text-[#6F4E37] transition"
        >
          <Heart size={20} className="fill-[#b08b5c]" />
        </button>

        {/* Image du produit */}
        <div className="w-full h-48 flex items-center justify-center bg-[#f7efe6] rounded-lg">
          <img
              src={product.image}
              alt={product.name}
              className="h-full object-contain rounded-lg"
          />
        </div>

        {/* Titre et prix */}
        <h2 className="mt-4 text-lg font-bold p-2">{product.name}</h2>
        <div className="mt-2 flex items-center justify-between p-2">
          <p className="text-md font-medium text-[#8d735a]">À partir de :</p>
          <p className="text-2xl font-bold text-[#6F4E37]">{product.price} €</p>
        </div>

        {/* Sélecteur de quantité */}
        <div className="flex items-center justify-between mt-4 bg-[#f7efe6] px-4 py-2 rounded-full">
          <button
              onClick={decrease}
              className="text-lg font-bold text-[#6F4E37] px-3 hover:text-[#4b3621]"
          >
            –
          </button>
          <span className="text-lg font-semibold">{qty}</span>
          <button
              onClick={increase}
              className="text-lg font-bold text-[#6F4E37] px-3 hover:text-[#4b3621]"
          >
            +
          </button>
        </div>

        {/* Bouton Ajouter au panier */}
        <button
            onClick={handleAddToCart}
            className="mt-4 px-4 py-2 w-full bg-[#b08b5c] hover:bg-[#6F4E37] text-white rounded-full font-semibold transition text-center"
        >
          Ajouter au panier
        </button>
      </motion.div>
  );
}