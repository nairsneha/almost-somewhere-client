import * as service from "../services/nearby-places-service";

export const FIND_PLACES = "FIND_PLACES";
const RADIUS = 5000;
export const findPlaces = async (dispatch, params) => {
    console.log(params);
    const response = await service.findNearbyPlace(params);
    dispatch({
       type: FIND_PLACES,
       response
    });
}