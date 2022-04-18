import React, {useEffect} from "react";
import CardCarouselList from "./components/card-carousel-list";
import LocationCardList from "./components/location-card-list";
import {useDispatch, useSelector} from "react-redux";
import {findPlaces} from "../../actions/nearby-places-action";

const HomeScreen = () => {
    const NearByPlacesList = useSelector(({nearByPlaces}) => nearByPlaces);
    const dispatcher = useDispatch();
    const params = {};
    useEffect(() => findPlaces(dispatcher, params), []);
    console.log(NearByPlacesList);
    return(
        <div>
            <LocationCardList locdetails={NearByPlacesList.results}/>
            <CardCarouselList/>
        </div>
    )}

export default HomeScreen;