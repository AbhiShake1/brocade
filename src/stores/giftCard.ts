import create from 'zustand';
import type {GiftCard} from '@prisma/client'

interface GiftCardStore {
    giftCards: GiftCard[];
    setGiftCards: (giftCards: GiftCard[]) => void;
}

export const useGiftCardStore = create<GiftCardStore>((set) => ({
    giftCards: [],
    setGiftCards: (giftCards) => set({ giftCards }),
}));