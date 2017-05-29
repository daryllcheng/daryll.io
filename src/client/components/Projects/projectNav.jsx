import React, { Component } from 'react';

const ProjectNav = ({ projects }) => (
  <nav className="projectNav">
    <ul>
      { projects.map(project => 
        <li><a href={`#${ project.Name }`}>{ project.Name }</a></li>
      )}
    </ul>
  </nav>
);

export default ProjectNav;