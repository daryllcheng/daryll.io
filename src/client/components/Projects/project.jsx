import React from 'react';
import Macbook from './projectComponents/macbook.jsx';
import Icons from './projectComponents/icons.jsx';

const Project = ({ project }) => {
  return (
    <div id={ project.Name } className="section">
      <div className="hero" style={{ "backgroundImage": `url(${ project.Background })` }} >
        <div className="overlay" style={{ "background": `rgba(${ project.Theme }, .8)` }}>
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
        { project.Demo ? ( 
            <div className="demo">
              Check it out at
              <a className="button" href={ project.Demo } target="_blank"> tie-chai.com</a>!
             </div> ) 
          : null }
        <a href={ project.Github } target="_blank"><img className="octocat" src={ project.Octocat } /></a>
      </div>
    </div>
  )
}
export default Project;