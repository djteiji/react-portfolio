import React from 'react';
// import Photos from '../../assets/images/';
import projects from '../../projects.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// console.log(Photos)

function ProjectCard (props) {

  return (
    <section>
      <Card style={{ width: '18rem' }}>
        <Card.Img alt={props.name} src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </section>
  );
}

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function Projects () {  
  return (
  <>
  <div className="project">
  </div>

    <Wrapper>
    <h1>Coding Projects</h1>
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