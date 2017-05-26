import React, { Component } from 'react';
import Personal from './Personal/personal.jsx'
import Projects from './Projects/projects.jsx';

class App extends Component {
  render() {
    return (
      <div className="site-container">
        <Personal />
        <Projects />
      </div>
    );
  }
}

export default App;