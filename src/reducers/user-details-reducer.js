import React from "react";
const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'create-user':
            return {...state,...action.user};
        default:
            return state;
    }
}

export default userReducer;

