import React from 'react';
import './Button.css';
import Input from '../InputField/inputField';
const Button = (props) => {
  return (
    <div className="details">
      <Input placeholder={props.placeholder} />
      <button type={props.type} className="start_button">
        {props.buttonText} &gt;
      </button>
    </div>
  );
};

export default Button;
