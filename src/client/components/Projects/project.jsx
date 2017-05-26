import React from 'react';

const Project = (props) => (
  <div className="project">
    <p>{ props.Name }</p>
    <p>{ props.Date }</p>
    <p>{ props.Description }</p>
    <p>{ props.Demo }</p>
    <p>{ props.Github }</p>
  </div>
)

export default Project;