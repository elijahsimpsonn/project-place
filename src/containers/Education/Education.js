import React from "react";
import "./Education.css";
import thinkful from '../../images/thinkful.png'
import product from '../../images/product.png'
import devops from '../../images/devops.png'
import devsecops from '../../images/devsecops.png'

export default function Education() {
  return (
    <>
      <h2 className="education-header">Education</h2>
      <div className="education-container">
        <div className="education-item">
          <img className="education-item-img" src={thinkful}></img>
        </div>
        <div className="education-item">
          <img className="education-item-img" src={product}></img>
        </div>
        <div className="education-item">
          <img className="education-item-img" src={devops}></img>
        </div>
        <div className="education-item">
          <img className="education-item-img" src={devsecops}></img>
        </div>
      </div>
    </>
  );
}
