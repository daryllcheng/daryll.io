import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="project" >
      <h2>{ project.Name }</h2>
      <p>{ project.Date }</p>
      <p>{ project.Description }</p>
      {project.Stack.map(stack =>
        <div className="projectStack">{ stack }</div>
      )}
      {project.StackIcons.map(icon =>
        <img className="stackIcon" src={ icon } />
      )}
      {project.Screenshots.map(shot =>
        <img className="screenshot" src={ shot } />
      )}
      <p>{ project.Demo }</p>
      <p>{ project.Github }</p>
    </div>
  )
}
export default Project;