import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sneakerDemo from "../../Assets/Projects/sneakerDemo.jpg"
import minTheinKha from "../../Assets/Projects/minthienkha.jpg";
import zodiacDemo from "../../Assets/Projects/zodiacDemo.jpg"
import todoListDemo from "../../Assets/Projects/todoListDemo.jpg"
import myanmarMonthsDemo from "../../Assets/Projects/myanmarMonthsDemo.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sneakerDemo}
              isBlog={false}
              title="Sneaker E-Commerce"
              description="A minimal E-Commerce Project with NextJS ExpressJs and MongoDB"
              ghLink="https://github.com/KaungSiThu075/ecommerce-nextjs-alpha"
              demoLink="https://ecommerce-nextjs-alpha-zeta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minTheinKha}
              isBlog={false}
              title="Min Thein Kha BayDin App"
              description="Minimal Bay Din App that you can ask without fee"
              ghLink="https://github.com/KaungSiThu075/mintheinkha-nextjs"
              demoLink="https://mintheinkha-nextjs.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zodiacDemo}
              isBlog={false}
              title="Zodiac App"
              description="Minimal Zodiac App for zoidacers"
              ghLink="https://github.com/KaungSiThu075/zodiac-nextjs"
              demoLink="https://zodiac-nextjs.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoListDemo}
              isBlog={false}
              title="Todo List"
              description="Simple todo list App building with NextJS ExpressJS MongoDB and React Query for the sake to understand React Query"
              ghLink="https://github.com/KaungSiThu075/todolist-react-query"
              demoLink="https://todolist-react-query-steel.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myanmarMonthsDemo}
              isBlog={false}
              title="Myanmar Months"
              description="App you can see festivals and history details about Myanmar Months"
              ghLink="https://github.com/KaungSiThu075/Myanmar-Months"
              demoLink="https://myanmar-months-nine.vercel.app/"
            />
          </Col>

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={emotion}*/}
          {/*    isBlog={false}*/}
          {/*    title="Face Recognition and Emotion Detection"*/}
          {/*    description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.*/}
          {/*    Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."*/}
          {/*    ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"*/}
          {/*    // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here */}
          {/*  />*/}
          {/*</Col>*/}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
