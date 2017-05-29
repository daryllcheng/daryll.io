import React, { Component } from 'react';
import personal from '../../data/personal.json';

class Intro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: personal
    }
  }

  render() {
    return (
      <div classID="intro" className="section">
        <div className="hero">
          <div className="overlay">
            <div className="wrap">
              <h1 className="personalName">{ this.state.info.Name }</h1>
              <h2 className="personalTitle">{ this.state.info.Title }</h2>
              <div className="personalCity">{ this.state.info.City }</div>
              <div className="personalSocial">
                <a href={ this.state.info.Github } target="_blank"><i className="fa fa-github"></i></a>
                <a href={ this.state.info.Linkedin } target="_blank"><i className="fa fa-linkedin"></i></a>
                <a href={ this.state.info.Facebook } target="_blank"><i className="fa fa-facebook"></i></a>
                <a href={ this.state.info.GooglePhotos } target="_blank"><img src="/assets/Google_Photos_icon.svg"></img></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;