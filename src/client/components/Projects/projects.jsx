import React, { Component } from 'react';
import ProjectNav from './projectNav.jsx';
import Project from './project.jsx';
import projectData from './projectData.json';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: projectData
    }
  
  }

  render() {
    console.log(`this.state.projects: ${this.state.projects}`);
    return (
      <div className="projects">
        <header className="projectsHeader">
          <h1 className="projectHeader">Projects</h1>
          <ProjectNav />
        </header>
        {this.state.projects.map(project =>
          <Project project={ project } />
        )}
      </div>
    );
  }
}

export default Projects;