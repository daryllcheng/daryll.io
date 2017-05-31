import React from 'react';
import personal from '../../data/personal.json';

const Intro = () => (
  <div className="section">
    <div id="intro" className="hero">
      <div className="overlay">
        <div className="wrap">
          <h1 className="introName">{ personal.Name }</h1>
          <h2 className="introTitle">{ personal.Title }</h2>
          <div className="introCity">{ personal.City }</div>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;