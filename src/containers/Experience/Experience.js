import React from "react";
import "./Experience.css";
import medacist from "../../images/medacist.png";

export default function Experience() {
  return (
    <div className="experience-container">
      <h2 className="experience-header">Experience</h2>
      <div className="company-section">
        <div className="company-info-container">
          <div className="company-header">
            <div className="company-website-link-container">
              <a href="www.medacist.com">
                <img src={medacist} className="logo" alt="medacist-logo" />
              </a>
            </div>
          </div>
          <span className="company-about">
            Identifying drug diversion risks quickly and efficiently is critical
            to ensuring patient safety and adhering to regulatory compliance.
            Backed by a wealth of data and purpose-built products, Medacist
            provides end-to-end visibility of the entire drug lifecycle so you
            can identify, analyze, and prevent drug diversion more effectively.
          </span>
          <span className="company-industry">
            Industry: Health Technology - Business Type: B2B
          </span>
        </div>

        <div className="company-experience-section">
          I started my career at Medacist as a Full Stack Developer...
        </div>
      </div>
    </div>
  );
}

//Title of Company, Logo of Company, Link to WebSite
//Industry of Company
//About of Company
//Departments I worked in

//Roles in those departments
//Responsibilites in those roles
//Outcomes in those roles
//Skills used in those roles
