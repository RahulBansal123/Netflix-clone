import React from 'react';
import './inputField.css';
const Input = (props) => {
  return (
    <div className="inputGroup">
      <input type="text" required />
      <label>{props.placeholder}</label>
    </div>
  );
};

export default Input;
