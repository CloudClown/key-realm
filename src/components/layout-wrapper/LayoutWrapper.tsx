import { Outlet } from "react-router-dom";
import Navbar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import styles from "./LayoutWrapper.module.scss";

const LayoutWrapper = () => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
