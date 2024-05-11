// import { FiChevronDown } from "react-icons/fi";

import ProductGridHeader from "@/components/product/ProductGridHeader";
import ProductCard from "./ProductCard";
import { useKeyboardContext } from "@/context/setContext";

const ProductGrid = () => {
  const { keyboards } = useKeyboardContext();
  console.log("data from product grid- ", keyboards);

  return (
    <div className="w-screen font-landingPageFont">
      <ProductGridHeader />

      <div className="flex flex-row gap-4">
        {keyboards?.map((keyboard) => {
          return <ProductCard keyboard={keyboard} key={keyboard?._id} />;
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
