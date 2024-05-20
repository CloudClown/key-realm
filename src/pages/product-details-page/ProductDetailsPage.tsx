import PhotoGallery from "@/components/product-details/PhotoGallery";
import ProductDescription from "@/components/product-details/ProductDescription";
import ProductSummary from "@/components/product-details/ProductSummary";
import { useKeyboardContext } from "@/context/setContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { keyboard_slug } = useParams();

  const { fetchSingleKeyboard, keyboard } = useKeyboardContext();

  useEffect(() => {
    if (keyboard_slug) {
      fetchSingleKeyboard(keyboard_slug);
    }
  }, [keyboard_slug]);

  return (
    <div className="grid grid-cols-2 gap-4">
      <PhotoGallery />
      <ProductSummary keyboard={keyboard || null} />
      <div className="col-span-2">
        <ProductDescription keyboard={keyboard || null} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
