import { Outlet } from "react-router-dom";
import Navbar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import './LayoutWrapper.scss';

const LayoutWrapper = () => {
  return (
    <div className="layout">
      <Navbar />
      <div>
        <Outlet />
      </div>          
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
