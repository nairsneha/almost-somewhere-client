import React from "react";
import "./follow-list-item.css";

const FollowListItem = ({ username }) => {
  // TODO: Create a reducer that stores a list of known users so that we dont have to hit the api everytime.
  // TODO: Create a hook to fetch the user from the known list of users if the user exists else call API.

  // TODO: Get an actual user from the api using username.

  //TODO: Remove the dummy user
  const user = {
    username: username,
    firstname: "John",
    lastname: "Doe",
    following: true,
    profilePicUrl:
      "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/13/1490989105-twitter1.jpg?resize=480:*",
  };
  return (
    <div className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex flex-row align-items-center gap-2">
        <img
          src={user.profilePicUrl}
          alt={user.username}
          className="rounded-circle follow-avatar"
        />
        <div>
          <div className="fw-bold text-wrap">
            {user.firstname} {user.lastname}{" "}
            <i className="fa-solid fa-circle-check"></i>
          </div>
          @{user.username}
        </div>
      </div>
      {user.following ? (
        <button className="btn btn-primary btn rounded-pill">Unfollow</button>
      ) : (
        <button className="btn btn-secondary btn rounded-pill">Follow</button>
      )}
    </div>
  );
};

export default FollowListItem;
