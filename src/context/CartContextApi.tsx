import { ICart } from "@/models/cart.model";
import { ReactNode, createContext, useState } from "react";
// create context interface


export interface CartContextType {
  cart: ICart[] | null;
  setCart: (value: React.SetStateAction<ICart[] | null>) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<ICart[] | null>(null);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};


/*
Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components
in this context file there was an error fast refresh 
what o found is when we exporting CartContext we should keep the first letter 
capital or else it will throw error
*/