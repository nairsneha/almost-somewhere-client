import axios from "axios";
import { REACT_APP_API_BASE } from "../config";

const PLACES_API = `${REACT_APP_API_BASE}/places/details`;

export const findPlaceDetail = async (placeId) => {
  const response = await axios.get(`${PLACES_API}/${placeId}`);
  return response.data.response;
};
