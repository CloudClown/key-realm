// styles
import "./Home.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProduct } from "@/api/ProductApi";

interface ProductStore {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductStore[]>([]);
  console.log(products);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetchProduct();
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const goToProduct = (productId: number) => {
    console.log(productId);

    navigate(`product/${productId}`);
  };

  return (
    <div className="card-section">
      {products.map((pro) => (
        <div
          key={pro.id}
          className="item-card"
          onClick={() => goToProduct(pro?.id)}
        >
          <div className="card--img__container">
            <img className="card-img" src={pro.image} alt="chair" />
          </div>
          <div className="item-details">
            <div>
              <p className="item-text">{pro.title}</p>
              <p className="item-text">price: {pro.price}</p>
            </div>
            <div className="card-btn__container">
              <button className="item-btn">+</button>
              <span id="quantity">1</span>
              <button className="item-btn">-</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
