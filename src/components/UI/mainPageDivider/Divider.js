import React from 'react';
import './Divider.css';

const Divider = (props) => {
  return (
    <div className="container">
      <div className="dividerContainer">
        <div className="ContainerContent">
          <h1>{props.heading}</h1>
          <h2>{props.subheading}</h2>
        </div>
        <div className="ContainerImage">
          <div className="ContainerImageContainer">
            <img alt="" src={props.img} />
            <video autoPlay playsInline muted loop>
              <source src={props.src} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Divider;
