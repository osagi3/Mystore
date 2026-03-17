import React, { useState, type ReactNode } from "react";
import type { Product } from "../service/productsLoader";
import { CartContext } from "./useCart";

export type CartItem = Product & { quantity: number };

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [initVal, setInitVal] = useState<number>(0);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }

      return prevCart.filter((item) => item.id !== id);
    });
  };

  const clearCart = () => {
    setCart([]);
  };
  const increment = () => {
    setInitVal(initVal + 1);
  };
  //   const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalItems = cart.length;
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        totalItems,
        clearCart,
        initVal,
        increment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
