import styled from "styled-components";

// --- DIVS --- //

const UprightDiv = styled.div`
  padding-top: 300px;
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



// --- HEADERS --- //

const ProjectTitle = styled.h3`
  font-family: "Karla", sans-serif;
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



export {
  UprightDiv,
  ProjectsDiv,
  Project,
  ProjectLast,
  ProjectTitle,
  ProjectText,
  Tech,
  ProjectSectionTitle,
};
