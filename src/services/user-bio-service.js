import axios from "axios";
import { REACT_APP_API_BASE } from "../config";

export const getUserBio = async (username) => {
  const baseUrl = `${REACT_APP_API_BASE}/user/${username}/bio`;

  const headers = {};
  const token = localStorage.getItem("allmostsomewhere-token");

  if (token) {
    headers["Authorization"] = token;
  }

  const response = await axios.get(baseUrl, { headers });

  if (response?.data?.isOk) {
    return response?.data?.response;
  }

  return {};
};
