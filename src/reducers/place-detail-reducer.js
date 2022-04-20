import {FIND_PLACE_DETAIL} from "../actions/place-details-action"

export default  (state = {}, action) => {
    switch (action.type) {
        case FIND_PLACE_DETAIL:
            console.log("reducer called with", action.response);
            return {...state,...action.response};
        default:
            return state;
    }
}
