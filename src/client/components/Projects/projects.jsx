import React, { Component } from 'react';
import ProjectNav from './projectNav.jsx';
import Project from './project.jsx';
import projectData from '../../data/projectData.json';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: projectData
    }
  
  }

  render() {
    return (
      <div className="projects">
        <header className="projectsHeader">
          <h1 className="projectHeader">Projects</h1>
          <ProjectNav projects={ this.state.projects } />
        </header>
        { this.state.projects.map(project =>
          <Project project={ project } key={ project.Name } />
        )}
      </div>
    );
  }
}

export default Projects;