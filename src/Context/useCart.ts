import { createContext, useContext } from "react";
import type { Product } from "../service/productsLoader";

export type CartItem = Product & { quantity: number };

export type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  totalItems: number;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
