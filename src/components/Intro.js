import React from "react";
import { IntroDiv, IntroHeader, IntroUpright, UprightDiv } from "../Styled";

export default function Intro() {
  return (
    <IntroDiv>
      <IntroHeader>Hello</IntroHeader>
      <IntroHeader>
        I'm Elijah Simpson, a full-stack engineer who likes to solve complex
        problems
      </IntroHeader>
      <UprightDiv>
        <IntroUpright>Check It Out &#x2199;</IntroUpright>
      </UprightDiv>
    </IntroDiv>
  );
}
