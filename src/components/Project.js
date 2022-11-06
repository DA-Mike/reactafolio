import React from 'react';
import './styles/project.css';
import { BsGithub } from 'react-icons/bs';

export default function Project({ title, description, depUrl, gitHub }) {

    return (
        <div>
            <div className='card project-card' bg='primary'>
                <a href={depUrl}><h4>{title}</h4><p>{description}</p></a>
                <a href={gitHub}><div><BsGithub /></div></a>
            </div>
        </div>
    );
};