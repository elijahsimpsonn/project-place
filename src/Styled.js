import styled from "styled-components";

// --- DIVS --- //

const Line = styled.hr`
margin-top: 15px;
width: 75%;

`

const Site = styled.div`
  height: 100%;
`;

const IntroDiv = styled.div`
  color: white;
  padding: 0px 20px;
  position: relative;
  height: 100vh;

  /* @media (min-width: 640px) {
      height: auto
  } */
`;

const UprightDiv = styled.div`
  padding-top: 300px;
`;

const AboutDiv = styled.div`
  padding: 0px 20px;
  position: relative;
  margin-bottom: 50px;

  @media (max-width: 530px) {
      height: auto
  }
`;

const ProjectsDiv = styled.div`
  color: white;
  padding: 0px 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  @media (max-width: 890px) {
      display: initial;
      
  }
`;

const Project = styled.div`
  text-align: center;
  margin-bottom: 100px;
  width: 50%;

  @media (min-width: 300px) {
    text-align: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    align-self: center;
    margin-bottom: 50px;
  }
`;

const ProjectLast = styled.div`
    text-align: center;
    width: 50%;
    align-self: center;
    margin: 0 auto;

    @media (min-width: 300px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`

const ContactDiv = styled.div`
  color: white;
  padding: 0px 20px;
  margin-top: 150px;
  margin-bottom: 30px;
  text-align: center;
`;

const SkillsDiv = styled.span`
    img {
        margin-left: 1px;
    }
`;

const Skills = styled.div`
    width: 50%;
    margin: 0 auto;
    padding-top: 40px;
    text-align: center;

    @media (min-width: 300px) {
      width: auto;
  }
`

// --- HEADERS --- //

const IntroHeader = styled.h1`
  font-family: "Karla", sans-serif;

  @media (min-width: 400px) {
    width: 371px;
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
  margin-bottom: 40px;
`;

const ProjectTitle = styled.h3`
  font-family: "Karla", sans-serif;
`;

const ContactTitle = styled.h3`
  font-family: "Karla", sans-serif;
  color: white;
  font-size: 30px;
  margin-bottom: 60px;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-family: "Karla", sans-serif;
  color: white;
  font-size: 30px;
  margin-bottom: 60px;
  text-align: center;
`;

const AboutText = styled.h3`
  font-family: "Karla", sans-serif;
  color: white;
  /* text-align: center;   */
  padding: 0px 10px;

  @media (min-width: 1050px) {
    padding: 0px 210px;
    text-align: justify;
  }
`;

const MainAboutText = styled.h3`
  text-align: center;
  font-family: "Karla", sans-serif;
  color: white;
`;

const ProjectSectionTitle = styled.h2`
  font-family: "Karla", sans-serif;
  color: white;
  font-size: 30px;
  margin-bottom: 60px;
  text-align: center;
`;

const ProjectText = styled.p`
  font-family: "Montserrat", sans-serif;
  padding: 0px 15px;

  @media (min-width: 480px) {
    text-align: center;
  }
`;

const Tech = styled.span`
  font-family: "Karla", sans-serif;
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px 7px;
  border: 1px solid white;
  border-radius: 3px;
  margin-right: 3px;
  margin-top: 3px;
`;

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

  :hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

export {
  Site,
  IntroDiv,
  IntroHeader,
  IntroUpright,
  UprightDiv,
  ProjectsDiv,
  Project,
  ProjectLast,
  ProjectTitle,
  ProjectText,
  Tech,
  ContactDiv,
  ContactTitle,
  ContactIcons,
  AboutDiv,
  AboutTitle,
  AboutText,
  MainAboutText,
  ProjectSectionTitle,
  SkillsDiv,
  Skills,
  Line,
};
