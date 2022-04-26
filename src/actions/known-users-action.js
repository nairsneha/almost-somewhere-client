export const ADD_USER = "ADD_USER";

/**
 * Finds the user specified by the username and adds them to the list of known users.
 * @param {*} dispatch
 * @param {*} username
 */
export const addUser = async (dispatch, username) => {
  // TODO: Check if the user exists?
  // TODO: Replace with an actual API call.
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
    type: ADD_USER,
    user: dummyUser,
  });
};
