import { IoClose } from "react-icons/io5";
import AddedItems from "./AddedItems";
// import "./SideCart.scss";

interface Props {
  isOpen: boolean;
  onClose: () => void; // Rename isClose to onClose for clarity
}

const SideCart = ({ isOpen, onClose }: Props) => {
  return (
    <div
      className={`absolute z-10 right-0 
      ${ isOpen ? "w-[20%]" : "w-0"} 
      transition-all ease-in-out duration-300 overflow-x-hidden`}
    >
      <div className={`h-screen bg-slate-200 `}>
        <div className="flex justify-between items-center mx-4">
          <h1>Cart</h1>
          <button onClick={onClose}>
            <IoClose size={40} />
          </button>
        </div>
        <AddedItems />
        <button className="p-4 mr-2 bg-customBlue text-white hover:bg-teal-500 hover:text-customBlue hover:border-2 hover:border-customBlue">
          Checkout
        </button>
        <button className="p-4 bg-white text-customBlue border-2 border-customBlue hover:bg-teal-600 hover:text-white hover:border-2 hover:border-teal-600">
          View Cart
        </button>
      </div>
    </div>
  );
};

export default SideCart;
