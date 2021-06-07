import Data from "./data.json";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
import Stories from "./components/Stories";
import storiesData from "./storiesData.json";

function App() {
  return (
    <div className="App">
      <Nav Data={Data} />
      <Profile Data={Data} />
     <Stories storiesData={storiesData}/>
    </div>
  );
}

export default App;
