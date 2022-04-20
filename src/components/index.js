import { Outlet } from "react-router-dom"
import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";
import nearbyPlaceReducer  from "../reducers/nearby-place-reducer";
import placeDetailReducer from "../reducers/place-detail-reducer";
import reviewsReducer from "../reducers/reviews-reducer";

const reducer = combineReducers({nearByPlaces: nearbyPlaceReducer, placeDetail: placeDetailReducer, ourReviews: reviewsReducer});
const store = createStore(reducer);

const AlmostSomewhere = () => {
    return(
        <Provider store={store}>
            <div>
                <div>
                    <h1>Nav bar</h1>
                </div>
                <div>
                    <Outlet/>
                </div>
                <div>
                    <h1>Footer</h1>
                </div>
            </div>
        </Provider>
    )
}

export default AlmostSomewhere;