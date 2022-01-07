import React from "react";
import { IntroDiv, IntroHeader, IntroUpright, UprightDiv } from "../Styled";
import Typewriter from 'typewriter-effect';

export default function Intro() {
  return (
    <IntroDiv>
      <IntroHeader>Hello</IntroHeader>
      <IntroHeader>
        <Typewriter
        options={{
            delay: 20
        }}
        onInit={(typewriter) => {
            typewriter.typeString("I'm Elijah Simpson, a Project Manager and Full-Stack Engineer ")
            .start()
        }}
        />
      </IntroHeader>
      <UprightDiv>
        <IntroUpright>Check It Out &#x2199;</IntroUpright>
      </UprightDiv>
    </IntroDiv>
  );
}
