import { create } from 'zustand';

type VariantStore = {
  color: string;
  size: string;
  quantity: number;
  setColor: (variant: string) => void;
  setSize: (variant: string) => void;
  incQuantity: (maxInStock: number) => void;
  decQuantity: () => void;
  reset: () => void;
};

export const useVariantStore = create<VariantStore>()((set, get) => ({
  color: '',
  size: '',
  quantity: 1,

  setColor: (variant) => set({ color: variant, size: '', quantity: 1 }),

  setSize: (variant) => set({ size: variant }),

  incQuantity: (maxInStock = 1) => {
    const { quantity } = get();

    if (quantity >= maxInStock) return set({ quantity: maxInStock });

    set({ quantity: quantity + 1 });
  },

  decQuantity: () => {
    const { quantity } = get();

    if (quantity <= 1) return set({ quantity: 1 });

    set({ quantity: quantity - 1 });
  },

  reset: () => set({ color: '', size: '', quantity: 1 }),
}));
