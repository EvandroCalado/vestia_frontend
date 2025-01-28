import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type SummaryInfo = {
  subTotal: number;
  tax: number;
  total: number;
  totalProductsInCart: number;
};

export type CartItem = {
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
  getTotalProductsInCart: () => number;
  getSummaryInfo: () => SummaryInfo;
  addProductToCart: (cartItem: CartItem) => void;
  updateProductQuantity: (cartItem: CartItem, quantity: number) => void;
  removeProductFromCart: (cartItem: CartItem) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],

      getTotalProductsInCart: () => {
        const { cart } = get();

        return cart.reduce((acc, item) => acc + item.quantity, 0);
      },

      getSummaryInfo: () => {
        const { cart, getTotalProductsInCart } = get();

        const subTotal = cart.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0,
        );

        const tax = subTotal * 0.15;
        const total = subTotal + tax;
        const totalProductsInCart = getTotalProductsInCart();

        return { subTotal, tax, total, totalProductsInCart };
      },

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

      updateProductQuantity: (cartItem, quantity) => {
        const { cart } = get();

        const newCart = cart.map((item) => {
          if (item.id === cartItem.id && item.size === cartItem.size) {
            return {
              ...item,
              quantity,
            };
          }

          return cartItem;
        });

        set({ cart: newCart });
      },

      removeProductFromCart: (cartItem) => {
        const { cart } = get();

        const newCart = cart.filter(
          (item) => !(item.id === cartItem.id && item.size === cartItem.size),
        );

        set({ cart: newCart });
      },
    }),
    { name: 'vestia-cart-storage' },
  ),
);
