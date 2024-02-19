import "./NavBar.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavContainer">
      <nav className="navStyle">
        <div className="nav-text">
          <h3>Aloy</h3>
        </div>
        <div className="nav-items">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="portfolio">Portfolio</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
