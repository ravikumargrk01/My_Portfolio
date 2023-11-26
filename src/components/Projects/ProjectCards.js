import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ width: '20rem', height: "20rem", justifyContent: "center"  }}>
      <Card.Body>
        <Card.Title style={{fontWeight: "bold"}}>{props.title}</Card.Title>
        <Card.Text className="purple">Technology: {props.technologyUsed}</Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
       <h2> Yet to Implement</h2>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
