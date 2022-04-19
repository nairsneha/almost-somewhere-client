import React, {useEffect, useState} from "react";
import CardCarouselList from "./components/card-carousel-list";
import LocationCardList from "./components/location-card-list";
import {useDispatch, useSelector} from "react-redux";
import {
    FIND_GYM_PLACES,
    FIND_RECENT_PLACES,
    FIND_RESTAURANT_PLACES,
    findPlaces
} from "../../actions/nearby-places-action";

const HomeScreen = () => {
    const dispatcher = useDispatch();
    const data = useSelector(({nearByPlaces}) => nearByPlaces);
    const findNearByPlaces = () => {
        findRecentCards();
        findGymCards();
        findRestaurantCards();
    }
    const findRecentCards = () => {
        findPlaces(dispatcher, FIND_RECENT_PLACES,{});
    }
    const findRestaurantCards = () => {
        let params = {type:"restaurant"};
        findPlaces(dispatcher, FIND_RESTAURANT_PLACES,params);
    }
    const findGymCards = () => {
        let params = {type:"gym"};
        findPlaces(dispatcher, FIND_GYM_PLACES,params);
    }


    useEffect(() => findNearByPlaces(), []);

    return(
        <div>
            <LocationCardList locDetails={data.recentPlaces.results}/>
            <CardCarouselList title="Restaurant" locDetails={data.restaurantPlaces.results}/>
            <CardCarouselList title="Gym" locDetails={data.gymPlaces.results}/>
        </div>
    )}

export default HomeScreen;