import React, { Component } from 'react';

class ProjectNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="projectNav">
        <ul>
          <li><a href="#Tie-Chai">Tie-Chai</a></li>
          <li><a href="#Seethroughme">Seethroughme</a></li>
          <li><a href="#ReUp">ReUp</a></li>
          <li><a href="#Shuriken">Ninja Escape</a></li>
          <li><a href="#Shufflr">Shufflr</a></li>
        </ul>
      </nav>
    );
  }
}

export default ProjectNav;