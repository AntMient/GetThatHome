import React from "react";
import ReactDOM from "react-dom/client";

import { global, reset } from "./styles";
import App from "./App.jsx";
import { Global } from "@emotion/react";
import { UserProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <UserProvider>
    <App />
    </UserProvider>
  </React.StrictMode>
);
