import { Row, Carousel } from "react-bootstrap";
import Logo from "../Assets/Gambar/logo.png"

import "./TestimonialStyle.css";

const Testimonial = () => {
  return (
    <div>
      <Row className="mt-5 testimonial" id="testimonial">
        <div className="texth3">
          <h3>
            <b>Testimonial</b>
          </h3>
        </div>
      </Row>
      <Row>
        <div className="textp">
          <p>
            <b>Berbagai review positif dari para pelanggan kami</b>
          </p>
        </div>
      </Row>
      <Row>
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Logo}
          alt="First slide"
          height={270}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={Logo}
          alt="Second slide"
          height={270}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Logo}
          alt="Third slide"
          height={270}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Row>
    </div>
  );
};

export default Testimonial;
