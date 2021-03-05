import React from "react";
// Style
import styled from "styled-components";
// watched movies
import watchedMovies from "../watchedMovies";

const GridContainer = styled.div`
  display: grid;
  grid-column-gap: 100px;
  grid-template-columns: auto auto auto;
  /* background-color: #2196F3; */
  /* padding: 2.5px; */
  margin-top: 35px;
  

`;

const GridItem = styled.div`
/* background-color: rgba(255, 255, 255, 0.8);
  border: 5px solid rgba(0, 0, 0, 0.8);
  border-radius:20px; */
  padding: 1px;
  font-size: 20px;
  text-align: center;
`;



const WatchedItem= (props) => {
    return (
  
        <GridContainer> 
            <GridItem> 
                 <p>{props.watchedmovie.name}</p>
             </GridItem>
        </GridContainer>
    )
}

export default WatchedItem;