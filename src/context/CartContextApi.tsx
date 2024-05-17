import { ICart, IProduct } from "@/models/cart.model";
import { KeyboardStructure } from "@/models/keyboard.model";
import { ReactNode, createContext, useState } from "react";
// create context interface

export interface CartContextType {
  cart: ICart | null;
  addToCart: (product: KeyboardStructure | null) => void;
  setCart: (value: React.SetStateAction<ICart[] | null>) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<ICart | null>({
    products: [],
    total_price: 0,
  });

  const addToCart = (product: IProduct) => {
    // if cart is empty then return
    if (!cart) return;

    // finding the duplicate product index
    const existingProduct = cart.products.findIndex(
      (p) => p._id === product._id
    );
    

    if (existingProduct === -1) {
      const updatedCart = {
        ...cart,
        products: [...cart.products, product],
        total_price:
          (cart.total_price as number) + product.price * product.quantity,
      };
      setCart(updatedCart);
    } else {
      const updatedProducts = [...cart.products];
    console.log(updatedProducts, 'update products for duplicate product');

      console.log(existingProduct, 'index');
      updatedProducts[existingProduct].quantity += product.quantity;

      const updatedCart = {
        ...cart,
        products: updatedProducts,
        total_price:
          (cart.total_price as number) + product.price * product.quantity,
      };
      setCart(updatedCart);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
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

// found a way to edit in chrome dev tool that wil import code in your project