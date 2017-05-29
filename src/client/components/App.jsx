import React, { Component } from 'react';
import Intro from './Intro/intro.jsx'
import Projects from './Projects/projects.jsx';

class App extends Component {
  render() {
    return (
      <div className="site-container">
        <Intro />
        <Projects />
      </div>
    );
  }
}

export default App;