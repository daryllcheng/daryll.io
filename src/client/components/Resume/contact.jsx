import React from 'react';

const Contact = (props) => (
  <div className="resumeContact">
    <div className="resumeContactBackground"></div>
    <div className="resumeContactContent">
      <div className="resumeContactInfo">
        <h2 className="resumeContactName">{ props.name }</h2>
        <div className="resumeContactTitle">{ props.title }</div>
        <div className="resumeContactCity">{ props.city }</div>
        <div className="resumeContactSocial">
          <a href={ props.github } target="_blank"><i className="fa fa-github"></i></a>
          <a href={ props.linkedin } target="_blank"><i className="fa fa-linkedin"></i></a>
          <a href={ props.facebook } target="_blank"><i className="fa fa-facebook"></i></a>
        </div>
        <div className="resumeContactSkills">
        </div>
      </div>
    </div>
  </div>
);

export default Contact;