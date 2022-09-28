import React from "react";
import "./IntroStyle.css";
import CarImg from "../Assets/Gambar/img_car.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mt-4">
            <h1>
              <b>Sewa & Rental Mobil Terbaik di kawasan Tabanan</b>
            </h1>
            <p className="col-sm-10 mt-3">
              <b>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </b>
            </p>
            <button className="border-0 text-light mt-3">
              Mulai Sewa Mobil
            </button>
          </div>
          <div className="col-sm-6 mt-3">
            <div className="carimg">
              <img src={CarImg} alt="mobil" className="mobil img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
