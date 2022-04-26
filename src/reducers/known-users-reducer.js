import { ADD_USER } from "../actions/known-users-action";

/**
 * Keeps track of the info of users we've came accross till now. Acts as a caching mechanism to reduce API calls.
 *
 * @param {Map<String, User>} state A hashmap where the keys denote the usernames and values are the respective users.
 * @param {{type, <payload>}} action
 * @returns
 */
const knownUsersReducer = (state = new Map(), action) => {
  switch (action.type) {
    case ADD_USER:
      let newUser = action.user;
      // The user already exists in our map
      if (state.has(newUser.username)) {
        // No need to change anything
        return new Map(state);
      }
      // TODO: Add actual logic to see if the current user follows this user.
      newUser.following = false;
      const stateCopy = new Map(state);
      stateCopy.set(newUser.username, newUser);
      return stateCopy;
    default:
      return new Map(state);
  }
};
export default knownUsersReducer;
