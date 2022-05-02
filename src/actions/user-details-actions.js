import { getUserBio, updateUserBio } from "../services/user-bio-service";
import {
  followUser as follow,
  unfollowUser as unfollow,
} from "../services/follow-service";
import api from "../services/user-service";
import { updateUserWithUsername } from "./known-users-action";

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

export const updateUser = async (dispatch, user) => {
  const updatedUser = await updateUserBio(user);

  if (updatedUser) {
    dispatch({
      type: CREATE_USER,
      user: updatedUser,
    });
  }
};

export const followUser = async (dispatch, currentUsername, username) => {
  const response = await follow(username);

  if (response) {
    setCurrentUser(dispatch, currentUsername);
    updateUserWithUsername(dispatch, username);
  }
};

export const unfollowUser = async (dispatch, currentUsername, username) => {
  const response = await unfollow(username);

  if (response) {
    setCurrentUser(dispatch, currentUsername);
    updateUserWithUsername(dispatch, username);
  }
};
