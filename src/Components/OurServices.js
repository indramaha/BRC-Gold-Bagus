import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServiceImg from "../Assets/Gambar/img_service.png";
import { FiCheck } from "react-icons/fi";

import "./OurServicesStyle.css";

const OurServices = () => {
  return (
    <div>
      <Container className="servicesec">
        <Row className="mt-5 justify-content-center">
          <Col md={6} className="mt-5">
            <img src={ServiceImg} alt="serviceimg" className="serviceimg img-fluid" />
          </Col>
          <Col md={6} className="textcol mt-5">
            <Row>
              <h3><b>Best Car Rental for any kind of trip in Tabanan</b></h3>
            </Row>
            <Row className="mt-4">
              <p><b>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</b></p>
            </Row>
            <Row className="mt-2">
              <Row className="">
                <Col className="col-1">
                <div className="ficheckb">
                  <FiCheck size={16} className="ficheck" />
                </div>
                </Col>
                <Col className="col-10">
                  <p><b>Sewa Mobil Dengan Supir di Bali 12 Jam</b></p>
                </Col>
              </Row>
              <Row className="">
                <Col className="col-1">
                <div className="ficheckb">
                  <FiCheck size={16} className="ficheck" />
                </div>
                </Col>
                <Col className="col-10">
                  <p><b>Sewa Mobil Lepas Kunci di Bali 24 Jam</b></p>
                </Col>
              </Row>
              <Row className="">
                <Col className="col-1">
                <div className="ficheckb">
                  <FiCheck size={16} className="ficheck" />
                </div>
                </Col>
                <Col className="col-10">
                  <p><b>Sewa Mobil Jangka Panjang Bulanan</b></p>
                </Col>
              </Row>
              <Row className="">
                <Col className="col-1">
                <div className="ficheckb">
                  <FiCheck size={16} className="ficheck" />
                </div>
                </Col>
                <Col className="col-10">
                  <p><b>Gratis Antar - Jemput Mobil di Bandara</b></p>
                </Col>
              </Row>
              <Row className="">
                <Col className="col-1">
                <div className="ficheckb">
                  <FiCheck size={16} className="ficheck" />
                </div>
                </Col>
                <Col className="col-10">
                  <p><b>Layanan Airport Transfer / Drop In Out</b></p>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurServices;
