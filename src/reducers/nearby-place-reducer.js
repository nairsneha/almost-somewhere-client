import {
    FIND_FAVOURITE_CAROUSEL, FIND_PLACES_BY_QUERY,
    FIND_RECENT_PLACES
} from "../actions/nearby-places-action"

const nearbyPlaceReducer = (state = {
    recentPlaces: [], gymPlaces: [], restaurantPlaces: [],
    favouritesCarousel: [{type: "", list: []}], searchResult: []
}, action) => {
    switch (action.type) {
        case FIND_RECENT_PLACES:
            return {...state, recentPlaces: action.response};
        case FIND_PLACES_BY_QUERY:
            return {...state, searchResult: action.response};
        case FIND_FAVOURITE_CAROUSEL:
            let newFavouritesCarousel = state.favouritesCarousel
                .filter(obj => obj.type !== action.header && obj.type !== "");
            newFavouritesCarousel = [{type: action.header, list: action.response.results},...newFavouritesCarousel];
            return {...state, favouritesCarousel: newFavouritesCarousel};
        default:
            return state;
    }
}

export default nearbyPlaceReducer;