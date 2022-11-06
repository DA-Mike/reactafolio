import React from 'react';
import { BsGithub, BsLinkedin, BsStackOverflow} from 'react-icons/bs';

function Footer() {
    return (
        <div className='footer' bg='primary'>
            <div><a className='icon-container' href="https://github.com/DA-Mike"><BsGithub /></a><a className='icon-container' href="https://www.linkedin.com/in/michaelrugh/"><BsLinkedin /></a><a className='icon-container' href="https://stackoverflow.com/users/4793864/supernoob"><BsStackOverflow /></a></div>
        </div>
    );
};

export default Footer;