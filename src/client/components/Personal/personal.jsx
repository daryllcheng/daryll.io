import React, { Component } from 'react';

class Personal extends Component {
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
      <div className="personal">
        <div className="personalBackground"></div>
        <div className="wrap">
          <div className="personalInfo">
            <h2 className="personalName">{ this.state.name }</h2>
            <div className="personalTitle">{ this.state.title }</div>
            <div className="personalCity">{ this.state.city }</div>
            <div className="personalSocial">
              <a href={ this.state.github } target="_blank"><i className="fa fa-github"></i></a>
              <a href={ this.state.linkedin } target="_blank"><i className="fa fa-linkedin"></i></a>
              <a href={ this.state.facebook } target="_blank"><i className="fa fa-facebook"></i></a>
            </div>
          </div>
          <div className="personalSkills">
          
          </div>
        </div>
      </div>
    );
  }
}

export default Personal;