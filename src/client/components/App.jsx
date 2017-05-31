import React, { Component } from 'react';
import Intro from './Intro/intro.jsx'
import Footer from './Footer/footer.jsx'
import Projects from './Projects/projects.jsx';

class App extends Component {
  render() {
    return (
      <div className="site-container">
        <Intro />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;