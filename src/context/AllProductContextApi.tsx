import React, { createContext, useState, ReactNode } from "react";
import { fetchProduct } from "@/api/ProductApi";

export interface KeyboardStructure {
  brand: string;
  keyboard_name: string;
  rating: number;
  size: string;
  type: string;
  switch_type: string;
}

export interface KeyboardsContextType {
  keyboards: KeyboardStructure[] | null;
  setKeyboards: (newValue: KeyboardStructure[] | null) => void;
  fetchKeyboards: () => Promise<void>;
}

// Step 1: Create a context
export const KeyboardsContext = createContext<KeyboardsContextType | undefined>(undefined);

// Step 3: Create a provider component
export const KeyBoardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [keyboards, setKeyboards] = useState<KeyboardStructure[] | null>(null);

  const fetchKeyboards = async () => {
    try {
      const response = await fetchProduct();
      setKeyboards(response.data.keyboards);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <KeyboardsContext.Provider value={{ keyboards, setKeyboards, fetchKeyboards }}>
      {children}
    </KeyboardsContext.Provider>
  );
};
