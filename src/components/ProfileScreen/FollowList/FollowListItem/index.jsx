import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addUser } from "../../../../actions/known-users-action";
import "./follow-list-item.css";

const FollowListItem = ({ username }) => {
  const knownUsers = useSelector((state) => state.knownUsers);
  const dispatch = useDispatch();

  const [user, setUser] = useState();

  // TODO: Find a mechanism to update the knownUsers if anything changes.
  useEffect(() => {
    const getUserHandler = async () => {
      if (!knownUsers.has(username)) {
        await addUser(dispatch, username);
      } else {
        setUser(knownUsers.get(username));
      }
    };
    console.log("useEffect");
    getUserHandler();
  }, [knownUsers, username]);

  return (
    <div className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex flex-row align-items-center gap-2">
        <img
          src={user?.profilePicUrl}
          alt={user?.username}
          className="rounded-circle follow-avatar"
        />
        <div>
          <div className="fw-bold text-wrap">
            {user?.firstname} {user?.lastname}{" "}
            <i className="fa-solid fa-circle-check"></i>
          </div>
          @{user?.username}
        </div>
      </div>
      {user?.following ? (
        <button className="btn btn-dark btn rounded-pill">Unfollow</button>
      ) : (
        <button className="btn btn-primary btn rounded-pill">Follow</button>
      )}
    </div>
  );
};

export default FollowListItem;
