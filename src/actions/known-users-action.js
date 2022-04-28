export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";

/**
 * Finds the user specified by the username and adds them to the list of known users.
 * Doesn't add the user if the user already exists in our list. DO NOT use this _update_ users.
 * @param {*} dispatch
 * @param {*} username
 */
export const addUser = async (dispatch, username) => {
  // TODO: Replace with an actual API call.
  const dummyUser = {
    username: username,
    firstname: "John",
    lastname: "Doe",
    followers: ["sneha"],
    following: ["sneha"],
    profilePicUrl:
      "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/13/1490989105-twitter1.jpg?resize=480:*",
    bannerPicUrl: "https://pbs.twimg.com/media/D-jnKUPU4AE3hVR.jpg",
  };
  dispatch({
    type: ADD_USER,
    user: dummyUser,
  });
};

/**
 * Updates the known users by re-fetching the user with the given username from the API.
 *
 * @param {*} dispatch
 * @param {*} username username of the user to be updated.
 */
export const updateUserWithUsername = async (dispatch, username) => {
  // TODO: Make an actual API call.
  const dummyUser = {
    username: username,
    firstname: "John",
    lastname: "Doe",
    followers: ["sneha"],
    following: ["sneha"],
    profilePicUrl:
      "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/13/1490989105-twitter1.jpg?resize=480:*",
  };

  dispatch({
    type: UPDATE_USER,
    user: dummyUser,
  });
};

/**
 * Updates the known users using the user given to this method.
 * @param {*} dispatch
 * @param {*} user the updated user.
 */
export const updateUser = async (dispatch, user) => {
  const updatedUser = { ...user };
  dispatch({
    type: UPDATE_USER,
    user: updatedUser,
  });
};
