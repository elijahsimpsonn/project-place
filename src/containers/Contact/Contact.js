import React from "react";
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-container">
      <h3 className="contact-header">Contact Me</h3>
      <div className="contact-items">
        <a href="mailto: elijahsimpson1991@gmail.com">
          <span className="contact-icon">Email</span>
        </a>
        <a href="https://github.com/elijahsimpsonn">
          <span className="contact-icon">GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/elijahsimpson/">
          <span className="contact-icon">LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
