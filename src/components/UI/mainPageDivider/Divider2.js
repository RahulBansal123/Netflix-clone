import React from 'react';
import './Divider2.css';

const Divider2 = (props) => {
  return (
    <div className="container">
      <div className="dividerContainer">
        <div className="ContainerImage">
          <div
            className="ContainerImageContainer"
            style={{ position: 'relative' }}
          >
            <img
              alt=""
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            />
            <div className="divider2Image">
              <img
                alt="Netflix"
                width="55px"
                height="75px"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  margin: '20px',
                }}
              >
                <h5
                  style={{ color: '#fff', fontSize: '1rem', fontWeight: '300' }}
                >
                  Stranger Things
                </h5>
                <h6 style={{ color: 'blue', fontSize: '0.9rem' }}>
                  Downloading...
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="ContainerContent">
          <h1>Download your shows to watch offline.</h1>
          <h2>
            Save your favourites easily and always have something to watch.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Divider2;
