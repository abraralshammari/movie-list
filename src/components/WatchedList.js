import React, { useState }from "react";
// // watched Movies
import watchedMovies from "../watchedMovies";
// watchedItem
import WatchedItem from "./WatchedItem";
//Searchbar
import SearchBar from "./SearchBar";


const WatchedList = () => {
     
    

    return watchedMovies.map((val) => (
        
        <WatchedItem watchedmovie={val} key={val.id}/>
    )
    );
}

export default WatchedList;