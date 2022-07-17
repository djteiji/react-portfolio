import React from 'react';
import photo from '../../assets/images/Budget-Tracker.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Projects() {
  return (
    <section>
      <h1>Coding Projects</h1>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

      {/* <div>
          <img
            src={photo}
            alt="Budget-Tracker-App Screenshot"
          />
      </div> */}

    </section>
  );
}
export default Projects;