import keyboard from "../../assets/landing-page-img/img-1.webp";
import { GoStarFill } from "react-icons/go";



const ProductCard = () => {
  return (
    <div className="w-[350px] mt-16 bg-slate-300  rounded-lg ">
      <div className="p-5">
        <div className="">
          <img src={keyboard} alt="keyboard" className="w-auto h-auto" />
        </div>
        <div>
          <p></p>
          <div className="flex my-5 text-yellow-500 text-2xl">
          <GoStarFill />
          </div>
          <button className="p-3 text-customBlue border border-customBlue transition-all duration-300 ease-in-out hover:bg-customBlue hover:text-white">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
