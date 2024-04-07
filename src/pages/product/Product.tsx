import FilterCard from "@/components/product/FilterCard"
import ProductGrid from "@/components/product/ProductGrid"


const Product = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-start gap-5 my-10">
          <FilterCard/>
          <ProductGrid/>
      </div>
    </div>
  )
}

export default Product