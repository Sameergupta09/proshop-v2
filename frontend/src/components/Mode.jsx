import React, { useState } from "react";

import moon from '../assets/images/moon.png'
import sun from '../assets/images/sun.png'

const Mode = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <div>
      <img
        id="icon"
        src={isLightTheme ? {moon} : {sun}}
        alt="theme-icon"
        onClick={toggleTheme}
        style={{ cursor: "pointer" }}
      />
      <div className={isLightTheme ? "light-theme" : ""}>
        {/* Rest of your body content */}
      </div>
    </div>
  );
};

export default Mode;
