import axios from 'axios';

// const API_BASE = process.env.REACT_APP_API_BASE || "http://almost-somewhere.herokuapp.com";
const API_BASE ="http://almost-somewhere.herokuapp.com";
const PLACES_API = `${API_BASE}/places/details`;



export const findPlaceDetail = async (placeId) => {
    const response = await axios.get(`${PLACES_API}/${placeId}`);
    console.log(response);
    return response.data.response;
}


