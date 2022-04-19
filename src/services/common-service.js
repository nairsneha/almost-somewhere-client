import axios from 'axios';

// const API_BASE = process.env.REACT_APP_API_BASE || "http://almost-somewhere.herokuapp.com";
const API_BASE ="http://almost-somewhere.herokuapp.com";
const PHOTOS_API = `${API_BASE}/places/photo`;

//TODO remove if unused
export const findImage = async (referenceId, maxHeight= 1000) => {
    const response = await axios.get(`${PHOTOS_API}?photo_reference=${referenceId}&maxheight=${maxHeight}`);
    return `${PHOTOS_API}?photo_reference=${referenceId}&maxheight=${maxHeight}`;
}
