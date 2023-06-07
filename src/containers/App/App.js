import React from 'react'
import Intro from '../Intro/Intro'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import About from '../About/About'
import Experience from '../Experience/Experience'
import Blog from '../Blog/Blog'
import Education from '../Education/Education'
import HorizontalLine from '../../components/HorizontalLine/HorizontalLine'
import './App.css'


export default function App() {
    return (
        <div className="site-container">
            <Intro />
            <About />
            <HorizontalLine />
            <Experience />
            <HorizontalLine />
            <Projects />
            <HorizontalLine />
            <Contact />
        </div>
    )
}

//TODO - Add Projects Section When Refactored
//TODO - Add Blog Section When Created
//TODO - Add Education Section When Created


