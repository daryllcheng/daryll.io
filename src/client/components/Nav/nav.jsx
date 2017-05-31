import React from 'react';

const Nav = ({ projects }) => (
  <nav className="nav">
    <ul>
      { projects.map(project => 
        <li key={ project.Name }>
          <a href={`#${ project.Name }`} data-number={ projects.indexOf(project) + 1 }>
          <span className="dot" />
          <span className="dotLabel">{ project.Name }</span>
          </a>
        </li>
      )}
    </ul>
  </nav>
);

export default Nav;