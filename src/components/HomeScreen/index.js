import React, {useEffect, useState} from "react";
import CardCarouselList from "./components/card-carousel-list";
import LocationCardList from "./components/location-card-list";
import {useDispatch, useSelector} from "react-redux";
import {findPlaces} from "../../actions/nearby-places-action";
import NearbyPlaceReducer from "../../reducers/nearby-place-reducer";

const HomeScreen = () => {
    const NearByPlacesList = useSelector(({nearByPlaces}) => nearByPlaces);
    const dispatcher = useDispatch();
    const params = {};
    useEffect(() => findPlaces(dispatcher, params), []);
    console.log(NearByPlacesList.results);

    return(
        <div>
            <LocationCardList locDetails={NearByPlacesList.results}/>
            {/*<CardCarouselList/>*/}
        </div>
    )}

export default HomeScreen;