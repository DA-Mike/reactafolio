import React from 'react';
import Project from '../Project';

function Portfolio() {
    return (
        <div>
            <div className=''>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='project-container col-md-3'>
                        <Project  title='Barcade' description='Final Team Project' depUrl='https://secure-everglades-09731.herokuapp.com/' gitHub='https://github.com/iamjoyfulgirl/barcade'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='project-container col-md-3'>
                        <Project  title='Lumivent' description='Team Project' depUrl='https://lumivent.herokuapp.com/' gitHub='https://github.com/DA-Mike/Group-Event-Planner'/>
                    </div>
                
                    <div className='project-container col-md-3'>
                        <Project  title='Bar Hopper' description='Team Project' depUrl='https://da-mike.github.io/Bar-Hopper/' gitHub='https://github.com/DA-Mike/Bar-Hopper'/>
                    </div>
                    <div className='col-md-3'></div>
                </div>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='project-container col-md-3'>
                        <Project  title='Super Calendar' description='HTML/CSS/JS' depUrl='https://da-mike.github.io/Super-Calendar/' gitHub='https://github.com/DA-Mike/Super-Calendar'/>
                    </div>
                    <div className='project-container col-md-3'>
                        <Project  title='Weather Forecast' description='HTML/CSS/JS' depUrl='https://da-mike.github.io/Most-Excellent-Weather-Forecast/' gitHub='https://github.com/DA-Mike/Most-Excellent-Weather-Forecast'/>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;