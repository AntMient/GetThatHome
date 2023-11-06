import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img src={logo} alt="Logo" />
      </NavLink>
      <Navbar />
    </header>
  );
};

export default Header;
