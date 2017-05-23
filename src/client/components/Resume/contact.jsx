import React from 'react';

const Contact = (props) => (
  <div className="resumeContact">
    <div className="resumeContactBackground"></div>
    <div className="resumeContactContent">
      <div className="resumeContactInfo">
        <h2 className="resumeContactName">{ this.props.name }</h2>
        <div className="resumeContactTitle">{ this.props.title }</div>
        <div className="resumeContactCity">{ this.props.city }</div>
        <div className="resumeContactSocial">
          <a href={ this.props.github } target="_blank">GitHub</a>
          <a href={ this.props.linkedin } target="_blank">Linkedin</a>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;