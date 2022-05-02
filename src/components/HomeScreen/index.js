import React, { useEffect, useState } from "react";
import CardCarouselList from "./components/card-carousel-list";
import LocationCardList from "../common/location-card-list";
import { useDispatch, useSelector } from "react-redux";
import {
  FIND_FAVOURITE_CAROUSEL,
  FIND_RECENT_PLACES,
  findPlaces,
} from "../../actions/nearby-places-action";

const defaultFavoritesList = ["restaurant", "gym"];
const HomeScreen = () => {
  const dispatcher = useDispatch();
  const data = useSelector(({ nearByPlaces }) => nearByPlaces);
  const favoritesFromReducer = useSelector(
    ({ userStore }) => userStore
  )?.favorites;

  const findNearByPlaces = () => {
    findRecentCards();
    findFavouriteCarousal();
  };

  const findFavouriteCarousal = () => {
    const favouriteList =
      favoritesFromReducer === undefined
        ? defaultFavoritesList
        : favoritesFromReducer;
    favouriteList.map((fav) => {
      let params = { type: fav };
      findPlaces(dispatcher, FIND_FAVOURITE_CAROUSEL, params);
    });
  };
  const findRecentCards = () => {
    findPlaces(dispatcher, FIND_RECENT_PLACES, {});
  };
  useEffect(() => findNearByPlaces(), []);

  return (
    <div>
      <LocationCardList locDetails={data.recentPlaces.results} />
      {data.favouritesCarousel.map((fav) => (
        <CardCarouselList
          key={fav.type}
          title={fav.type}
          locDetails={fav.list}
        />
      ))}
    </div>
  );
};

export default HomeScreen;
