"use client";
import { StaticImageData } from "next/image";
import React, { createContext, useContext, useState } from "react";

type CartItem = {
  name: string;
  priceInt: number;
  quantity: number;
  img: StaticImageData;
  price: string;
};

interface CartContextType {
  cartArray: CartItem[];
  setCartArray: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartArray, setCartArray] = useState<CartItem[]>([]);

  return (
    <CartContext.Provider value={{ cartArray, setCartArray }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
