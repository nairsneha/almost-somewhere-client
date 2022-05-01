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
import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";
import nearbyPlaceReducer  from "./reducers/nearby-place-reducer";
import placeDetailReducer from "./reducers/place-detail-reducer";
import reviewsReducer from "./reducers/reviews-reducer";
import userReducer from "./reducers/user-details-reducer";
// import NavBar from "./navBar/index.js";
const reducer = combineReducers({nearByPlaces: nearbyPlaceReducer, placeDetail: placeDetailReducer, ourReviews: reviewsReducer,userStore:userReducer});
const store = createStore(reducer);
function App() {
       return (
           <Provider store={store}>
         <BrowserRouter>

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
         </BrowserRouter>
           </Provider>
       );
}
      
export default App;
