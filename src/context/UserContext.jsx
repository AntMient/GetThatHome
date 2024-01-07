import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [userRole, setUserRole] = useState(""); 
  const [isAuthenticated, setAuthentication] = useState(false);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState(null); 

  const updateAuthentication = (authenticated, name, id) => {
    setAuthentication(authenticated);
    if (authenticated) {
      setUserName(name);
      setUserId(id); 
    }
  };

  return (
    <UserContext.Provider value={{ userRole, setUserRole, isAuthenticated, updateAuthentication, userName, userId }}> 
      {children}
    </UserContext.Provider>
  );
}
