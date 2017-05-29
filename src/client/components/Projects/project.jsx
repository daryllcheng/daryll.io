import React from 'react';

const Project = ({ project }) => {
  return (
    <div id={ project.Name } className="section" >
      <h2>{ project.Name }</h2>
      { project.Screenshots.map(shot =>
        <img className="screenshot" src={ shot } />
      )}
      <div className="row">
        <div className="stackIcons">
          { project.StackIcons.map(icon =>
            <img className="stackIcon" src={ icon } />
          )}
        </div>
        <div className="projectDescription">{ project.Description }</div>
      </div>
      <div className="projectStacks">
        { project.Stack.map(stack =>
          <div className="projectStack">{ stack }</div>
        )}
      </div>
      <p>{ project.Demo }</p>
      <p>{ project.Github }</p>
    </div>
  )
}
export default Project;