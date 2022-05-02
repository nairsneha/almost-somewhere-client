import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addUser } from "../../../../actions/known-users-action";
import {
  followUser,
  unfollowUser,
} from "../../../../actions/user-details-actions";
import "./follow-list-item.css";

const FollowListItem = ({ username }) => {
  const knownUsers = useSelector((state) => state.knownUsers);
  const user = useSelector((state) => state.userStore);
  const dispatch = useDispatch();

  const [otherUser, setOtherUser] = useState();

  const followOnClick = () => {
    followUser(dispatch, user?.username, username);
  };

  const unfollowOnClick = () => {
    unfollowUser(dispatch, user?.username, username);
  };

  useEffect(() => {
    const getUserHandler = async () => {
      if (!knownUsers.has(username)) {
        await addUser(dispatch, username);
      } else {
        setOtherUser(knownUsers.get(username));
      }
    };
    getUserHandler();
  }, [knownUsers, username, dispatch]);

  return (
    <div className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex flex-row align-items-center gap-2">
        <img
          src={otherUser?.profilePicUrl}
          alt={otherUser?.username}
          className="rounded-circle follow-avatar"
        />
        <div>
          <Link
            className="follow-profile-link"
            to={`/profile/${otherUser?.username}`}
          >
            <div className="fw-bold text-wrap">
              {otherUser?.firstname} {otherUser?.lastname}{" "}
              <i className="fa-solid fa-circle-check"></i>
            </div>
          </Link>
          @{otherUser?.username}
        </div>
      </div>
      {user &&
        user?.username !== username &&
        (user?.following.includes(username) ? (
          <button
            className="btn btn-dark btn rounded-pill"
            onClick={unfollowOnClick}
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
        ))}
    </div>
  );
};

export default FollowListItem;
