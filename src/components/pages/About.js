import React from 'react';
import '../styles/pages.css';
import profilePic from '../../assets/images/profile_pic.jpg'

function About() {
    return (
        <div>
            <div className='page-container'>
                <h1 className='about gradient-text'>About Me</h1>
                <div className='aboutPic'><img src={profilePic} alt='profile' className='profile-pic'></img></div>
                <div className='aboutText'>Hello! My name is Mike Rugh, I'm a full stack engineer currently seeking employment opportunities. My background is in SDLC management, and having taken many applications and major enhancements from conceptualization to deployment I believe I can add value to almost any team.</div>
            </div>
        </div>
    );
};

export default About;