import React from "react";
// unwatch Movies
import unWatchMovies from "../unWatchMovies";
// unwatchItem
import UnWatchItem from "./UnWatchItem";


const UnWatchList = () => {
    return unWatchMovies.map((val) => (
        <UnWatchItem unwatchmovie={val} key={val.id}/>
    )
    );
}

export default UnWatchList;