import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addUser, updateUser } from "../../../../actions/known-users-action";
import "./follow-list-item.css";

const FollowListItem = ({ username }) => {
  const knownUsers = useSelector((state) => state.knownUsers);
  const dispatch = useDispatch();

  const [user, setUser] = useState();

  // TODO: Find a mechanism to update the knownUsers if anything changes.
  // TODO: Idea - In the call to any action that modifies the user's state, make a call to update user action.
  useEffect(() => {
    const getUserHandler = async () => {
      if (!knownUsers.has(username)) {
        await addUser(dispatch, username);
      } else {
        setUser(knownUsers.get(username));
      }
    };
    getUserHandler();
  }, [knownUsers, username, dispatch]);

  const followOnClick = () => {
    //TODO: Replace with an actual call to API
    let currUser = { ...user };
    currUser.following = !currUser.following;
    updateUser(dispatch, currUser);
  };

  return (
    <div className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex flex-row align-items-center gap-2">
        <img
          src={user?.profilePicUrl}
          alt={user?.username}
          className="rounded-circle follow-avatar"
        />
        <div>
          <Link
            className="follow-profile-link"
            to={`/profile/${user?.username}`}
          >
            <div className="fw-bold text-wrap">
              {user?.firstname} {user?.lastname}{" "}
              <i className="fa-solid fa-circle-check"></i>
            </div>
          </Link>
          @{user?.username}
        </div>
      </div>
      {user?.following ? (
        <button
          className="btn btn-dark btn rounded-pill"
          onClick={followOnClick}
        >
          Unfollow
        </button>
      ) : (
        <button
          className="btn btn-primary btn rounded-pill"
          onClick={followOnClick}
        >
          Follow
        </button>
      )}
    </div>
  );
};

export default FollowListItem;
