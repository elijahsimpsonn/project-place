import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <h3 className="about-subheader">
        <p>Product Manager | Creating User-Centric, Worldclass Products<br />Promoting Agile Methodolgies & Workflows | Establishing DevOps Culture & Best Practices</p>
      </h3>
      <h3 className="about-content">
        <p>Ever since I discovered Product Management, I have been obsessed with creating and delivering world-class products with outstanding customer experiences and value. 
        Alongside helping others grow personally and professionally, it is what drives me to go the extra mile every day. I believe in working hard, treating people with respect, 
        and focusing on a defined vision.</p>
      </h3>
      <h3 className="about-content">
        <p>I also continue to love software development and DevSecOps culture and implementation. Software development gives us the ability to turn dreams into reality, and as technologies
          continue to improve to scope of those dreams grow.</p>
      </h3>
      <h3 className="about-content">
        <p>If you like what you see here, I would love to connect with you about an open position in your organization, a chance to partner with you on an open-source project, 
        or just talk about product, development, or DevSecOps in general. Drop me a line at any of the contact links at the bottom of the page.</p>
      </h3>
    </div>
  );
}
