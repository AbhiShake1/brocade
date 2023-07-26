import create from 'zustand';
import type {Product} from '@prisma/client'

type ProductWithFav = Product & { isFavourite: boolean }

interface ProductStore {
    products: ProductWithFav[];
    setProducts: (products: ProductWithFav[]) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
    products: [],
    setProducts: (products) => set({products}),
}));