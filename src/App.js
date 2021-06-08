import Data from "./data.json";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
import Stories from "./components/Stories";
import storiesData from "./storiesData.json";
import Gallery from "./components/Gallery";
import GalleryNav from "./components/GalleryNav";

function App() {
  return (
    <div className="App">
      <Nav Data={Data} />
      <Profile Data={Data} />
     <Stories storiesData={storiesData}/>
     <GalleryNav/>
     <Gallery storiesData={storiesData}/>

    </div>
  );
}

export default App;
