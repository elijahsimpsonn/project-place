import React from 'react'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'

import { Site } from './Styled'
import './App.css'


export default function App() {
    return (
        <Site>
            <Intro />
            <About />
            <Projects />
            <Contact />
        </Site>
    )
}
