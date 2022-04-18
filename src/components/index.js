import { Outlet } from "react-router-dom"
import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";
import nearbyPlaceReducer  from "../reducers/nearby-place-reducer";

const reducer = combineReducers({nearByPlaces: nearbyPlaceReducer})
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