import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink to="/find">Find a home</NavLink>
          </li>
          <li>
            <NavLink to="/signup">JOIN</NavLink>
          </li>
          <li>
            <NavLink to="/login">LOGIN</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
