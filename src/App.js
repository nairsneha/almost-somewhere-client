import "./App.css";
// import './vendors/bootstrap/css/bootstrap.min.css';
// import './vendors/bootstrap/js/bootstrap.bundle.min';
import "./vendors/bootstrap-theme/bootstrap.min.css";
import AlmostSomewhere from "./components";
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileScreen from "./components/ProfileScreen";
import EditProfileScreen from "./components/EditProfileScreen";

// TODO: Create private Routes
// TODO: Profile with ID

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<AlmostSomewhere />}>
            <Route index element={<HomeScreen />} />
            <Route path="detail/:id" element={<DetailsScreen />} />
            <Route path="profile">
              <Route index element={<ProfileScreen />} />
              <Route path=":username" element={<ProfileScreen />} />
              <Route path="edit" element={<EditProfileScreen />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
