import { PropTypes } from "mobx-react";
import React, { useState } from "react";
//styled
import styled from "styled-components";

const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 2rem auto;
  display: block;
  width: 20%;
`;

const SearchBar = () => {
    
    
    return <SearchBarStyled
                placeholder="Search for a Movie"
                // onChange={(event) => props.setQuery(event.target.value)}
                />;
  };
  
  export default SearchBar;