import { Card, Container } from "react-bootstrap";

import "./SewaMobil.css";

const SewaMobil = () => {
  return (
    <Container className="sewa-mobil-con">
      <div>
        <Card className="kartu-sewa">
          <div className="title-kartu-sewa">
            <h1>
              <b>Sewa Mobil di Tabanan Sekarang</b>
            </h1>
          </div>
          <div className="desc-kartu-sewa">
            <p className="text-white">
              <b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </b>
            </p>
          </div>
          <div>
            <button className="button-sewa-mobil">Mulai Sewa Mobil</button>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default SewaMobil;
