import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
    id: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
    increaseQuantity: (id: string) => void;
    decreaseQuantity: (id: string) => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            items: [],
            addItem: (item) =>
                set((state) => {
                    const exists = state.items.find((i) => i.id === item.id);
                    if (exists) {
                        return {
                            items: state.items.map((i) =>
                                i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
                            ),
                        };
                    } else {
                        return { items: [...state.items, item] };
                    }
                }),
            removeItem: (id) =>
                set((state) => ({
                    items: state.items.filter((item) => item.id !== id),
                })),
            clearCart: () => set({ items: [] }),
            increaseQuantity: (id) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                })),
            decreaseQuantity: (id) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === id && item.quantity > 1
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                })),
        }),
        {
            name: 'cart-storage', // 🧠 clé dans localStorage
        }
    )
);
