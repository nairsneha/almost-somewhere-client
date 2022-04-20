import * as service from "../services/place-details-service";

export const FIND_PLACE_DETAIL = "PLACE_DETAIL";


export const findPlaceDetail = async (dispatch, placeId) => {
    const response = await service.findPlaceDetail(placeId);
    dispatch({
        type: FIND_PLACE_DETAIL,
        response
    });
}
