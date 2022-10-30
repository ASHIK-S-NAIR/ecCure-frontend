import React from "react";
import hero2Img from "../../../../assets/Images/hero2.png";

import "./style.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-wrap wrap">
        <div
          className="hero-section-info"
          data-aos="fade-up"
          data-aos-duration="1600"
        >
          <h1 className="hero-section-heading">
            Fix your phone with a{" "}
            <span className="hero-section-span">click</span>
          </h1>
          <p className="hero-section-subheading">
            Need world className state of art technology service, No more search{" "}
            <br className="br" /> for a service centre, Let us a chance to serve
            you{" "}
          </p>
          <ul className="hero-section-ul">
            <li className="hero-section-li hero-section-li-1">
              <i className="far fa-dot-circle hero-section-i"></i>Doorstep
              Service
            </li>
            <li className="hero-section-li hero-section-li-2">
              <i className="far fa-dot-circle hero-section-i"></i>Certified
              Technicians
            </li>
            <li className="hero-section-li hero-section-li-3">
              <i className="far fa-dot-circle hero-section-i"></i>Quick
              Diagnosis
            </li>
          </ul>

          <label htmlFor="mobile-brand" className="hero-section-label">
            Search your mobile brand
          </label>
          <form action="" className="hero-section-form">
            <input
              id="mobile-brand"
              type="text"
              className="hero-section-input"
            />
            <button className="hero-section-form-btn">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        <img
          className="hero-section-img"
          src= {hero2Img}
          alt=""
          data-aos="fade-down"
          data-aos-duration="1600"
        />
      </div>
    </section>
  );
};

export default Hero;
