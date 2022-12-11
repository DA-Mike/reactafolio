import React from 'react';
import Project from '../Project';

function Portfolio() {

    const repoArr = [];
    
    const getRepos = async () => {

        const data = await fetch('https://api.github.com/users/da-mike/repos');
        // , {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // });
        const content = await data.json();
        console.log('content:', content);

        for (let i = 0; i < content.length; i++) {
            repoArr.push(content[i]);
        };

        repoArr.sort((a, b) => (a.homepage < b.homepage ? 1 : -1));

        console.log('repoArr:', repoArr);
    };
    getRepos();

    // repoArr.sort((a, b) => a.homepage - b.homepage);
    // await repoArr.sort((a, b) => (a.homepage > b.homepage ? 1 : -1));

    // console.log('repoArr:', repoArr.sort((a, b) => ((a.homepage ? 1 : -1) > (b.homepage ? 1 : -1) ? 1 : -1)));
    // console.log('repoArr:', repoArr);

    return (
        <div>
            <div className=''>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='project-container col-md-3'>
                        <Project  title='Barcade' description='Final Team Project' depUrl='https://secure-everglades-09731.herokuapp.com/' gitHub='https://github.com/iamjoyfulgirl/barcade'/>
                    </div>

                    <div className='project-container col-md-3'>
                        <Project  title='Bar Hopper' description='Team Project' depUrl='https://da-mike.github.io/Bar-Hopper/' gitHub='https://github.com/DA-Mike/Bar-Hopper'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='project-container col-md-3'>
                        <Project  title='Lumivent' description='Team Project' depUrl='https://lumivent-planner.herokuapp.com/' gitHub='https://github.com/DA-Mike/Group-Event-Planner'/>
                    </div>
                    <div className='project-container col-md-3'>
                        <Project  title='Textapad' description='Progressive Web App' depUrl='https://textapad.herokuapp.com/' gitHub='https://github.com/DA-Mike/textapad'/>
                    </div>
                    <div className='col-md-3'></div>
                </div>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='project-container col-md-3'>
                        <Project  title='Book Quest' description='React/GraphQL/MongoDB' depUrl='https://book-quest1.herokuapp.com/' gitHub='https://github.com/DA-Mike/book_quest'/>
                    </div>
                    <div className='project-container col-md-3'>
                        <Project  title='Scribe Notation' description='NodeJS/Express/Rest API' depUrl='https://scribe-notation.herokuapp.com/' gitHub='https://github.com/DA-Mike/scribe_notation'/>
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