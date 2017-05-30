import React from 'react';
import Stacks from '../../data/stacks.json';
import APIs from '../../data/apis.json';

const Project = ({ project }) => {
  return (
    <div id={ project.Name } className="section">
      <div className="hero" style={{ "background-image": `url(${ project.Background })`, height: "auto" }} >
        <div className="overlay" style={{ "background": `rgba(${ project.Overlay }, .8)`, height: "auto" }}>
          <div className="wrap">
            <h2>{ project.Name }</h2>
          </div>
        </div>
      </div>
      <div className="wrap">
        { project.Screenshots.map(shot =>
          <img className="screenshot" src={ shot } />
        )}
        <div className="stackIcons">
          <span className="label">Stack: </span>
          <img className="bracket" src="/assets/leftBracket.png" />
            { project.Tags.map(tag => {
                let target = Stacks.find(stack => stack.Name === tag);
                return (
                  <a href={ target.Link } target="_blank"><img className="stackIcon" src={ target.Icon } /></a>
                )
              }
            )}
          <img className="bracket" src="/assets/rightBracket.png" />
        </div>
        { project.APITags.length > 0 ? 
          <div className="apiIcons">
            <span className="label">APIs: </span>
            <img className="bracket" src="/assets/leftABracket.png" />
            { project.APITags.map(apiTag => {
                let target = APIs.find(api => api.Name === apiTag);
                return (
                  <a href={ target.Link } target="_blank"><img className="stackIcon" src={ target.Icon } /></a>
                )
              }
            )}
            <img className="bracket" src="/assets/rightABracket.png" /> 
          </div> : null }
        <div className="projectDescription">{ project.Description }</div>
        { project.Demo ? <a className="btn btn-full" href={ project.Demo } target="_blank">Demo</a> : null }
        <a href={ project.Github } target="_blank"><img className="stackIcon" src="/assets/github.png" /></a>
      </div>
    </div>
  )
}
export default Project;