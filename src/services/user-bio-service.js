export const getUserBio = async (username) => {
  // TODO: hit the actual API
  return {
    username: username,
    firstname: "John",
    lastname: "Doe",
    followers: ["sneha"],
    following: ["sneha"],
    profilePicUrl:
      "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/13/1490989105-twitter1.jpg?resize=480:*",
    bannerPicUrl: "https://pbs.twimg.com/media/D-jnKUPU4AE3hVR.jpg",
  };
};
