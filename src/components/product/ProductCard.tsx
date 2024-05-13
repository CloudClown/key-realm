import { KeyboardStructure } from "@/models/keyboard.model";
import keyboardImg from "../../assets/landing-page-img/img-1.webp";
import { GoStarFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "@/context/setContext";
import { ICart } from "@/models/cart.model";

interface IProductCardsProps {
  keyboard: KeyboardStructure | null;
}

const ProductCard = ({ keyboard }: IProductCardsProps) => {
  const navigate = useNavigate();
  const { cart ,addToCart } = useCartContext();
  console.log('i love you: ',cart)

  const productClick = (keyboard_slug: string) => {
    navigate(`/productDetails/${keyboard_slug}`);
  };

  const addCart = (keyboard: KeyboardStructure | null) => {
    const product = {
      ...keyboard,
      quantity: 1,
    }

    addToCart(product)

  }

  return (
    <div className="w-[350px] mt-16 bg-slate-300  rounded-lg">
      <div className="p-5">
        {/* <Link to={`/productDetails/${keyboard?._id}`}> */}
        <div
          onClick={() => productClick(keyboard?.keyboard_slug || "")}
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
          onClick={() => addCart(keyboard)}
          className="p-3 text-customBlue border border-customBlue transition-all duration-300 ease-in-out hover:bg-customBlue hover:text-white"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;


/* 
here what made first mistake is, i use setCart direct.
that time it throw me an error of type not matchi of iCart
so gpt gave a solution that i should crate a addCart function and now i don't know what to 
do with this function
if i set directly to cart then its throwing error of type not assignable 
*/