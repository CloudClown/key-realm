import { useCartContext } from "@/context/setContext";
import { KeyboardStructure } from "@/models/keyboard.model";
import { useState } from "react";

interface IKeyboard {
  keyboard: KeyboardStructure | null;
}

const ProductSummary = ({ keyboard }: IKeyboard) => {
  const { addToCart } = useCartContext();

  const [quantity, setQuantity] = useState<number>(1);

  const handleSubmit = (keyboard: KeyboardStructure | null) => {
    const addCart = (keyboard: KeyboardStructure | null) => {
      const product = {
        ...keyboard,
        quantity: quantity, // Use the state quantity
      };

      addToCart(product);
    };

    addCart(keyboard);
  };

  return (
    <div>
      <hr />
      <h1>Any Product Name</h1>
      <p className="text-customBlue text-2xl my-5">৳{keyboard?.price}</p>
      <ul className="list-disc text-customBlue mb-5">
        <li>Model: {keyboard?.keyboard_name}</li>
        <li>Type: {keyboard?.type}</li>
        <li>Switch: {keyboard?.switch_type}</li>
      </ul>
      <div className="flex flex-c">
        <form onSubmit={() => handleSubmit(keyboard)}>
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="bg-gray-400 w-10 mr-5"
          />
          <button 
            type="submit" // Added type submit for the button
            className="p-2 bg-white border-2 border-customBlue transition-colors text-customBlue hover:bg-customBlue hover:text-white">
            Add to cart
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductSummary;
