import React, { useState } from 'react';
import './ColorBox.scss'
// import PropTypes from 'prop-types';

ColorBox.propTypes = {
};
let randomColor = () => {
  const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue']
  let ramdomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[ramdomIndex]
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    return initColor;
  })

  let handleBoxClick = () => {
    const newColor = randomColor();
    setColor(newColor)

    localStorage.setItem("box_color", newColor)
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      BackgroundColor
    </div>
  );
}

export default ColorBox;