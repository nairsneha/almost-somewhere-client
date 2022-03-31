import LocationCard from "./location-card";
import locdetails from "../../../data/loc-card-list-data.json";

const LocationCardList = () => {
    const CARD_LIMIT = 6;
    let loc =  locdetails.filter((val,index) => index < CARD_LIMIT);
    return (

        <>
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {
            loc.map(locdetail => {
                locdetail._id = new Date().getTime() + Math.random() + "" 
                return(<LocationCard locdetails={locdetail} key={locdetail._id}/>
                );
            })
        }
        </div>
        </>
); }

export default LocationCardList;

