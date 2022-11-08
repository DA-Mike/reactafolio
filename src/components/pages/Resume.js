import React from 'react';
import '../styles/pages.css';

const resumeText = [`
    My Resume
Front-End Proficiencies

    HTML
    CSS
    JavaScript
    jQuery
    Responsive Design
    React
    Angular
    Bootstrap

Back-End Proficiencies

    APIs
    Node
    Express
    MySQL, Sequelize
    MongoDB, Mongoose
    React
    Rest
    GraphQL
    Python
    Java
    Spring Boot`];

const downloadDocFile = () => {
    const file = new Blob(resumeText, {type: 'text/plain'});

    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = "Mike-Rugh_Resume-" + Date.now() + ".doc";

    document.body.appendChild(element);
    element.click();
}

function Resume() {
    return (
        <div>
            <div className='page-container'>
                <h1>My Resume</h1>
                <button className="btn btn-primary" id="downloadBtn"  onClick={downloadDocFile} value="download">Download Resume</button>
                <div><h3>Front-End Proficiencies</h3>
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
                    <h3>Back-End Proficiencies</h3>
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