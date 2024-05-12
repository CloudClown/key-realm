import { KeyboardStructure } from "@/models/keyboard.model";

interface IKeyboard {
  keyboard: KeyboardStructure | null;
}

const ProductSummary = ({ keyboard }: IKeyboard) => {
  // console.log('product summary',keyboard)

  // console.log(keyboard?.brand)
  // console.log(keyboard?.keyboard_name)

  return (
    <div className="">
      <hr />
      <h1>Any Product Name</h1>
      <p className="text-customBlue text-2xl my-5">৳{keyboard?.price}</p>
      <ul className="list-disc text-customBlue mb-5">
        <li>Model: {keyboard?.keyboard_name}</li>
        <li>type: {keyboard?.type}</li>
        <li>Switch: {keyboard?.switch_type}</li>
      </ul>
      <div className="flex flex-c">
        <form>
          <input
            type="number"
            name="quantity"
            value={1}
            className="bg-gray-400 w-10 mr-5"
          />
          <button className="p-2 bg-white border-2 border-customBlue transition-colors text-customBlue hover:bg-customBlue hover:text-white">
            Add to cart
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductSummary;
