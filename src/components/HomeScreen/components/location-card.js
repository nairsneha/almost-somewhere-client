import React from "react";

const LocationCard = ({
                          locdetails = {
                              name: "Web Development",
                              image: "./images/tokyo-your-name.jpg",
                          }
                      }) => {
    console.log("asd");
    console.log(locdetails);
    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <img src={locdetails.image} className="card-img-top" alt="..." height="250px"/>
                    <div className="card-body">
                        <h5 className="card-title">{locdetails.name}</h5>
                        {locdetails.description && <p className="card-text">{locdetails.description}</p>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LocationCard;