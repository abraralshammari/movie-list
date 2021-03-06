//Styled
import styled from "styled-components";
// watchedList
import WatchedList from "./components/WatchedList";
//un-watchedList
import UnWatchList from "./components/UnWatchList";
// States
import { useState , useEffect} from "react";
//Searchbar
import SearchBar from "./components/SearchBar";



const Styledp = styled.p`
 color: grey;
text-align:center;
font-weight: bold;
padding-bottom:20px;
margin-top:50px;
margin-inline-start:45px;
text-decoration: underline;
`;

const Styledp1 = styled.p`
color: grey;
text-align:center;
font-weight: bold;
padding-bottom:20px;
margin-top:50px;
margin-inline-start:45px;
text-decoration: underline;
`;




function App() {
  
  const [query, setQuery] =useState("");
  return (
  <div>
    
    <SearchBar/>

    <Styledp> Watched List</Styledp>
    
    <WatchedList/>
    <Styledp1>Unwatch List:</Styledp1>

    <UnWatchList/>
   
  </div>
      
  );
}

export default App;
