import React, { useState } from 'react';
import './style.scss';

ColorBox.propTypes = {
};


const colors = ["deeppink", "green", "yellow", "black", "blue"]
function getRandomColor() {
  const ramdomIndex = Math.trunc((Math.random() * colors.length))
  return colors[ramdomIndex]
}
function ColorBox(props) {
  const [color, setColor] = useState(() => {
    return localStorage.getItem("color_box") || colors[0]
  })

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor)
    localStorage.setItem("color_box", newColor)
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      click
    </div >
  );
}

export default ColorBox;