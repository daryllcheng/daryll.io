import React from 'react';
import Stacks from '../../data/stacks.json';
import APIs from '../../data/apis.json';

const Project = ({ project }) => {
  return (
    <div id={ project.Name } className="section" >
      <h2>{ project.Name }</h2>
      { project.Screenshots.map(shot =>
        <img className="screenshot" src={ shot } />
      )}
      <div className="row">
        <div className="projectStacks">
          { project.Tags.map(tag => {
              let target = Stacks.find(stack => stack.Name === tag);
              return (
                <a href={ target.Link } target="_blank"><img className="stackIcon" src={ target.Icon } /></a>
              )
            }
          )}
        </div>
        <div className="projectAPIs">
          { project.APITags.map(apiTag => {
              let target = APIs.find(api => api.Name === apiTag);
              return (
                <a href={ target.Link } target="_blank"><img className="stackIcon" src={ target.Icon } /></a>
              )
            }
          )}
        </div>
        <div className="projectDescription">{ project.Description }</div>
      </div>
      <p>{ project.Demo }</p>
      <p>{ project.Github }</p>
    </div>
  )
}
export default Project;