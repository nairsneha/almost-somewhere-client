import axios from "axios";
import { REACT_APP_API_BASE } from "../config";

const NEARBY_PLACES_API = `${REACT_APP_API_BASE}/places/nearby`;

export const findNearbyPlace = async (params) => {
  const defaultParams = {
    lat: -71.085637,
    lon: 42.3417141,
    radius: 5000,
    type: "gym|theatre",
  };
  const safeParams = { ...defaultParams, ...params };
  const response = await axios.get(
    `${NEARBY_PLACES_API}?latitude=${safeParams.lat}&longitude=${safeParams.lon}&radius=${safeParams.radius}&type=${safeParams.type}`
  );
  return response.data.response;
};
