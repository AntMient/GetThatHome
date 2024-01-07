import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { colors } from "../styles";
import {
  RiHeartFill,
  RiHome8Line,
  RiLogoutCircleLine,
  RiUserAddLine,
  RiUserLine,
  RiUserReceived2Line,
} from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { Button1, Button2, Button4 } from "./Buttom";
import { logout } from "../Services/auth-service";
import { useUserContext } from "../context/UserContext";

const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${colors.shadow["short"]};
  padding: 5px 8rem;
`;

const Logo = styled.img`
  transition: all 0.8s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Navbar1 = styled.nav`
  margin: 0;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    li {
      margin-right: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      svg {
        font-size: 24px;
      }
      a {
        text-decoration: none;
        color: ${colors.gray["solid"]};
        font-size: 14px;
      }
    }
  }
`;
function Header({ openLoginModal }) {
  const { userRole, isAuthenticated } = useUserContext();

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("Sesión cerrada con éxito");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error al cerrar la sesión:", error);
      });
  };
  return (
    <header>
      <Wrapper>
        <NavLink to="/">
          <Logo src={logo} alt="Logo" />
        </NavLink>
        <Navbar1>
          <ul>
            {isAuthenticated ? (
              userRole === "Landlord" || userRole === 1 ? (
                <>
                  <li>
                    <NavLink style={{ display: "flex" }} to="/find">
                      <Button4 style={{ textTransform: "uppercase" }}>
                        <FiSearch />
                        Find a Home
                      </Button4>
                    </NavLink>
                  </li>
                  <li>
                    <Button2
                      style={{ width: 130, textTransform: "uppercase" }}
                      onClick={handleLogout}
                    >
                      <RiLogoutCircleLine />
                      Logout
                    </Button2>
                  </li>
                  <li>
                    <NavLink style={{ display: "flex" }} to="/my-properties">
                      <Button1
                        style={{ width: 191, textTransform: "uppercase" }}
                      >
                        <RiHome8Line /> My Properties
                      </Button1>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink style={{ display: "flex" }} to="/profile">
                      <Button1
                        style={{ width: 129, textTransform: "uppercase" }}
                      >
                        {" "}
                        <RiUserLine />
                        Profile
                      </Button1>
                    </NavLink>
                  </li>
                </>
              ) : userRole === "Home seeker" || userRole === 2 ? (
                <>
                  <li>
                    <NavLink style={{ display: "flex" }} to="/find">
                      <Button4 style={{ textTransform: "uppercase" }}>
                        <FiSearch />
                        Find a Home
                      </Button4>
                    </NavLink>
                  </li>
                  <li>
                    <Button2
                      style={{ width: 130, textTransform: "uppercase" }}
                      onClick={handleLogout}
                    >
                      <RiLogoutCircleLine />
                      Logout
                    </Button2>
                  </li>
                  <li>
                    <NavLink style={{ display: "flex" }} to="/saved-properties">
                      <Button1
                        style={{ width: 218, textTransform: "uppercase" }}
                      >
                        {" "}
                        <RiHeartFill /> Saved Properties
                      </Button1>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink style={{ display: "flex" }} to="/profile">
                      <Button1
                        style={{ width: 129, textTransform: "uppercase" }}
                      >
                        {" "}
                        <RiUserLine />
                        Profile
                      </Button1>
                    </NavLink>
                  </li>
                </>
              ) : null
            ) : (
              <>
                <li>
                  <NavLink style={{ display: "flex" }} to="/find">
                    <Button4 style={{ textTransform: "uppercase" }}>
                      <FiSearch />
                      Find a Home
                    </Button4>
                  </NavLink>
                </li>
                <li>
                  <NavLink style={{ display: "flex" }} to="/signup">
                    <Button2 style={{ width: 101, textTransform: "uppercase" }}>
                      <RiUserAddLine />
                      JOIN
                    </Button2>
                  </NavLink>
                </li>
                <li>
                  <Button1
                    style={{ width: 101, textTransform: "uppercase" }}
                    onClick={openLoginModal}
                  >
                    <RiUserReceived2Line />
                    LOGIN
                  </Button1>
                </li>
              </>
            )}
          </ul>
        </Navbar1>
      </Wrapper>
    </header>
  );
}

export default Header;
