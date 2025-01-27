import { create } from 'zustand';

type CartItem = {
  id: string;
  title: string;
  image: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
};

type CartStore = {
  cart: CartItem[];
  addProductToCart: (cartItem: CartItem) => void;
};

export const useCartStore = create<CartStore>()((set, get) => ({
  cart: [],

  addProductToCart: (cartItem) => {
    const { cart } = get();

    const productInCart = cart.some(
      (item) => item.id === cartItem.id && item.size === cartItem.size,
    );

    if (!productInCart) {
      set({ cart: [...cart, cartItem] });
      return;
    }

    const newCart = cart.map((item) => {
      if (item.id === cartItem.id && item.size === cartItem.size) {
        return {
          ...item,
          quantity: item.quantity + cartItem.quantity,
        };
      }
      return item;
    });

    set({ cart: newCart });
  },
}));
