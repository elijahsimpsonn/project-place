import React from 'react'
import { ContactDiv, ContactTitle, ContactIcons } from '../Styled'

export default function Contact() {
    return (
        <ContactDiv>
            <ContactTitle>Contact Me</ContactTitle>
            <div>
                <a href="mailto: elijahsimpson1991@gmail.com"><ContactIcons>Email</ContactIcons></a>
                <a href="https://github.com/elijahsimpsonn"><ContactIcons>GitHub</ContactIcons></a>
                <a href="https://www.linkedin.com/in/elijahsimpson/"><ContactIcons>LinkedIn</ContactIcons></a>
                <a href="https://twitter.com/elijahsimpsonn"><ContactIcons>Twitter</ContactIcons></a>
            </div>
        </ContactDiv>
    )
}
