import { ReactNode, createContext, useState } from "react";
// create context interface

export interface Cart {
  id: string;
  count: number;
}

export interface CartContextType {
  cart: Cart[] | null;
  setCart: (value: React.SetStateAction<Cart[] | null>) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Cart[] | null>(null);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};


/*
in this context file there was an error fast refresh 
what o found is when we exporting CartContext we should keep the first letter 
capital or else it will throw error
*/