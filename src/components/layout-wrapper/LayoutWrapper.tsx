import { Outlet } from "react-router-dom";
import Navbar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import styles from "./LayoutWrapper.module.scss";
import SideCart from "../SideCart";
import { useState } from "react";

const LayoutWrapper = () => {
  const [cartSideBar, setCartSideBar] = useState(false);
  
  const handleCart = () => {
    console.log("clicked");
    setCartSideBar(!cartSideBar);
  };

  return (
    <div className={styles.layout}>
      <SideCart
        isOpen={cartSideBar}
        onClose={() => setCartSideBar(!cartSideBar)}
      />
      <Navbar onClose={handleCart}/>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
