import PhotoGallery from "@/components/product-details/PhotoGallery";
import ProductDescription from "@/components/product-details/ProductDescription";
import ProductSummary from "@/components/product-details/ProductSummary";

const ProductDetailsPage = () => {
  return (
    <div>
      <PhotoGallery />
      <ProductSummary />
      <ProductDescription />
    </div>
  );
};

export default ProductDetailsPage;
