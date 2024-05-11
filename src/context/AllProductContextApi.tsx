import React, { createContext, useState, ReactNode } from "react";
import { fetchProduct, fetchSingleProduct } from "@/api/ProductApi";
import { KeyboardStructure } from "@/models/keyboard.model";

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
 
  const fetchSingleKeyboard = async (keyboard_id: string) => {
    try {
      const response = await fetchSingleProduct(keyboard_id);
      console.log(response)
      setKeyboard(response.data.keyboard);
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
