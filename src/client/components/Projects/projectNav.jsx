import React from 'react';

const ProjectNav = ({ projects }) => (
  <nav className="projectNav">
    <ul>
      { projects.map(project => 
        <li key={ project.Name }><a href={`#${ project.Name }`}>{ project.Name }</a></li>
      )}
    </ul>
  </nav>
);

export default ProjectNav;