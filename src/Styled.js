import styled from "styled-components";

// --- DIVS --- //

const Site = styled.div``;

const IntroDiv = styled.div`
  color: white;
  padding: 0px 20px;
  position: relative;
  height: 580px;

  @media (min-width: 640px) {
    
  }
`;

const UprightDiv = styled.div`
  padding-top: 350px;
`;

const ProjectsDiv = styled.div`
  color: white;
  padding: 0px 20px;
  margin-top: 200px;
`;

const Project = styled.div`
    text-align: center;
    margin-bottom: 100px;
`

const ContactDiv = styled.div`
  color: white;
  padding: 0px 20px;
  margin-top: 150px;
  margin-bottom: 30px;
  text-align: center;
`;

// --- HEADERS --- //

const IntroHeader = styled.h1`
  font-family: "Karla", sans-serif;

  @media (min-width: 400px) {
    width: 371px
}
`;

const IntroUpright = styled.h3`
  text-orientation: upright;
  writing-mode: tb-rl;
  font-family: "Karla", sans-serif;
  letter-spacing: -5px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const ProjectTitle = styled.h3`
  font-family: "Karla", sans-serif;

`

const ContactTitle = styled.h3`
  font-family: "Karla", sans-serif;
    text-align: center;
`

const ProjectText = styled.p`
font-family: 'Montserrat', sans-serif;
padding: 0px 15px;

@media (min-width: 480px) {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
}
`

const Tech = styled.span`
    font-family: "Karla", sans-serif;
    display: inline-block;
    font-size: .75rem;
    font-weight: 700;
    padding: 2px 7px;
    border: 1px solid white;
    border-radius: 3px;
    margin-right: 3px;
    margin-top: 3px;
`

const ContactIcons = styled.span`
    font-family: "Karla", sans-serif;
    display: inline-block;
    font-size: 1rem;
    font-weight: 700;
    padding: 2px 7px;
    border: 1px solid white;
    border-radius: 3px;
    margin-right: 8px;
    margin-top: 3px;
`

export { Site, IntroDiv, IntroHeader, IntroUpright, UprightDiv, ProjectsDiv, Project, ProjectTitle, ProjectText, Tech, ContactDiv, ContactTitle, ContactIcons };
