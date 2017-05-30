import React from 'react';

const Macbook = ({ screenshot }) => (
  <div className="macbook">
    <div className="md-macbook-pro">
      <div className="md-lid">
        <div className="md-camera" />
        <div className="md-screen">
          <img className="screenshot" src={ screenshot } />
        </div>
      </div>
      <div className="md-base" />
    </div>
  </div>
);

export default Macbook;