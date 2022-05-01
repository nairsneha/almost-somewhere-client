import React from "react";
import "./App.css";
import "./vendors/bootstrap-theme/bootstrap.min.css";
import AlmostSomewhere from "./components";
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";
import SignUp from "./components/SignupScreen/index";
import Login from "./components/LoginScreen/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import nearbyPlaceReducer from "./reducers/nearby-place-reducer";
import placeDetailReducer from "./reducers/place-detail-reducer";
import reviewsReducer from "./reducers/reviews-reducer";
import userReducer from "./reducers/user-details-reducer";
import ProfileScreen from "./components/ProfileScreen";
import EditProfileScreen from "./components/EditProfileScreen";
import knownUsersReducer from "./reducers/known-users-reducer";
import RequireAuth from "./components/RequireAuth";

const reducer = combineReducers({
  nearByPlaces: nearbyPlaceReducer,
  placeDetail: placeDetailReducer,
  ourReviews: reviewsReducer,
  userStore: userReducer,
  knownUsers: knownUsersReducer,
});
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AlmostSomewhere />}>
            <Route index element={<HomeScreen />} />

            <Route
              path="detail/:id"
              element={
                <>
                  <RequireAuth>
                    <DetailsScreen />
                  </RequireAuth>
                </>
              }
            />

            <Route path="profile">
              <Route
                index
                element={
                  <>
                    <RequireAuth>
                      <ProfileScreen />
                    </RequireAuth>
                  </>
                }
              />
              <Route path=":username" element={<ProfileScreen />} />
              <Route
                path="edit"
                element={
                  <RequireAuth>
                    <EditProfileScreen />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
