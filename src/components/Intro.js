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
            delay: 40
        }}
        onInit={(typewriter) => {
            typewriter.typeString("I'm Elijah Simpson, a full-stack engineer who likes to solve complex problems")
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


// I'm Elijah Simpson, a full-stack engineer who likes to solve complex
// problems