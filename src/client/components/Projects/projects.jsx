import React, { Component } from 'react';
import ProjectNav from './projectNav.jsx';
import Project from './project.jsx';
import projectData from './projectData.js';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [...projectData.applications]
    }
    console.log(`projectData: ${this.state.projects}`);
  }

  render() {
    return (
      <div className="projects">
        <header className="projectsHeader">
          <h1 className="projectHeader">Projects</h1>
          <ProjectNav />
        </header>
        {this.state.projects.map(project =>
          <Project project={ JSON.stringify(project) } />
        )}
      </div>
    );
  }
}

export default Projects;