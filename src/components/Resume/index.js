import React from 'react';
import SampleResume from './SampleResume.pdf';

function Resume() {
    return (
      <section className='resume-section'>
        <h1 id='about'>Front End</h1>
        <div>
            <ul className='skills'>
                <li>
                    <p>React</p>
                </li>
                <li>
                    <p>Bootstrap</p>
                </li>
                <li>
                    <p>responsive design</p>
                </li>
                <li>
                    <p>JQuery</p>
                </li>
                <li>
                    <p>Javascript</p>
                </li>
                <li>
                    <p>CSS</p>
                </li>
                <li>
                    <p>HTML</p>
                </li>
            </ul>
        </div>
        <h1 id='about' className='backend'>Back End</h1>
        <div>
            <ul className='skills'>
                <li>
                    <p>APIs</p>
                </li>
                <li>
                    <p>Node</p>
                </li>
                <li>
                    <p>Express</p>
                </li>
                <li>
                    <p>MySQL, Sequelize</p>
                </li>
                <li>
                    <p>MongoDB, Mongoose</p>
                </li>
                <li>
                    <p>REST</p>
                </li>
                <li>
                    <p>GraphQL</p>
                </li>
            </ul>
        </div>

        <a className='skills download-resume' href={SampleResume} download>Download Resume</a>
  
      </section>
    );
  }
  export default Resume;