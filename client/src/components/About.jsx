import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Who we are</h1>
        <p>
          Welcome to PizzeRia, where passion for pizza meets a commitment to
          quality. At the heart of our journey is a deep love for crafting the
          perfect slice and delivering it with a smile. We're more than just a
          pizza shop; we're a team of dedicated pizza enthusiasts with a mission
          to satisfy your cravings one bite at a time.
        </p>
        <h1>Our Speciality</h1>
        <Row>
          <Col md={6}>
            <p>
              At PizzeRia, we're really good at making delicious pizzas. We use
              the freshest ingredients and make our pizza dough with care. Our
              team works hard to make sure every pizza we make tastes amazing.
              We want you to enjoy your pizza experience with us, and we're
              always here to make sure you're happy. Come try our special pizzas
              and see for yourself how tasty they are!
            </p>
          </Col>
          <Col md={6}>
            <p>
              Cooking up amazing pizzas is what we're all about. We choose the
              best ingredients, mix them together just right, and bake them to
              perfection. Our team loves making great pizzas, and we want you to
              love eating them. Whether you're having a family dinner or hanging
              out with friends, our pizzas are here to make your moments
              special. Come and enjoy the taste of our passion for pizza!
            </p>
          </Col>
        </Row>
        <h1>Our Chef</h1>
        <Row>
          <Col md={6}>
            <p>
              Our chef's journey started with a love for pizza that grew into a
              passion for making the best pies around. They believe that making
              pizza is an art, and they put their heart into every creation. So,
              when you order one of our pizzas, you're not just getting food;
              you're getting a piece of our chef's dedication and love for
              making delicious, mouthwatering pizzas that make you smile with
              every bite. We're proud to have them as the mastermind behind our
              pizza menu, and we can't wait for you to taste the delicious magic
              they create!
            </p>
          </Col>
          <Col md={6}>
            <p>
              Our chef is a pizza enthusiast who turns simple ingredients into
              delicious works of pizza art. They put heart and soul into every
              pizza they make, ensuring each one is a mouthwatering masterpiece.
              With a deep love for crafting pizzas, our chef adds a dash of
              passion to every pie, making each bite a delight.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
