import React, {useEffect} from "react"
import ImageCarousel from "./components/carousel";
import PlaceDetails from "./components/place-details";
import ReviewCardList from "./components/review-list";
import {findPlaceDetail} from "../../actions/place-details-action";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


const DetailsScreen = () => {
    const placeId = useParams().id;
    const dispatch = useDispatch();
    const findDetail = () => {
        findPlaceDetail(dispatch, placeId);
    }
    useEffect(() => findDetail(), []);

    const placeDetail = useSelector(({placeDetail}) => placeDetail);
    return (
        <div>
            <ImageCarousel/>
            <PlaceDetails placeDetail={placeDetail}/>
            <ReviewCardList/>
        </div>
    )
}
export default DetailsScreen