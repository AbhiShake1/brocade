import create from 'zustand';
import type {Cart, Product} from "@prisma/client";

type CartWithProduct = Omit<Cart & { products: Product[] }, 'id'>
type ProductWithQuantity = Product & { count: number }
type CartWithProductAndQuantity = Omit<Cart & { products: ProductWithQuantity[] }, 'id'>

interface CartStore {
    initCart: (userId: string) => void
    cartItems: CartWithProduct;
    formattedCartItems: CartWithProductAndQuantity
    addToCart: (item: Product) => void;
    removeFromCart: (itemId: string) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
    initCart: (userId) => set(({cartItems: {userId, products: []}})),
    cartItems: get().cartItems,
    formattedCartItems: mergeDuplicateProducts(get().cartItems),
    addToCart: (item) => set((state) => ({
        cartItems: {
            ...state.cartItems,
            products: [item, ...state.cartItems.products]
        }
    })),
    removeFromCart: (itemId) =>
        set((state) => ({
            cartItems: {...state.cartItems, products: state.cartItems.products.filter(p => p.id != itemId)},
        })),
    clearCart: () => set((state) => ({cartItems: {...state.cartItems, products: []}})),
}));

function mergeDuplicateProducts(cart: CartWithProduct): CartWithProductAndQuantity {
    const productsMap: { [id: string]: ProductWithQuantity } = {};

    // Iterate through the products array to merge duplicates
    for (const product of cart.products) {
        if (productsMap[product.id]) {
            // If the product already exists in the map, increase the count
            productsMap[product.id]!.count++;
        } else {
            // If the product does not exist, add it to the productsMap with count 1
            productsMap[product.id] = {...product, count: 1};
        }
    }

    // Convert the productsMap back to an array without duplicates
    const mergedProducts = Object.values(productsMap);

    // Return the modified cart with merged products
    return {...cart, products: mergedProducts};
}