import React from "react";

const LocationCard = ({
    locdetails = {
        url: "",
        title: "Web Development",
        image: "./images/tokyo-your-name.jpg",
    }
}) => {

    return(
        <>
        <div className="col">
            <div className="card h-100">
            <img src={locdetails.image} className="card-img-top" alt="..." height="250px"/>
            <div className="card-body">
                <h5 className="card-title">{locdetails.title}</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            </div>
            </div>
            </div>
        </>
    )
}

export default LocationCard;