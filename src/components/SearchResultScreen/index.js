import React, {useEffect} from "react";
import LocationCardList from "../common/location-card-list";
import {useDispatch, useSelector} from "react-redux";
import {
    FIND_PLACES_BY_QUERY,
    findPlaces, findPlacesByQuery
} from "../../actions/nearby-places-action";
import {useParams} from "react-router-dom";

const styleConfig = {colsPerRow:4, maxResult: 20};
const SearchResultScreen = () => {
    const dispatcher = useDispatch();
    const data = useSelector(({nearByPlaces}) => nearByPlaces);
    const query = useParams().query;
    const findPlaces = () => {
        findPlacesByQuery(dispatcher,FIND_PLACES_BY_QUERY, {query});
    }
    useEffect(() => findPlaces(), []);

    return (
        <div>
            <LocationCardList locDetails={data.searchResult.results} style={styleConfig}/>
        </div>
    )
}

export default SearchResultScreen;