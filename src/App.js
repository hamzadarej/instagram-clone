import Data from "./data.json";


import Profile from "./components/Profile";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav/>
   <Profile Data={Data}/>
   
    </div>
  );
}

export default App;
