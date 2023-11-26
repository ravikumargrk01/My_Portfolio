import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Ravi Kumar Gorle </span>
            Java Full-Stack Developer who loves to transform ideas into reality using
            code.
            <br />
            <br />
            Highly motivated, Constantly Working on learn technolgies and bring effective solutions to the chanllenges come
            come across industry and develop efficient applications as per the client requirments.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
