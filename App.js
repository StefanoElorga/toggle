import React, { useState } from "react";
import "./App.css";
import moon from "./moon.png";
import sun from "./sun.png";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const handleCheckboxChange = (event) => {
    console.log(event.target.checked);
    setIsDark(event.target.checked);
    console.log("estado", isDark);
  };

  return (
    <div
      className={`container ${isDark ? "dark" : "light"}`}
      onChange={handleCheckboxChange}
    >
      <input className="my-input" type="checkbox" id="my-input" />
      <label className="my-label" for="my-input"></label>
      <img src={moon} className="moon" />
      <img src={sun} className="sun" />
    </div>
  );
};

export default App;
