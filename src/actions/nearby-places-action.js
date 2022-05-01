import * as service from "../services/nearby-places-service";

export const FIND_RECENT_PLACES = "FIND_PLACES";
export const FIND_GYM_PLACES = "GYM";
export const FIND_RESTAURANT_PLACES = "RESTAURANT";
export const FIND_FAVOURITE_CAROUSEL = "FAVOURITES";


export const findPlaces = async (dispatch, placeType, params) => {
    const response = await service.findNearbyPlace(params);
    dispatch({
       type: placeType,
       header: params.type,
       response
    });
}
