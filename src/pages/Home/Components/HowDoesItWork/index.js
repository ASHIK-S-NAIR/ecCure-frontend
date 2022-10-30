import React from "react";
import chooseMobileImg from "../../../../assets/Images/chooseMobile.png";
import pickupImg from "../../../../assets/Images/pickup.png";
import phoneRepairImg from "../../../../assets/Images/phoneRepair.png";
import "./style.css";

const HowDoesItWork = () => {
  return (
    <section className="howdoesitwork">
      <div className="howdoesitwork-wrap wrap">
        <h1 className="howdoesitwork-heading" data-aos="fade-up">
          How does it <span>work</span>
        </h1>
        <div className="howdoesitwork-inner">
          <div className="howdoesitwork-section" data-aos="flip-up">
            <p className="howdoesitwork-index">01</p>
            <img
              className="howdoesitwork-img"
              src={chooseMobileImg}
              alt="Choose your Phone"
            />
            <div className="howdoesitwork-info">
              <h3 className="howdoesitwork-subheading">Select your Phone</h3>
              <p className="howdoesitwork-p">
                Choose your mobile phone model from the given specified models
              </p>
            </div>
          </div>
          <div className="howdoesitwork-section" data-aos="flip-up">
            <p className="howdoesitwork-index">02</p>
            <img
              className="howdoesitwork-img"
              src={pickupImg}
              alt="Book your Pickup"
            />
            <div className="howdoesitwork-info">
              <h3 className="howdoesitwork-subheading">Book your Pickup</h3>
              <p className="howdoesitwork-p">
                Book a pickup date and time that is comfortable for yourself
              </p>
            </div>
          </div>
          <div className="howdoesitwork-section" data-aos="flip-up">
            <p className="howdoesitwork-index">03</p>
            <img
              className="howdoesitwork-img"
              src={phoneRepairImg}
              alt="Repair your Phone"
            />
            <div className="howdoesitwork-info">
              <h3 className="howdoesitwork-subheading">Repair your Phone</h3>
              <p className="howdoesitwork-p">
                Your mobile phone is repaired at our service centerd
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowDoesItWork;
