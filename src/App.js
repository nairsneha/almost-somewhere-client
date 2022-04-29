import React from "react";
import './App.css';
// import './vendors/bootstrap/css/bootstrap.min.css';
// import './vendors/bootstrap/js/bootstrap.bundle.min';
import './vendors/bootstrap-theme/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import AlmostSomewhere from './components';
import HomeScreen from "./components/HomeScreen"
import DetailsScreen from "./components/DetailsScreen"
import SignUp from "./components/SignupScreen/index";
import Login from "./components/LoginScreen/index"
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
       return (
         <BrowserRouter>
           <div className="container">
              <Routes>
                     <Route path="/"
                        element={<AlmostSomewhere/>}>
                        <Route index
                              element={<HomeScreen/>}/>
                        <Route path="detail/:id"
                        element={<DetailsScreen/>}/>
                     </Route>

                  <Route path="/signup"
                         element={<SignUp/>} />

                  <Route path="/login"
                         element={<Login/>} />

              </Routes>
           </div>
         </BrowserRouter>
       );
}
      
export default App;
