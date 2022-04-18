import * as service from "../services/common-service";

export const FIND_IMAGE = "FIND_IMAGE";

export const findImage = async (dispatch, params) => {
    console.log(params);
    return await service.findImage(params.referenceId);

}