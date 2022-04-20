import React from "react";
import "./carousel.css"
import {Rating} from "react-simple-star-rating";
import {findImage} from "../../../actions/common-action";

const ImageCarousel = ({
                           placeDetails
                       }) => {
    const details = updateWithDefaultValues(placeDetails);
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {details.photos.map((image, index) =>
                            <div key={new Date().getTime() + Math.random()}
                                 className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img
                                    key={image.photoReference} src={findImage(image.photoReference)}
                                    className="d-block w-100 active" height="400px" alt="...">
                                </img>
                            </div>
                        // className={`d-block w-100 active ${index === 0 ? 'active' : ''}`} alt="...">
                    )}
                    {/*<div className="carousel-item active">*/}
                    {/*    */}

                    {/*</div>*/}
                    {/*<div className="carousel-item">*/}
                    {/*    <img src="../images/inspiration4.jpg" className="d-block w-100" alt="...">*/}
                    {/*    </img>*/}
                    {/*</div>*/}
                    {/*<div className="carousel-item">*/}
                    {/*    <img src="../images/inspiration4.jpg" className="d-block w-100" alt="...">*/}
                    {/*    </img>*/}
                    {/*</div>*/}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="position-absolute left-corner">
                <span className="fs-3 fw-bold text-white">{details.name}</span><br/>
                <span><Rating
                    readonly={true}
                    allowHover={false}
                    ratingValue={details.rating * 20}/></span>
            </div>

        </>
    )
}

const updateWithDefaultValues = (placeDetail) => {
    const defObj = {
        name: "YMCA of Greater Boston - Huntington Ave",
        photos: [{photoReference: "../images/tokyo-your-name.jpg"}, {photoReference: "../images/inspiration4.jpg"}],
        "rating": 4.0
    };
    return {...defObj, ...placeDetail};
}

export default ImageCarousel;