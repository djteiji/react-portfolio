import React from 'react';
import Photos from '../../assets/images/';
import projects from '../../projects.json'
import Card from 'react-bootstrap/Card';



function ProjectCard(props) {

  return (
    <section className='col-12 col-md-6 col-lg-4 d-flex align-items-stretch cards'>
      <Card style={{ width: '18rem' }}>
        <Card.Img className='' alt={props.name} src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <a href={props.deployedapp}><img src="https://img.icons8.com/ios/50/000000/internet--v1.png" alt="web-icon" id="port-icon" /></a>
          <a href={props.github}><img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="github-icon" id="port-icon" /></a>
        </Card.Body>
      </Card>
    </section>
  );
}

function Wrapper(props) {
  return <div className="wrapper row">{props.children}</div>;
}

function Projects () {  
  return (
  <>
  <div className="project">
  </div>
  <h1 id='about' className='coding-projects' >Coding Projects</h1>

    <Wrapper>

      {projects.map((project) => (
        <ProjectCard 
        name={project.name}
        key={project.id}
        image={project.image}
        github={project.github}
        deployedapp={project.deployedapp}
        description={project.description}
        />
      ))}
    </Wrapper>
  </>
  
  );
}
export default Projects;