import { KeyboardStructure } from "./keyboard.model";

export interface IProduct extends KeyboardStructure {
    quantity: number;
  }

export interface ICart {
    products: IProduct[];
    // total_price: number;
    total_price: string;
}


