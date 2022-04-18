import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;
const PLACES_API = `${API_BASE}/delails/:id`;

export const findAllPlaceDetails = async () => {
    const response = await axios.get(PLACES_API);
    const details = response.data;
    return details;
}