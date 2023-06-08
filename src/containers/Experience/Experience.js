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
          <p>I started my career at Medacist as a Full Stack Developer in March of 2021. During my time in development, I refined our style system for frontend components, spearheaded the
          development of large-scale features, and took ownership of our unit and integration testing efforts by increasing testing coverage by over 40%.</p>

          <p>While still working in the development effort, I took on the role of Associate Product Manager, helping the Director of Product move our solutions forward. This quickly turned into a Product Manager role, which I am still currently in. In this role I drive the direction of our products and solutions, providing great experiences for our Users.</p>

          <p>I also own the role of Scrum Master in our organization and I was the Lead User Interface Designer for four months during the start of 2022.</p>
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
