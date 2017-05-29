import React, { Component } from 'react';

class Intro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: `Daryll Cheng`,
      title: `Software Engineer`,
      city: `San Francisco Bay Area`,
      github: `https://github.com/daryllcheng`,
      linkedin: `https://www.linkedin.com/in/daryllcheng/`,
      facebook: `https://www.facebook.com/CDaryll`,
      resume: `http://daryll.io/resume2017.pdf`
    }
  }

  render() {
    return (
      <div classID="intro" className="section">
        <div className="hero">
          <div className="overlay">
            <div className="wrap">
              <h1 className="personalName">{ this.state.name }</h1>
              <h2 className="personalTitle">{ this.state.title }</h2>
              <div className="personalCity">{ this.state.city }</div>
              <div className="personalSocial">
                <a href={ this.state.github } target="_blank"><i className="fa fa-github"></i></a>
                <a href={ this.state.linkedin } target="_blank"><i className="fa fa-linkedin"></i></a>
                <a href={ this.state.facebook } target="_blank"><i className="fa fa-facebook"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;