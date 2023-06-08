import React from "react";
import "./Education.css";
import thinkful from "../../images/thinkful.png";
import product from "../../images/product.png";
import devops from "../../images/devops.png";
import devsecops from "../../images/devsecops.png";

export default function Education() {
  return (
    <>
      <h2 className="education-header">Education</h2>
      <div className="education-container">
        <div className="education-item">
          <a href="https://www.thinkful.com/bootcamp/web-development/#introduction" target="_blank">
            <img className="education-item-img" src={thinkful}></img>
          </a>
        </div>
        <div className="education-item">
        <a href="https://www.productuplevel.com/" target="_blank">
          <img className="education-item-img" src={product}></img>
        </a>
        </div>
        <div className="education-item" target="_blank">
        <a href="https://acloudguru.com/course/devops-essentials">
          <img className="education-item-img" src={devops}></img>
        </a>
        </div>
        <div className="education-item" target="_blank">
          <a href="https://acloudguru.com/course/devsecops-essentials">
            <img className="education-item-img" src={devsecops}></img>
          </a>
        </div>
      </div>
    </>
  );
}
