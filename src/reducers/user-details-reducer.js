import { CREATE_USER, DELETE_USER } from "../actions/user-details-actions";

const userReducer = (state = null, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...action.user };
    case DELETE_USER:
      return null;
    default:
      return state;
  }
};

export default userReducer;
