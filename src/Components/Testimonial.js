import { Row } from "react-bootstrap";

import "./TestimonialStyle.css";

const Testimonial = () => {
  return (
    <div>
      <Row className="mt-5 testimonial">
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
    </div>
  );
};

export default Testimonial;
