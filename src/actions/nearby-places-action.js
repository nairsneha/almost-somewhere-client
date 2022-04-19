import * as service from "../services/nearby-places-service";

export const FIND_RECENT_PLACES = "FIND_PLACES";
export const FIND_GYM_PLACES = "GYM";
export const FIND_RESTAURANT_PLACES = "RESTAURANT";

const RADIUS = 5000;
export const findPlaces = async (dispatch, placeType, params) => {
    const response = await service.findNearbyPlace(params);
    dispatch({
       type: placeType,
       response
    });
}
