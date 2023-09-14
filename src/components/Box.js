import React, { useState } from "react"

const Box = () => {
  const [currentColor, setCurrentColor] = useState("white")

  const colorSelector = () => {
    setCurrentColor('#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0'))
  }

  return (
    <>
      <div
        className="color-box"
        style={{ backgroundColor: currentColor }}
        onClick={colorSelector}
      ></div>
    </>
  )
}

export default Box
