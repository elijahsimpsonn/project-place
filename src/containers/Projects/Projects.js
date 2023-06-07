import React from "react";
import "./Projects.css";
import waitcash from "../../images/waitcash.gif";
import cointrack from "../../images/cointrack.gif";

export default function Projects() {
  return (
    <>
      <h2 className="projects-header">Projects</h2>
      <div className="projects-container">
        <div className="project">
          <img className="mobile-project-img" src={waitcash}></img>
        </div>
        <div className="project">
          <img className="mobile-project-img" src={cointrack}></img>
        </div>
      </div>
    </>
  );
}

/*
import React from 'react'
import { ProjectsDiv, Project, ProjectTitle, ProjectText, Tech, ProjectSectionTitle, ProjectLast } from '../../Styled'
import WaitCash from '../images/waitcash.gif'
import CoinTrack from '../images/cointrack.gif'
import './Projects.css'

export default function Projects() {
    return (
    <>            
    <ProjectSectionTitle>Projects</ProjectSectionTitle>

        <ProjectsDiv>
            <Project>
                <img src={WaitCash} alt="waitcash" className="pimg" />
                <a href="https://waitcash-client.vercel.app/"><ProjectTitle>WaitCash</ProjectTitle></a>
                <ProjectText>WaitCash is an application for anyone who works in a position that earns them tips. </ProjectText>
                <ProjectText>
                    Users of the application can create an account and enter tips which will be saved into their account. They can then see multiple breakdowns of their earnings in different formats.
                </ProjectText>
                <div>
                    <Tech>Javascript</Tech>
                    <Tech>React</Tech>
                    <Tech>React Router</Tech>
                    <Tech>Node.js</Tech>
                    <Tech>Express.js</Tech>
                    <Tech>PostgreSQL</Tech>
                    <Tech>JWT Authentication</Tech>
                </div>
            </Project>
            <ProjectLast>
                <img src={CoinTrack} alt="cointrack" className="pimg" />
                <a href="https://cointrack.netlify.app/"><ProjectTitle>CoinTrack</ProjectTitle></a>
                <ProjectText>CoinTrack is a landing page made to show current information on different blockchain currencies. </ProjectText>
                <ProjectText>
                    The page shows 99 coins, decreasing by market cap. You can search for a coin within the list and watch it filter in real-time.
                </ProjectText>
                <div>
                    <Tech>Javascript</Tech>
                    <Tech>React</Tech>
                    <Tech>React Router</Tech>
                    <Tech>Axios</Tech>
                    <Tech>Bootstrap</Tech>
                </div>
            </ProjectLast>
        </ProjectsDiv>
        </>
    )
}
*/
