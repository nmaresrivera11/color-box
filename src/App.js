import React, { useState } from "react"
import Box from "./components/Box"
import BoxButton from "./components/BoxButton"
import "./App.css"

const App = () => {
  const [boxes, setBoxes] = useState([])

  const addBox = () => {
    setBoxes(boxes.concat(<Box />))
  }

  const subBox = () => {
    setBoxes(boxes.slice(0, boxes.length - 1))
  }

  return (
    <>
      <h1> The Color Box! </h1>
      <BoxButton addBox={addBox} subBox={subBox} />
      <div className="color-boxes">
        {boxes.map((box, index) => {
          return <div key={index}>{box}</div>
        })}
      </div>
      <br />
    </>
  )
}

export default App;
