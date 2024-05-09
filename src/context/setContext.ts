import { useContext } from "react";
import { KeyboardsContext, KeyboardsContextType } from "./AllProductContextApi";

export const useKeyboardContext = (): KeyboardsContextType => {
  const context = useContext(KeyboardsContext);
  if (!context) {
    throw new Error("useKeyboardContext must be used within a KeyBoardProvider");
  }
  return context;
};
