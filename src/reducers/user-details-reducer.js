import { CREATE_USER, DELETE_USER } from "../actions/user-details-actions";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...action.user };
    case DELETE_USER:
      return {};
    default:
      return state;
  }
};

export default userReducer;
