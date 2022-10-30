import React from "react";
import "./style.css";

const ContactUs = () => {
  return (
    <section className="contactus" id="contactus">
      <div className="contactus-wrap wrap">
        <h1 className="contactus-heading" data-aos="fade-up">
          Contact <span>us</span>
        </h1>
        <div className="contactus-inner">
          <div className="contactus-div-form" data-aos="fade-down">
            <form action="post" className="contactus-form">
              <div className="contactus-form-sec">
                <label htmlFor="Name" className="contactus-form-label">
                  Name
                </label>
                <input
                  className="contactus-form-input"
                  type="text"
                  name="name"
                  id="Name"
                />
              </div>

              <div className="contactus-form-sec">
                <label htmlFor="Email" className="contactus-form-label">
                  Email
                </label>
                <input
                  className="contactus-form-input"
                  type="email"
                  name="email"
                  id="Email"
                />
              </div>

              <div className="contactus-form-sec">
                <label htmlFor="Message" className="contactus-form-label">
                  Message
                </label>
                <textarea
                  className="contactus-form-textarea"
                  name="message"
                  id="Message"
                  cols="30"
                  rows="8"
                ></textarea>
              </div>

              <input
                className="contactus-form-submit"
                type="button"
                value="Submit"
              />
            </form>
          </div>
          <div className="contactus-info" data-aos="fade-left">
            <p className="contactus-p">
              Never hesitate to make a call to us for any query or reason, our
              customer service is 24/7 online and waiting for your call. For
              queries on packages, offers, centers, or anything else contact via
              form or any else given below.
            </p>
            <div className="contactus-social">
              <a className="contactus-social-a" href="/">
                <i className="fab fa-facebook contactus-social-icon"></i>{" "}
                <p className="contactus-social-p">facebook.com/EcEcure</p>
              </a>
              <a className="contactus-social-a" href="/">
                <i className="fab fa-instagram contactus-social-icon"></i>{" "}
                <p className="contactus-social-p">instagram.com/EcEcure</p>
              </a>
              <a className="contactus-social-a" href="/">
                <i className="far fa-envelope contactus-social-icon"></i>{" "}
                <p className="contactus-social-p">eccure.help@gmail.com</p>
              </a>
              <a className="contactus-social-a" href="/">
                <i className="fab fa-whatsapp contactus-social-icon"></i>{" "}
                <p className="contactus-social-p">+91-9999988888</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
