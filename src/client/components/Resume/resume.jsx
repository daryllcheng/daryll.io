import React, { Component } from 'react';
import Contact from './contact.jsx';
import Content from './content.jsx'

class Resume extends Component {
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
      <div className="resume">
        <Contact
          name={ this.state.name }
          title={ this.state.title }
          city={ this.state.city }
          github={ this.state.github }
          linkedin={ this.state.linkedin }
          facebook={ this.state.facebook }
        />
        <Content />
      </div>
    );
  }
}

export default Resume;