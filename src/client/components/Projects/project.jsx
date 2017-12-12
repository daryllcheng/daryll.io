import React from 'react';
import Macbook from './projectComponents/macbook.jsx';
import Icons from './projectComponents/icons.jsx';

const Project = ({ project }) => {
  return (
    <div id={ project.Name } className="section">
      <div className="hero" style={{ "backgroundImage": `url(${ project.Background })` }} >
        <div className="overlay">
          <div className="wrap">
            <h2>{ project.Name }</h2>
          </div>
        </div>
      </div>
      <div className="wrap">
        <Macbook screenshot={ project.Screenshot } />
        <Icons tags={ project.Stack } title={ 'Stack' } />
        { project.APIs.length > 0 ? <Icons tags={ project.APIs } title={ 'APIs' } /> : null }
        <div className="projectDescription">{ project.Description }</div>
        { 
          project.Demo ? 
          <div className="demo">
            Click on link see it in action!
            <br /> 
            <a href={ project.Demo } target="_blank">
              <i className="fas fa-link"></i>
            </a> 
          </div> : 
          <div />
        }
        <a href={ project.Github } target="_blank"><img className="octocat" src={ project.Octocat } alt="Github" /></a>
      </div>
    </div>
  )
}
export default Project;