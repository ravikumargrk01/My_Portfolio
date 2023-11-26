import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ravi_pic.jpeg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section id="home">
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h4 style={{ paddingBottom: 15 }} className="heading">
                Hi! Welcome to my profile
              </h4>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Ravi Kumar</strong>
              </h1>

              <p className="heading-description blockquote">
              A dedicated Java full-stack developer with a passion for creating impactful and scalable software solutions. 
              I thrive on challenges and love bringing ideas to life through coding.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Wanna Talk or know more about me</h1>
              <p>
                <strong>Feel free to connect with me</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
