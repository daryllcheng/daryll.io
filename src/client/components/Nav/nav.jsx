import React from 'react';

const Nav = ({ projects }) => (
  <nav className="wrap">
    <ul>
      { projects.map(project => 
        <li key={ project.Name }><a href={`#${ project.Name }`}>{ project.Name }</a></li>
      )}
    </ul>
  </nav>
);

export default Nav;