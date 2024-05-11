import { KeyboardStructure } from "@/context/AllProductContextApi";
import keyboardImg from "../../assets/landing-page-img/img-1.webp";
import { GoStarFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";

interface IProductCardsProps {
  keyboard: KeyboardStructure | null;
}

const ProductCard = ({ keyboard }: IProductCardsProps) => {
  console.log(keyboard, "data of produt grid");
  const navigate = useNavigate();

  const productClick = (keyboard_id: string) => {
    navigate(`/productDetails/${keyboard_id}`);
  }

  return (
    <div className="w-[350px] mt-16 bg-slate-300  rounded-lg">
      <div className="p-5">
        {/* <Link to={`/productDetails/${keyboard?._id}`}> */}
          <div
            onClick={()=> productClick(keyboard?._id || '')}
            className="hover:bg-customBlue cursor-pointer"
          >
            <div className="">
              <img src={keyboardImg} alt="keyboard" className="w-auto h-auto" />
            </div>
            <div className="">
              <div className="flex flex-wrap gap-2 font-semibold text-[20px]">
                <p>{keyboard?.brand}</p>
                <p>{keyboard?.size}</p>
                <p>{keyboard?.type}</p>
              </div>
              <div className="flex my-5 text-yellow-500 text-2xl">
                5/{keyboard?.rating}
                <GoStarFill />
              </div>
            </div>
          </div>
        {/* </Link> */}
        <button
          onClick={() => console.log("btn clicked")}
          className="p-3 text-customBlue border border-customBlue transition-all duration-300 ease-in-out hover:bg-customBlue hover:text-white"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
