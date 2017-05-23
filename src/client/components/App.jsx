import React, { Component } from 'react';

import Nav from './Nav/nav.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        Hello
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;