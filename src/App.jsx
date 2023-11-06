import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Notfound from "./Pages/Notfound";
import Find from "./Pages/Find";
import Login from "./Components/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/find" element={<Find />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
