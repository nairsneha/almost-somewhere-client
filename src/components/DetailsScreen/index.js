import React from "react"
import ImageCarousel from "./components/carousel";
import PlaceDetails from "./components/place-details";
import ReviewCardList from "./components/review-list";


const DetailsScreen = () => {
    return(
        <div>
            <ImageCarousel/>
            <PlaceDetails/>
            <ReviewCardList/>
        </div>
    )
}
export default DetailsScreen