
import { Col, Container, Row } from "react-bootstrap"
import {FiFacebook, FiInstagram, FiTwitter, FiMail, FiTwitch} from "react-icons/fi"
import Logo from "../Assets/Gambar/logo.png"

import "./Footer.css"

const Footer = () => {
    return (
        <Container className="footer">
            <Row>
                <Col lg={3}>
                    <Row className="addres-footer">
                        <p><b>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</b></p>
                    </Row>
                    <Row className="binar-mail">
                        <p><b>binarcarrental@gmail.com</b></p>
                    </Row>
                    <Row className="binar-phone">
                        <p><b>081-233-334-808</b></p>
                    </Row>
                </Col>
                <Col lg={2}>
                    <Row className="footer-nav-1">
                        <p>Our services</p>
                    </Row>
                    <Row className="footer-nav-2">
                        <p>Why Us</p>
                    </Row>
                    <Row className="footer-nav-3">
                        <p>Testimonial</p>
                    </Row>
                    <Row className="footer-nav-4">
                        <p>FAQ</p>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row>
                        <p><b>Connect with us</b></p>
                    </Row>
                    <Row>
                        <Col md={1} className="col-icon-footer">
                            <div className="footer-icon">
                                <FiFacebook size={20} />
                            </div>
                        </Col>
                        <Col md={1} className="col-icon-footer">
                            <div className="footer-icon">
                                <FiInstagram size={20} />
                            </div>
                        </Col>
                        <Col md={1} className="col-icon-footer">
                            <div className="footer-icon">
                                <FiTwitter size={20} />
                            </div>
                        </Col>
                        <Col md={1} className="col-icon-footer">
                            <div className="footer-icon">
                                <FiMail size={20} />
                            </div>
                        </Col>
                        <Col md={1} className="col-icon-footer">
                            <div className="footer-icon">
                                <FiTwitch size={20} />
                            </div>
                        </Col>  
                    </Row>
                </Col>
                <Col lg={3}>
                    <Row className="copy-right">
                        <p><b>Copyright Binar 2022</b></p>
                    </Row>
                    <Row>
                        <div>
                            <img src={Logo} alt="Logo-brc" className="logo-footer" />
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;