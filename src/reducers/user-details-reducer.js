import React from "react";
const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'create-user':
            console.log('I am in reducer');
            console.log(action.user);
            return {...state,...action.user};
        default:
            return state;
    }
}

export default userReducer;

