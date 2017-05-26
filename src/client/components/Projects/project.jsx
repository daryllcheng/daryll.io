import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="project" >
      <p>{ project.Name }</p>
      <p>{ project.Date }</p>
      <p>{ project.Description }</p>
      {project.Stack.map(stack =>
        <div>{ stack }</div>
      )}
      {project.StackIcons.map(icon =>
        <img src={ icon } style={{ "width": "100px" }} />
      )}
      {project.Screenshots.map(shot =>
        <img src={ shot } />
      )}
      <p>{ project.Demo }</p>
      <p>{ project.Github }</p>
    </div>
  )
}
export default Project;