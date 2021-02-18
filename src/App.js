import React from 'react'
import Intro from './components/Intro'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

import { Site } from './Styled'
import './App.css'


export default function App() {
    return (
        <Site>
            <Intro />
            <Projects />
            <Contact />
        </Site>
    )
}
