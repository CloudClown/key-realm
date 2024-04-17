import { IoClose } from "react-icons/io5";
import AddedItems from "./AddedItems";

interface Props {
  isOpen: boolean;
  isClose: () => void;
}

const SideCart: React.FC<Props> = ({ isOpen, isClose }) => {
  return (
    <div
      className={`absolute w-[20%] z-10 right-0 transition-all right-${
        isOpen ? "0%" : "-100%"
      }`}
      style={{
        // transform: isOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <div className="h-screen bg-slate-200 ">
        <div className="flex justify-between items-center mx-4">
          <h1>Cart</h1>
          <button onClick={isClose}>
            <IoClose size={40} />
          </button>
        </div>
        <AddedItems />
        <button className="p-4 mr-2 bg-customBlue text-white hover:bg-teal-500 hover:text-customBlue hover:border-2 hover:border-customBlue">Checkout</button>
        <button className="p-4 bg-white text-customBlue border-2 border-customBlue hover:bg-teal-600 hover:text-white hover:border-2 hover:border-teal-600">View Cart</button>
      </div>
    </div>
  );
};

export default SideCart;
