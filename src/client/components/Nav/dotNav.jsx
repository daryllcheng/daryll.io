import React from 'react';
import Scroll, { Link, Element, Events, scroll, scrollSpy } from 'react-scroll';

const DotNav = ({ projects }) => (
  <nav className="dotNav">
    <ul>
      { projects.map(project => 
        <li key={ project.Name }>
          <Link activeClass="active" to={ project.Name } spy={ true } smooth={ true } duration={ 500 } >
            <span className="dot"/>
            <span className="dotLabel">{ project.Name }</span>
          </Link>
        </li>
      )}
    </ul>
  </nav>
);

export default DotNav;