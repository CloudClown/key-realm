import PhotoGallery from "@/components/product-details/PhotoGallery";
import ProductDescription from "@/components/product-details/ProductDescription";
import ProductSummary from "@/components/product-details/ProductSummary";
import { createContext } from "react";

export const NameContext = createContext();
export const SecondContext = createContext();

const ProductDetailsPage = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <NameContext.Provider value={"context passed"}>
        <SecondContext.Provider value={'second context passed'}>
        <PhotoGallery />
        <ProductSummary />
        <div className="col-span-2">
          <ProductDescription />
        </div>
        </SecondContext.Provider>
      </NameContext.Provider>
    </div>
  );
};

export default ProductDetailsPage;
