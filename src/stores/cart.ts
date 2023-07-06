import create from 'zustand';
import type {Cart} from '@prisma/client'

interface CartStore {
    cartItems: Cart[];
    addToCart: (item: Cart) => void;
    removeFromCart: (itemId: string) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
    cartItems: [],
    addToCart: (item) => set((state) => ({ cartItems: [...state.cartItems, item] })),
    removeFromCart: (itemId) =>
        set((state) => ({
            cartItems: state.cartItems.filter((item) => item.id != itemId),
        })),
    clearCart: () => set({ cartItems: [] }),
}));