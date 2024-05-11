import PhotoGallery from "@/components/product-details/PhotoGallery";
import ProductDescription from "@/components/product-details/ProductDescription";
import ProductSummary from "@/components/product-details/ProductSummary";
import { useKeyboardContext } from "@/context/setContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const ProductDetailsPage = () => {
  const { keyboard_id } = useParams();

  const { fetchSingleKeyboard, keyboard } = useKeyboardContext();


  useEffect(() => {
    if (keyboard_id) {
      fetchSingleKeyboard(keyboard_id)
    }
  }, [keyboard_id])

  return (
    <div className="grid grid-cols-2 gap-4">
      <PhotoGallery />
      <ProductSummary />
      <div className="col-span-2">
        <ProductDescription />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
