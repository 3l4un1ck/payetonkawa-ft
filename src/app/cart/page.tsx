'use client';

import Layout from "@/presentation/components/Layout";
import { useCartStore } from '@/store/cartStore';
import { useAuthStore } from '@/store/authStore';
import { OrderService } from '@/application/services/OrderService';
import { Trash2, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CartPage() {
    const {
        items,
        removeItem,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
    } = useCartStore();
    
    const { customer } = useAuthStore();
    const router = useRouter();
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState('');

    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleCheckout = async () => {
        if (!customer?.email) {
            setError('Vous devez être connecté pour passer une commande');
            return;
        }

        setIsProcessing(true);
        setError('');

        try {
            const orderService = new OrderService();
            await orderService.createOrderFromCart(customer, items);
            clearCart();
            window.location.href = "https://buy.stripe.com/test_bJe8wO9yAc2O5JRa404AU00";
            // router.push('/orders');
        } catch (err: any) {
            setError(err.message || 'Erreur lors de la création de la commande');
        } finally {
            setIsProcessing(false);
        }
    };

    if (items.length === 0) {
        return (
            <Layout>
                <div className="min-h-screen flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl font-bold">Votre panier est vide 🛒</h2>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="max-w-4xl mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold mb-6">🛍️ Mon Panier</h1>
                <div className="space-y-4">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between border p-4 rounded-xl shadow-sm bg-white"
                        >
                            <div className="flex items-center gap-4">
                                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                                <div>
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <div className="flex items-center gap-2 mt-2">
                                        <button
                                            onClick={() => decreaseQuantity(item.id)}
                                            className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="text-sm font-medium">{item.quantity}</span>
                                        <button
                                            onClick={() => increaseQuantity(item.id)}
                                            className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {item.quantity} × {item.price}€ ={' '}
                                        <span className="font-medium">{item.quantity * item.price}€</span>
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => removeItem(item.id)}
                                className="text-red-600 hover:text-red-800"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    ))}
                </div>

                {error && (
                    <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        {error}
                    </div>
                )}

                <div className="mt-6 flex items-center justify-between border-t pt-4">
                    <h3 className="text-xl font-bold">Total : {totalPrice.toFixed(2)} €</h3>
                    <div className="flex gap-2">
                        <button
                            onClick={clearCart}
                            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                        >
                            Vider le panier
                        </button>
                        <button
                            onClick={handleCheckout}
                            disabled={isProcessing}
                            className="bg-[#6F4E37] text-white px-4 py-2 rounded-lg hover:bg-[#5a3f2e] transition disabled:opacity-50"
                        >
                            {isProcessing ? 'Traitement...' : 'Valider la commande'}
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
