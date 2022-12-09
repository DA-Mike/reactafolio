import React from 'react';
import '../styles/pages.css';
import { CgProfile } from 'react-icons/cg';

function About() {
    return (
        <div>
            <div className='page-container'>
                <h1 className='about'>About Me</h1>
                <div className='aboutIcon'><CgProfile /></div>
                <div className='aboutText'>Hello! My name is Mike Rugh, I'm a full stack engineer who was an energy market specialist in a past life.</div>
            </div>
        </div>
    );
};

export default About;