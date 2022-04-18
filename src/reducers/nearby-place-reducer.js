import {FIND_PLACES} from "../actions/nearby-places-action"
const nearbyPlaceReducer = (state = [], action) => {
    switch (action.type){
        case FIND_PLACES:
            return action.response;
        default:
            return state;
    }
}

export default nearbyPlaceReducer;