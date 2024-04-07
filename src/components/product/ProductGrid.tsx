// import { FiChevronDown } from "react-icons/fi";

import ProductGridHeader from "@/components/product/ProductGridHeader";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  return (
    <div className="w-screen font-landingPageFont">
     <ProductGridHeader/>
      <ProductCard />
    </div>
  );
};

export default ProductGrid;
