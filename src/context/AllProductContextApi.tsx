import React, { createContext, useState, ReactNode } from "react";
import { fetchProduct, fetchSingleProduct } from "@/api/ProductApi";

export interface KeyboardStructure {
  _id: string;
  brand: string;
  keyboard_name: string;
  rating: number;
  size: string;
  type: string;
  switch_type: string;
}

export interface KeyboardsContextType {
  keyboards: KeyboardStructure[] | null;
  keyboard: KeyboardStructure[] | null;
  setKeyboards: (newValue: KeyboardStructure[] | null) => void;
  setKeyboard: (newValue: KeyboardStructure[] | null) => void;
  fetchKeyboards: () => Promise<void>;
  fetchSingleKeyboard: (id: string) => Promise<void>;
}

// Step 1: Create a context
export const KeyboardsContext = createContext<KeyboardsContextType | undefined>(undefined);

// Step 3: Create a provider component
export const KeyBoardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [keyboards, setKeyboards] = useState<KeyboardStructure[] | null>(null);
  const [keyboard, setKeyboard] = useState<KeyboardStructure[] | null>(null);

  const fetchKeyboards = async () => {
    try {
      const response = await fetchProduct();
      setKeyboards(response.data.keyboards);
    } catch (err) {
      console.log(err);
    }
  };
 
  const fetchSingleKeyboard = async (id: string) => {
    try {
      const response = await fetchSingleProduct(id);
      setKeyboard(response.data.keyboards.id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <KeyboardsContext.Provider value={{ keyboards, setKeyboards, fetchKeyboards, fetchSingleKeyboard, keyboard, setKeyboard }}>
      {children}
    </KeyboardsContext.Provider>
  );
};
