import React from "react";
import u1Img from "../../../../assets/Images/u1.jpg";
import u2Img from "../../../../assets/Images/u2.jpg";
import u3Img from "../../../../assets/Images/u3.jpg";

import "./style.css";

const CustomerStories = () => {
  return (
    <section className="customerstories">
      <div className="customerstories-wrap wrap">
        <h1 className="customerstories-heading" data-aos="fade-up">
          Customer <span>stories</span>{" "}
        </h1>
        <div className="customerstories-inner">
          <div className="customerstories-sec" data-aos="flip-left">
            <div className="customerstories-info">
              <img className="customerstories-img" src={u1Img} alt="IMG" />
              <div className="customerstories-detail">
                <h3 className="customerstories-name">Adarsh CK</h3>
                <h5 className="customerstories-place">Bangalore</h5>
              </div>
            </div>
            <p className="customerstories-tell">
              EcCure helped me when I realy needed my phone fixed, Just a phone
              call to EcCure took care made the process easy of finding the
              right repair store, best components, and best price.
            </p>
          </div>
          <div className="customerstories-sec" data-aos="flip-left">
            <div className="customerstories-info">
              <img className="customerstories-img" src={u2Img} alt="IMG" />
              <div className="customerstories-detail">
                <h3 className="customerstories-name">Kailas</h3>
                <h5 className="customerstories-place">Hyderabad</h5>
              </div>
            </div>
            <p className="customerstories-tell">
              My phone accidently dropped into water and phone dead instantly, I
              approched EcCure with a click, after their diagnosis a good
              package with extra warrenty was offered by them.
            </p>
          </div>
          <div className="customerstories-sec" data-aos="flip-left">
            <div className="customerstories-info">
              <img className="customerstories-img" src={u3Img} alt="IMG" />
              <div className="customerstories-detail">
                <h3 className="customerstories-name">Ajmal T</h3>
                <h5 className="customerstories-place">Noida</h5>
              </div>
            </div>
            <p className="customerstories-tell">
              I did my virus protection software from EcCure, I had a great
              experiance with them, The most best feature about EcCure is the
              doorstep service, so that I don't want to go search for my phone
              doctor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;
