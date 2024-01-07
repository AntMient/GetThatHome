import { useState } from "react";
import Header from "./Header";
import Login from "./Login";

const Layout = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div>
      <Header openLoginModal={openLoginModal}/>
      {children}
      {isLoginModalOpen && (
        <Login
          closeLoginModal={closeLoginModal}
        />
      )}
    </div>
  );
};

export default Layout;
