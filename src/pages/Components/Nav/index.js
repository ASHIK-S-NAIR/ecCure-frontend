import React, { useState } from "react";
import "./style.css";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <section className="nav-section">
      <div className="nav-boxShadow">
        <nav className="navigation wrap">
          <h1 className="navigation-logo">EcCure</h1>
          <div
            className={`navigation-section ${toggle === true ? "open" : ""}`}
          >
            <ul className="navigation-ul">
              <li className="navigation-li" onClick={() => setToggle(!toggle)}>
                <a href="#whychooseus" className="navigation-a">
                  Why Choose us
                </a>
              </li>
              <li className="navigation-li" onClick={() => setToggle(!toggle)}>
                <a href="#contactus" className="navigation-a">
                  Contact us
                </a>
              </li>
            </ul>

            <ul className="navigation-social">
              <a
                className="navigation-social-a"
                href="/"
                onClick={() => setToggle(!toggle)}
              >
                <i className="fab fa-facebook navigation-social-icon"></i>
              </a>
              <a
                className="navigation-social-a"
                href="/"
                onClick={() => setToggle(!toggle)}
              >
                <i className="fab fa-instagram navigation-social-icon"></i>
              </a>
              <a
                className="navigation-social-a"
                href="/"
                onClick={() => setToggle(!toggle)}
              >
                <i className="far fa-envelope navigation-social-icon"></i>
              </a>
              <a
                className="navigation-social-a"
                href="/"
                onClick={() => setToggle(!toggle)}
              >
                <i className="fab fa-whatsapp navigation-social-icon"></i>
              </a>
            </ul>
          </div>
          <div
            className={`nav-toggle ${toggle === true ? "active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span></span>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Nav;
