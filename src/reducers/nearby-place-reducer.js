import {
    FIND_FAVOURITE_CAROUSEL,
    FIND_GYM_PLACES,
    FIND_RECENT_PLACES,
    FIND_RESTAURANT_PLACES
} from "../actions/nearby-places-action"

const nearbyPlaceReducer = (state = {
    recentPlaces: [], gymPlaces: [], restaurantPlaces: [],
    favouritesCarousel: [{type: "", list: []}]
}, action) => {
    switch (action.type) {
        case FIND_RECENT_PLACES:
            // state.recentPlaces = action.response;
            return {...state, recentPlaces: action.response};
        case FIND_GYM_PLACES:
            return {...state, gymPlaces: action.response};
        case FIND_RESTAURANT_PLACES:
            return {...state, restaurantPlaces: action.response};
        case FIND_FAVOURITE_CAROUSEL:
            let newFavouritesCarousel = state.favouritesCarousel
                .filter(obj => obj.type !== action.header && obj.type !== "");
            newFavouritesCarousel.push({type: action.header, list: action.response.results});
            return {...state, favouritesCarousel: newFavouritesCarousel};
        default:
            return state;
    }
}

export default nearbyPlaceReducer;