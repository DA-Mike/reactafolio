import React from 'react';
import './styles/project.css';
import { BsGithub } from 'react-icons/bs';

export default function Project({ title, description, depUrl, gitHub }) {

    return (
        <div>
            <div className='card project-card' bg='primary'>
                <a href={depUrl}><h4>{title}</h4></a><p><a href={gitHub}><BsGithub /></a></p>
                <h6>{description}</h6>
            </div>
        </div>
    );
};