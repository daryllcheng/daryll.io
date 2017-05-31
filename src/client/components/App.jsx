import React, { Component } from 'react';
import Intro from './Intro/intro.jsx'
import Footer from './Footer/footer.jsx'
import Projects from './Projects/projects.jsx';
import Nav from './Nav/nav.jsx';
import projectData from '../data/projectData.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: projectData
    }
  }
  render() {
    return (
      <div className="site-container">
        <Nav projects={ this.state.projects } />
        <Intro />
        <Projects projects={ this.state.projects }/>
        <Footer />
      </div>
    );
  }
}

export default App;
