import { Route, Routes } from "react-router-dom";
import LayoutWrapper from "../components/layout-wrapper/LayoutWrapper";
import About from "../pages/about/About";
import { Home } from "@/pages/home";

 

const Routers = () => {
  return <Routes>
    <Route element={<LayoutWrapper/>}>
    <Route path="/home" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    </Route>
  </Routes>;
};

export default Routers;
