import { Route, Routes } from "react-router-dom";
import LayoutWrapper from "../components/layout-wrapper/LayoutWrapper";
import About from "../pages/about/About";
import { Home } from "@/pages/home";
import ProductDetailsPage from "@/pages/product-details-page/ProductDetailsPage";

const Routers = () => {
  return (
    <Routes>
      
      <Route element={<LayoutWrapper />}>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Route>
    </Routes>
  );
};

export default Routers;
