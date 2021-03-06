import React from "react";
// Style
import styled from "styled-components";
// watched movies
import unWatchMovies from "../unWatchMovies";

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
`;




const UnWatchItem= (props) => {
    return (
      <div> 
        <ULStyled> 
          <LiStyled> 
            <p>{props.unwatchmovie.name}</p>
            <Button> Watched</Button>
            <Button> Delet</Button>
            </LiStyled>
          </ULStyled>
          </div>
    )
}

export default UnWatchItem;