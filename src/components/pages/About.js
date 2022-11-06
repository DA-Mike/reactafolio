import React from 'react';
import '../styles/pages.css';
import { CgProfile } from 'react-icons/cg';

function About() {
    return (
        <div>
            <div className='page-container'>
                <h1>About Me</h1>
                <div><CgProfile /></div>
                <div>This page talks about me and how special I am.</div>
            </div>
        </div>
    );
};

export default About;