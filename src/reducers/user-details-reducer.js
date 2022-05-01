import React from "react";
const userReducer = (state = reviews, action) => {
    switch (action.type) {
        case 'create-user':
            console.log('I am in reducer');
            console.log(action.user);
            return {...action.user};
        default:
            return {};
    }
}

export default userReducer;

