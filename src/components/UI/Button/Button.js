import React from 'react';
import classes from './Button.module.css'
const button = (props) => {
  return (
    <button
      className = {[classes.Button, classes[props.btnType]].join(' ')}
    ></button>
  )
};

export default button;