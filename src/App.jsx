import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import "./App.scss";
import { useState } from "react";

const App = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const location = useLocation();

  const closeAll = () => {
    setMenuIsActive(false);
  }

  return (
    <div className="app" onClick={closeAll}>
      <Header
        location={location}
        menuIsActive={menuIsActive}
        setMenuIsActive={setMenuIsActive}
      />
      <Outlet />
    </div>
  );
}

export default App;