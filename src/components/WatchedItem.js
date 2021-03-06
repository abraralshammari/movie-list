import React from "react";
// Style
import styled from "styled-components";
// watched movies
import watchedMovies from "../watchedMovies";

const ULStyled = styled.ul `
list-style-type: none;
list-style-position: inside;

`;

const LiStyled = styled.li`
color: blue;
text-align:center;
font-weight: bold;


`;

const Button = styled.button`

  border: solid;
  border-radius:10px;
  color: blue;
  padding: 5px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 1px 2px;
  cursor: pointer;
`


const WatchedItem= (props) => {
    return (
  
        <ULStyled>
          <LiStyled>
    
            <p>{props.watchedmovie.name}</p>
            <Button> Delet</Button>
          </LiStyled>
             
        </ULStyled> 
    )
}

export default WatchedItem;