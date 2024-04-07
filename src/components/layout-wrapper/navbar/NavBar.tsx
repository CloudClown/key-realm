import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const NavBar = () => {
  return (
    <div className="container mx-auto font-landingPageFont  ">
      <div className="flex items-center justify-between">
        <div className="">
          <NavLink to="/">
            <h3 className="text-3xl font-medium text-logoColor">KEY REALM</h3>
          </NavLink>
        </div>
        <nav className="">
          <div className="m-[1rem] flex justify-center ">
            <NavLink
              className="mr-[1rem] hover:bg-slate-500 rounded-md p-2"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="mr-[1rem] hover:bg-slate-500 rounded-md p-2"
              to="about"
            >
              About
            </NavLink>
            <NavLink
              className="mr-[1rem] hover:bg-slate-500 rounded-md p-2"
              to="product"
            >
              Product
            </NavLink>
            <NavLink
              className="mr-[1rem] hover:bg-slate-500 rounded-md p-2"
              to="contact"
            >
              Contact
            </NavLink>
            <NavLink to={""} className="p-2">
              <HiOutlineShoppingBag size={30} />
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
