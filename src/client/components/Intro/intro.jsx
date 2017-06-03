import React from 'react';
import personal from '../../data/personal.json';
import Scroll, { Link } from 'react-scroll';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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
          <div className="scrollWrapper">
            <Link className="scrollDown" to="Seethroughme" smooth={ true } duration={ 800 }>
              <img src="/assets/arrow.svg" alt="Projects"/>
              <span className="scrollProject">Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;