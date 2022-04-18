import LocationCard from "./location-card";
const LocationCardList = ({locDetails=[
    {name: "Web Development",
    photos: [{photo_reference:'../../../../public/images/tokyo-your-name.jpg'}
    ]
}]}) => {
    const CARD_LIMIT = 6;
    console.log(locDetails);
    let filteredLocation =  locDetails.filter((val,index) => index < CARD_LIMIT);
    console.log("filteredloc");
    console.log(filteredLocation);
    return (
        <>
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {
            filteredLocation.map(loc => {
                let id = new Date().getTime() + Math.random() + ""
                return(
                    <LocationCard locDetail={loc} key={id}/>
                );
            })
        }
        </div>
        </>
); }

export default LocationCardList;

