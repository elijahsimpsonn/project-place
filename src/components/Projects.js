import React from 'react'
import { ProjectsDiv, Project, ProjectTitle, ProjectText, Tech } from '../Styled'
import WaitCash from '../images/waitcash.gif'
import './Projects.css'

export default function Projects() {
    return (
        <ProjectsDiv>
            <Project>
                <img src={WaitCash} alt="waitcash" className="pimg" />
                <ProjectTitle>WaitCash</ProjectTitle>
                <ProjectText>dfjgdkfj dslkfjsldkfj sldkjfsldkfjl sldkjfsldkfjsldkfj lsdkjfslkdfj lxkjlkj lkjsldkjflo</ProjectText>
                <div>
                    <Tech>Javascript</Tech>
                    <Tech>React</Tech>
                    <Tech>React Router</Tech>
                    <Tech>Node.js</Tech>
                    <Tech>Express.js</Tech>
                    <Tech>PostgreSQL</Tech>
                </div>
            </Project>
        </ProjectsDiv>
    )
}
