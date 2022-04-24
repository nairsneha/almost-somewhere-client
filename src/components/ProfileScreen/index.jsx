import React from "react";
import profile from "./demoProfile.json";
import Profile from "./Profile";

// TODO: Replace demo profile data with actual user profile data

const ProfileScreen = () => {
  return (
    <>
      <Profile profile={profile} />
    </>
  );
};

export default ProfileScreen;
