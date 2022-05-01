import { getUserBio } from "../services/user-bio-service";
import api from "../services/user-service";

export const CREATE_USER = "create-user";
export const DELETE_USER = "delete-user";

export const setCurrentUser = async (dispatch, username) => {
  const user = await getUserBio(username);

  dispatch({
    type: CREATE_USER,
    user,
  });
};

export const loginUser = async (dispatch, user) => {
  const username = await api.loginUserSvc(user);

  if (username) {
    setCurrentUser(dispatch, username);
  }
};

export const logoutUser = async (dispatch) => {
  localStorage.removeItem("allmostsomewhere-isLoggedIn");
  localStorage.removeItem("allmostsomewhere-username");
  localStorage.removeItem("allmostsomewhere-token");

  dispatch({
    type: DELETE_USER,
  });
};
