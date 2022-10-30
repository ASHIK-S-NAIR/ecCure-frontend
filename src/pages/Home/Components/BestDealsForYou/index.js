import React from "react";
import phoneBatteryGreenImg from "../../../../assets/Images/phoneBatteryGreen.png";
import phoneWaterGreenImg from "../../../../assets/Images/phoneWaterGreen.png";
import phoneAntivirusGreenImg from "../../../../assets/Images/phoneAntivirusGreen.png";
import "./style.css";

const BestDealsForYou = () => {
  return (
    <section className="bestdealsforyou">
      <div className="bestdealsforyou-wrap wrap">
        <h1 className="bestdealsforyou-heading" data-aos="fade-up">
          Best deals for <span>you</span>
        </h1>
        <div className="bestdealsforyou-inner">
          <div
            className="bestdealsforyou-section bestdealsforyou-section-1"
            data-aos="zoom-in"
          >
            <img
              src={phoneBatteryGreenImg}
              alt=""
              className="bestdealsforyou-img"
            />
            <div className="bestdealsforyou-info">
              <h3 className="bestdealsforyou-subheading">Battery Replacement</h3>
              <p className="bestdealsforyou-p">
                Get 6 months warrenty + extra 6 months warrenty
              </p>
            </div>
          </div>
          <div
            className="bestdealsforyou-section bestdealsforyou-section-2"
            data-aos="zoom-in"
          >
            <img src={phoneWaterGreenImg} alt="" className="bestdealsforyou-img" />
            <div className="bestdealsforyou-info">
              <h3 className="bestdealsforyou-subheading">Water Damage</h3>
              <p className="bestdealsforyou-p">
                Get 6 months warrenty after the water damage service{" "}
              </p>
            </div>
          </div>
          <div
            className="bestdealsforyou-section bestdealsforyou-section-3"
            data-aos="zoom-in"
          >
            <img
              src={phoneAntivirusGreenImg}
              alt=""
              className="bestdealsforyou-img"
            />
            <div className="bestdealsforyou-info">
              <h3 className="bestdealsforyou-subheading">Virus Protection</h3>
              <p className="bestdealsforyou-p">
                Get 1 year Antivirus coverage + 6 months extra coverage
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestDealsForYou;
