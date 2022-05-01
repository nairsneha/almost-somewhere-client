import React from "react";
import FollowListItem from "./FollowListItem";

const FollowList = ({ usernameList }) => {
  return (
    <>
      {usernameList.map((username) => (
        <FollowListItem username={username} key={username} />
      ))}
    </>
  );
};

export default FollowList;
