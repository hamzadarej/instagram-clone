import Data from "./data.json";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
import Stories from "./components/Stories";
import storiesData from "./storiesData.json";
import Gallery from "./components/Gallery";
import GalleryNav from "./components/GalleryNav";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Nav Data={Data} />
      <Profile Data={Data} />
     <Stories storiesData={storiesData}/>
     <GalleryNav/>
     <Gallery storiesData={storiesData}/>

    </React.Fragment>
  );
}

export default App;
