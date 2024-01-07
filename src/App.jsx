import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Notfound from "./Pages/Notfound";
import InfoProperty from "./Pages/DataProperty";
import Createproperty from "./Pages/Create-property";
import ProfilePage from "./Pages/Profile";
import SavedProperties from "./Pages/SavedProperties";
import FindTest from "./Pages/FindTest";
import EditProperty from "./Pages/Edit-property";
import Layout from "./Components/Layout";
import MyPropertiesPage from "./Pages/MyProperties";

function App() {
  return (
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/find" element={<FindTest />} />
          <Route path="/create-property" element={<Createproperty />} />
          <Route path="/edit-property/:id" element={<EditProperty />} />
          <Route path="/property/:id" element={<InfoProperty />} />
          <Route path="/property" element={<InfoProperty />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/saved-properties" element={<SavedProperties />} />
          <Route path="/my-properties" element={<MyPropertiesPage />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
  );
}
export default App;
