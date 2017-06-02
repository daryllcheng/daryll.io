import React from 'react';
import Project from './project.jsx';

const Projects = ({ projects }) => (
  <div className="projects">
    { projects.map(project =>
      <Project project={ project } key={ project.Name } />
    )}
  </div>
);

export default Projects;