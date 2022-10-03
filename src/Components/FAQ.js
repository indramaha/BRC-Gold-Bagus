import React from "react";
import { Col, Container, Row, Accordion } from "react-bootstrap";

import "./FAQ.css";

const FAQ = () => {
  return (
    <Container className="faq-container">
      <Row>
        <Col md={4} id="faq">
          <Row className="faq-col-1-1">
            <h3>
              <b>Frequently Asked Question</b>
            </h3>
          </Row>
          <Row className="faq-col-1-2">
            <p>
              <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>
            </p>
          </Row>
        </Col>
        <Col md={{ span: 7, offset: 1 }} className="accord-faq">
          <Accordion defaultActiveKey="0">
            {/*Accord 1 start */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            {/*Accord 1 end */}

            {/*Accord 2 start */}
            <Accordion.Item eventKey="1" className="mt-3">
              <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            {/*Accord 2 end */}

            {/*Accord 3 start */}
            <Accordion.Item eventKey="2" className="mt-3">
              <Accordion.Header>Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            {/*Accord 3 end */}

            {/*Accordd 4 start */}
            <Accordion.Item eventKey="3" className="mt-3">
              <Accordion.Header>AApakah Ada biaya antar-jemput?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            {/*Accord 4 end */}

            {/*Accord 5 start */}
            <Accordion.Item eventKey="4" className="mt-3">
              <Accordion.Header>Bagaimana jika terjadi kecelakaan</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            {/*Accord 5 end */}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;
