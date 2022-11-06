import React from 'react';
import '../styles/pages.css';

function Resume() {
    return (
        <div>
            <div className='page-container'>
                <h1>My Resume</h1>
                <a href="../../../assets/resume.doc" download><div>Click here to download my resume</div></a>
                <div><h3>Front End Proficiencies</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Responsive Design</li>
                        <li>React</li>
                        <li>Angular</li>
                        <li>Bootstrap</li>
                    </ul>
                    <h3>Back End Proficiencies</h3>
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>React</li>
                        <li>Rest</li>
                        <li>GraphQL</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>Spring Boot</li>
                    </ul>   
                </div>
            </div>
        </div>
    );
};

export default Resume;