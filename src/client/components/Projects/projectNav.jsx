import React, { Component } from 'react';

class ProjectNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="projectNav">
        <ul>
          <li><a href="#">Tie-Chai</a></li>
          <li><a href="#">Seethroughme</a></li>
          <li><a href="#">ReUp</a></li>
          <li><a href="#">Ninja Escape</a></li>
          <li><a href="#">Shufflr</a></li>
        </ul>
      </nav>
    );
  }
}

export default ProjectNav;