import React from 'react';
import personal from '../../data/personal.json';

const Footer = (props) => (
  <div className="section">
    <div id="footer" className="hero">
      <div className="overlay">
        <div className="wrap">
          <div className="footerSocial">
            <a href={ personal.Github } target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
            <a href={ personal.Linkedin } target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href={ personal.Facebook } target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href={ personal.GooglePhotos } target="_blank"><i className="fa fa-google" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;