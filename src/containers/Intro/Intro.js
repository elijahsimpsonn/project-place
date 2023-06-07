import React from "react";
import './Intro.css'
import Typewriter from 'typewriter-effect';

export default function Intro() {
  return (
    <div className="intro-container">
      <h1 className="intro-header">Hello</h1>
      <h1 className="intro-header">
        <Typewriter
        options={{
            delay: 20
        }}
        onInit={(typewriter) => {
            typewriter.typeString("I'm Elijah Simpson, a Product Manager and Full-Stack Engineer ")
            .start()
        }}
        />
      </h1>
      <h3 className="upright-text">
        <span>Check It Out &#x2199;</span>
      </h3>
    </div>
  );
}
