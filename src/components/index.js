import React from "react";
import { Outlet } from "react-router-dom"
import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";
import nearbyPlaceReducer  from "../reducers/nearby-place-reducer";
import placeDetailReducer from "../reducers/place-detail-reducer";
import reviewsReducer from "../reducers/reviews-reducer";
import NavBar from "./navBar/index.js";
const reducer = combineReducers({nearByPlaces: nearbyPlaceReducer, placeDetail: placeDetailReducer, ourReviews: reviewsReducer});
const store = createStore(reducer);

const AlmostSomewhere = () => {
    return(<>
        <NavBar />
        <Provider store={store}>
            <div>
                <div>

                     access Token: {localStorage.getItem('allmostsomewhere-token')} <br />
                    username: {localStorage.getItem('allmostsomewhere-username')} <br />
                    isLoggedIn: {localStorage.getItem('allmostsomewhere-isLoggedIn')} <br />
                </div>
                <div>
                    <Outlet/>
                </div>
                <div>
                    <h1>Footer</h1>
                </div>
            </div>
        </Provider>
        </>
    )
}

export default AlmostSomewhere;