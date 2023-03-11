import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import sortingvisualization from "../../Assets/Projects/maxresdefault.jpg";
import quizkhalo from "../../Assets/Projects/quiz-featured.webp";
import suicide from "../../Assets/Projects/suicide.png";
import swgacademy from "../../Assets/Projects/white-label-brand.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          HERE IS THE PROJECTS WHICH I HAVE WORKED RECENTLY.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizkhalo}
              isBlog={false}
              title="Quiz Khalo"
              description="a web development project which is used to visualize the the quiz app Which is made by HTML,CSS, JAVASCRIPT AND BOOTSTRAP.."
              ghLink="https://github.com/codesayanpalcoder/QUIZ-KHALO"
              demoLink="https://quizkhalo23.000webhostapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swgacademy}
              isBlog={false}
              title="SWG ACADEMY"
              description="A FULL REAL LIFE WEBSITE WHICH IS CONNECTED WITH REAL SERVER.DEVELOPED BY HTML,CSS,JS,REACT,BOOTSTRAP,HOSTINGER,UI/UX DESIGN."
              ghLink="https://github.com/codesayanpalcoder/SWG-ACADEMY-NEW1"
              demoLink="https://github.com/codesayanpalcoder/SWG-ACADEMY-NEW1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sortingvisualization}
              isBlog={false}
              title="SORTING VISUALIZATION"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/codesayanpalcoder/sorting-visulization23"
              demoLink="https://sortingvisulization.000webhostapp.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/codesayanpalcoder?tab=repositories"
              demoLink="https://github.com/codesayanpalcoder?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/codesayanpalcoder?tab=repositories"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/codesayanpalcoder?tab=repositories"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
