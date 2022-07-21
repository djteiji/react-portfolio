import React from 'react';
import imageObj from '../../assets/images';
import projects from '../../projects.json'
import Card from 'react-bootstrap/Card';

const imageArr = [
  imageObj.BudgetTracker,
  imageObj.FoodFestival,
  imageObj.TheTechBlog,
  imageObj.PhotoPort,
  imageObj.PizzaHunt,
  imageObj.RunBuddy
]

function ProjectCard(props) {

  return (

      <Card style={{ width: '18rem' }}>
        <Card.Img className='' alt={props.name} src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <a href={props.deployedapp} rel="noreferrer" target="_blank"><img src="https://img.icons8.com/ios/50/000000/internet--v1.png" alt="web-icon" className="card-icon" /></a>
          <a href={props.github} rel="noreferrer" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="github-icon" className="card-icon" /></a>
        </Card.Body>
      </Card>
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
  <h1 id='about' className='coding-projects' >Portfolio</h1>

    <Wrapper>

      {projects.map((project, index) => (
        <ProjectCard 
        name={project.name}
        key={project.id}
        image={imageArr[index]}
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