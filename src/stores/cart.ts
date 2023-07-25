import create from 'zustand';
import type {Cart, Product, ProductInCart} from "@prisma/client";

type Prod = ProductInCart & { product: Product }
type CartWithProduct = Omit<Cart & { productInCart: Prod[] }, 'id'>

interface CartStore {
    initCart: (cart: CartWithProduct) => void
    cartItems: CartWithProduct;
    addToCart: (item: ProductInCart) => void;
    removeFromCart: (itemId: string) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
    initCart: (cartItems) => set({cartItems}),
    cartItems: get()?.cartItems,
    addToCart: (item) => set((state) => ({
        cartItems: {
            ...state.cartItems,
            productInCart: state.cartItems.productInCart.map(p => p.productId == item.id ? {
                ...p,
                quantity: p.quantity + 1
            } : p)
        }
    })),
    removeFromCart: (itemId) =>
        set((state) => ({
            cartItems: {
                ...state.cartItems,
                productInCart: state.cartItems.productInCart.filter(p => p.productId != itemId)
            },
        })),
    clearCart: () => set((state) => ({cartItems: {...state.cartItems, products: []}})),
}))