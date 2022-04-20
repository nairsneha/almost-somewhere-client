const API_BASE ="http://almost-somewhere.herokuapp.com";
const PHOTOS_API = `${API_BASE}/places/photo`;

export const findImage = (referenceId, maxH = 1000,maxW = 1000) => {
    if(referenceId.includes(".")){
        return referenceId;
    }else{
        const imageSrc = `${PHOTOS_API}?photo_reference=${referenceId}&maxheight=${maxH}&maxwidth=${maxW}`;
        return imageSrc;
    }


}