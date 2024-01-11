import create from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      login: (userData) => set({ user: userData }),
      logout: () => set({ user: null }),
    }),
    { name: "auth" }
  )
);

export const useProductsStore = create(
  persist(
    (set) => ({
      products: [],
      minerals: [],
      coldfever: [],
      topsellProducts: [],

      addProduct: (product) =>
        set((state) => ({ products: [...state.products, product] })),
      removeProduct: (productId) =>
        set((state) => ({
          products: state.products.filter(
            (product) => product.id !== productId
          ),
        })),

      addMineral: (mineral) =>
        set((state) => ({ minerals: [...state.minerals, mineral] })),
      removeMineral: (mineralId) =>
        set((state) => ({
          minerals: state.minerals.filter(
            (mineral) => mineral.id !== mineralId
          ),
        })),

      addColdFever: (item) =>
        set((state) => ({ coldfever: [...state.coldfever, item] })),
      removeColdFever: (itemId) =>
        set((state) => ({
          coldfever: state.coldfever.filter((item) => item.id !== itemId),
        })),

      addTopSellProduct: (item) =>
        set((state) => ({ topsellProducts: [...state.topsellProducts, item] })),
      removeTopSellProduct: (itemId) =>
        set((state) => ({
          topsellProducts: state.topsellProducts.filter(
            (item) => item.id !== itemId
          ),
        })),

      fetchData: async (endpoint) => {
        try {
          const response = await fetch(endpoint);
          const data = await response.json();

          set({
            [endpoint]: data || [],
          });
        } catch (error) {
          console.error(`Error fetching data from ${endpoint}:`, error);
        }
      },
    }),
    { name: "products" }
  )
);

export const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cartItems.find(
            (cartItem) => cartItem.id === item.id
          );

          if (existingItem) {
            const updatedCartItems = state.cartItems.map((cartItem) =>
              cartItem.id === item.id
                ? {
                    ...cartItem,
                    quantity: cartItem.quantity + 1,
                    total: (cartItem.quantity + 1) * cartItem.price,
                  }
                : cartItem
            );

            return { cartItems: updatedCartItems };
          } else {
            return {
              cartItems: [
                ...state.cartItems,
                {
                  ...item,
                  quantity: 1,
                  total: item.price,
                },
              ],
            };
          }
        }),

      removeFromCart: (itemId) =>
        set((state) => {
          const updatedCartItems = state.cartItems.map((cartItem) => {
            if (cartItem.id === itemId) {
              if (cartItem.quantity > 1) {
                const updatedCartItem = {
                  ...cartItem,
                  quantity: cartItem.quantity - 1,
                  total: (cartItem.quantity - 1) * cartItem.price,
                };
                return updatedCartItem;
              }
              return null;
            }
            return cartItem;
          });

          const filteredCartItems = updatedCartItems.filter(Boolean);

          return {
            cartItems: filteredCartItems,
          };
        }),

      clearCart: () => set({ cartItems: [] }),
    }),
    { name: "cart" }
  )
);
