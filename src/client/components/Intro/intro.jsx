import React from 'react';
import personal from '../../data/personal.json';
import Scroll, { Link } from 'react-scroll';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

const Intro = () => (
  <div className="section">
    <div id="intro" className="hero">
      <div className="overlay">
        <div className="wrap">
          <h1 className="introName">{ personal.Name }</h1>
          <h2 className="introTitle">{ personal.Title }</h2>
          <MuiThemeProvider >
            <FlatButton className="resume" label="resume" secondary={ true } href="/assets/resume.pdf" target="_blank" />
          </MuiThemeProvider>
          <Link className="scrollDown imgReplace" to="Seethroughme" smooth={ true } duration={ 800 } ></Link>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;