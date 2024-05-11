import { Route, Routes } from "react-router-dom";
import LayoutWrapper from "../components/layout-wrapper/LayoutWrapper";
import About from "../pages/about/About";
import { Home } from "@/pages/home";
import ProductDetailsPage from "@/pages/product-details-page/ProductDetailsPage";
import LandingPage from "@/landing-page/LandingPage";
import Product from "@/pages/product/Product";
import Cart from "@/components/cart/Cart";

const Routers = () => {
  return (
    <Routes>
      <Route element={<LayoutWrapper />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productDetails/:id" element={<ProductDetailsPage />} />
        <Route path="/productDetails" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default Routers;
