import axios from "axios";
// styles
import "./Home.scss";
import { useEffect, useState } from "react";
const url = "https://fakestoreapi.com/products";

interface ProductStore {
  id: number;
  title: string;
  price: number;
  image: string;
}



const Home = () => {
  const [product, setProduct] = useState<ProductStore[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      console.log(res.data)
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card-section">
      {product.map(pro => (
        <div key={pro.id} className="item-card">
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
