import FilterCard from "@/components/product/FilterCard";
import ProductGrid from "@/components/product/ProductGrid";
import { useKeyboardContext } from "@/context/setContext";

import { useEffect } from "react";

const Product = () => {
  const { fetchKeyboards } = useKeyboardContext();

  // console.log("keyboards", keyboards);

  useEffect(() => {
    fetchKeyboards();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex justify-start gap-5 my-10">
        <FilterCard />
        <ProductGrid />
      </div>
    </div>
  );
};

export default Product;