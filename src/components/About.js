import React from "react";
import { AboutDiv, AboutTitle, AboutText, SkillsDiv, Skills, Line, MainAboutText } from "../Styled";
import "./About.css";

export default function About() {
  return (
    <AboutDiv>
      <AboutTitle>About me</AboutTitle>
      <MainAboutText>
      <p>Product Manager | Creating User-Centric, Worldclass Products <br /> Promoting Agile Methodolgies & Workflows | Establishing DevOps Culture & Best Practices</p>
      </MainAboutText>
      <AboutText>
      Ever since I discovered Product Management, I have been obsessed with creating and delivering world-class products with outstanding customer experiences and value. Alongside helping others grow personally and professionally, it is what drives me to go the extra mile every day. I believe in working hard, treating people with respect, and focusing on a defined vision.
      </AboutText>
      <AboutText>
      <p>If you like what you see here, I would love to connect with you about an open position in your organization, a chance to partner with you on an open-source project, or just talk about development in general. I always enjoy talking about the industry and new technologies. Drop me a line at any of the contact links at the bottom of the page.</p>
      </AboutText>
      <Skills>
        <SkillsDiv>
          <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt=""></img>
          <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt=""></img>
          <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt=""></img>
          <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt=""></img>
        </SkillsDiv>
        <br />
        <SkillsDiv>
          <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt=""></img>
          <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt=""></img>
          <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt=""></img>
          <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt=""></img>
        </SkillsDiv>
        <br />
        <SkillsDiv>
          <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt=""></img>
          <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" alt=""></img>
          <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt=""></img>
        </SkillsDiv>
        <br />
        <SkillsDiv>
          <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt=""></img>
          <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt=""></img>
          <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt=""></img>
          <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt=""></img>
          <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt=""></img>
          <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt=""></img>
        </SkillsDiv>
      </Skills>
      <Line/>
    </AboutDiv>
  );
}
