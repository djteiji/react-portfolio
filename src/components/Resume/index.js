import React from 'react';
import SampleResume from './SampleResume.pdf';

function Resume() {
    return (
      <section>
        <h1>Front End</h1>
        <div>
            <ul>
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
        <h1>Back End</h1>
        <div>
            <ul>
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

        <a href={SampleResume} download>Download Resume</a>
  
      </section>
    );
  }
  export default Resume;