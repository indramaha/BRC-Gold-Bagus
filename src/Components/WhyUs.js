import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FiThumbsUp, FiTag, FiClock, FiAward } from "react-icons/fi";

import "./WhyUsStyle.css";

const WhyUs = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="texth3">
              <h3>
                <b>Why Us?</b>
              </h3>
            </div>
          </Col>
        </Row>
        <Row className="textp">
          <Col>
            <div className="textp">
              <p>
                <b>Mengapa harus pilih Binar Car Rental?</b>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Card className="mt-3">
              <div className="insidecard">
                <div className="fithumbsupb">
                  <FiThumbsUp size={20} className="fithumbsup" />
                </div>
                <h5 className="mt-4">
                  <b>Mobil Lengkap</b>
                </h5>
                <p className="mt-4">
                  <b>
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </b>
                </p>
              </div>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="mt-3">
              <div className="insidecard">
                <div className="fitagb">
                  <FiTag size={20} className="fitag" />
                </div>
                <h5 className="mt-4">
                  <b>Harga Murah</b>
                </h5>
                <p className="mt-4">
                  <b>
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </b>
                </p>
              </div>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="mt-3">
              <div className="insidecard">
                <div className="ficlockb">
                  <FiClock size={20} className="ficlock" />
                </div>
                <h5 className="mt-4">
                  <b>Layanan 24 Jam</b>
                </h5>
                <p className="mt-4">
                  <b>
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </b>
                </p>
              </div>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="mt-3">
              <div className="insidecard">
                <div className="fiawardb">
                  <FiAward size={20} className="fiaward" />
                </div>
                <h5 className="mt-4">
                  <b>Sopir Profesional</b>
                </h5>
                <p className="mt-4">
                  <b>
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </b>
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyUs;
