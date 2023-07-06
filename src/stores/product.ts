import create from 'zustand';
import type {Product} from '@prisma/client'

interface ProductStore {
    products: Product[];
    setProducts: (products: Product[]) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
}));