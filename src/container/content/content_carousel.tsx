import React, { useState } from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
// import imgCarousel_User1 from "../../image/2-SOCIAL_PROOF-User_Image_1.png";
// import imgCarousel_User2 from "../../image/2-SOCIAL_PROOF-User_Image_2.png";
// import imgCarousel_User3 from "../../image/2-SOCIAL_PROOF-User_Image_3.png";

const Content_carousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h2 className="section-title">
            Loved by educators in over 50% of U.S. schools and 150 countries.
          </h2>
          <div className="section-text-small">
            Here’s what they have to say...
          </div>
        </Col>
        <Col md={12}></Col>
      </Row>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            width="50px"
            height="50px"
            src="imgCarousel_User1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Content_carousel;
