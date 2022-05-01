import React from "react";
import FollowListItem from "./FollowListItem";

const FollowList = ({ usernameList }) => {
  if (!usernameList?.length) {
    return (
      <>
        <h4 className="my-2">Wow! Such An Empty :/</h4>
      </>
    );
  }
  return (
    <>
      {usernameList.map((username) => (
        <FollowListItem username={username} key={username} />
      ))}
    </>
  );
};

export default FollowList;
