//Styled
import styled from "styled-components";
// watchedList
import WatchedList from "./components/WatchedList";
//un-watchedList
import UnWatchList from "./components/UnWatchList";

const Styledp = styled.p`
  display: grid;
  grid-column-gap: 100px;
  grid-template-columns: auto auto auto;
  /* background-color: #2196F3; */
  padding: 2.5px;
  margin-top: 35px;
  padding: 1px;
  font-size: 20px;
  text-align: center;
  font-weight: bold;

`;

const Styledp1 = styled.p`
  position: relative;
  bottom: 150px;
  right: 3px;
  padding: 3px;
  font-size: 20px;
  text-align: center;
  font-weight: bold;

`;

function App() {
  return (
    <div>
      <Styledp> Watched List</Styledp>
      <WatchedList/>
      <Styledp1>Unwatch List:</Styledp1>

      <UnWatchList/>
      
    </div>
  );
}

export default App;
