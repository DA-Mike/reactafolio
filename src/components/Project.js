import React from 'react';
import './styles/project.css';
import { BsGithub } from 'react-icons/bs';

export default function Project({ title, description, depUrl, gitHub }) {

    return (
        <div>
            <div className='card project-card' bg='primary'>
                <div className="row repo-title">
                    <a class="col" href={depUrl}><h4>{title}</h4></a><p class="col"><a href={gitHub}><BsGithub /></a></p>
                </div>
                <h6>{description}</h6>
            </div>
        </div>
    );
};