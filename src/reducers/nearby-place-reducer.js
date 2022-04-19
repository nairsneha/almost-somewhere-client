import {FIND_GYM_PLACES, FIND_RECENT_PLACES, FIND_RESTAURANT_PLACES} from "../actions/nearby-places-action"

const nearbyPlaceReducer = (state = {recentPlaces:[],gymPlaces:[],restaurantPlaces:[]}, action) => {
    switch (action.type) {
        case FIND_RECENT_PLACES:
            // state.recentPlaces = action.response;
            let newS = {...{state},recentPlaces:action.response};
            console.log(newS);
            return newS;
        case FIND_GYM_PLACES:
            // state.gymPlaces = action.response;
            return {...{state},gymPlaces:action.response};
            // return state;
        case FIND_RESTAURANT_PLACES:
            return {...{state},restaurantPlaces:action.response};
            // state.restaurantPlaces = action.response;
            // return state;
        default:
            return state;
    }
}

export default nearbyPlaceReducer;