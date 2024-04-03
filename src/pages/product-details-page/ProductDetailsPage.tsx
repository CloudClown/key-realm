import { fetchSingleProduct } from "@/api/Product";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"



// ts
interface ProductStore {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductDetailsPage = () => {
  const { id: productId } = useParams();
  const [product, setProducts] = useState<ProductStore>();
  console.log(product);
  console.log(productId)

  useEffect(() => {
    fetchData()
  }, []);  

  const fetchData = async () => {
    try {


      // const res = await axios.get(`${url}/${productId}`);
      const res = await fetchSingleProduct(productId || '');

      console.log(res.data);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>{product?.title}</h1>
    </div>
  )
}

export default ProductDetailsPage