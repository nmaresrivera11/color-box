import React, { useState } from "react";

const Box = () => {
  const [currentColor, setCurrentColor] = useState("white");
  const colors = ["red", "orange", "blue", "black", "purple", "pink"];

  const colorSelector = () => {
    const randomNum = Math.floor(Math.random() * colors.length);
    setCurrentColor(colors[randomNum]);
  };

  return (
    <>
      <div
        className="color-box"
        style={{ backgroundColor: currentColor }}
        onClick={colorSelector}
      ></div>
    </>
  );
};

export default Box;
