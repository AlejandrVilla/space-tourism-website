import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import "./App.scss";
import { useState } from "react";

const App = () => {
  const [currentBack, setCurrentBack] = useState("home");
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [linkActive, setLinkActive] = useState("home");

  const closeAll = () => {
    setMenuIsActive(false);
  }

  const screenWidth = window.innerWidth;

  let windowType = "desktop";
  if (screenWidth <= 800 && screenWidth >= 400) {
    windowType = "tablet";
  }
  else if (screenWidth < 400) {
    windowType = "mobile";
  }

  let pathBackImage = `./assets/home/background-home-${windowType}.jpg`;
  if (currentBack === "destination") pathBackImage = `./assets/destination/background-destination-${windowType}.jpg`;
  else if (currentBack === "crew") pathBackImage = `./assets/crew/background-crew-${windowType}.jpg`;
  else if (currentBack === "technology") pathBackImage = `./assets/technology/background-technology-${windowType}.jpg`;

  return (
    <div className="app" onClick={closeAll}>
      <img className="back-image" src={pathBackImage} />
      <Header 
        setCurrentBack={setCurrentBack} 
        menuIsActive={menuIsActive}
        setMenuIsActive={setMenuIsActive}
        linkActive={linkActive}
        setLinkActive={setLinkActive}/>
      <Outlet/>
    </div>
  );
}

export default App;