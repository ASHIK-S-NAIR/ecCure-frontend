import React from "react";
import "./style.css";

const WhyChooseUs = () => {
  return (
    <section className="whychooseus" id="whychooseus">
      <div className="whychooseus-wrap wrap">
        <h1 className="whychooseus-heading" data-aos="fade-up">
          Why choose <span>us</span>
        </h1>
        <div className="whychooseus-inner">
          <div className="whychooseus-text" data-aos="fade-right">
            <div className="whychooseus-QA">
              <h3 className="whychooseus-ques">Our Team</h3>
              <p className="whychooseus-ans">
                We are an experienced team of professionals in attending
                accidental or any broken phones.
              </p>
            </div>

            <div className="whychooseus-QA">
              <h3 className="whychooseus-ques">Our Tech</h3>
              <p className="whychooseus-ans">
                Diagnosis and restoration are performed using the latest
                hardware and software technologies.{" "}
              </p>
            </div>

            <div className="whychooseus-QA">
              <h3 className="whychooseus-ques">Our Offers</h3>
              <p className="whychooseus-ans">
                We can offer you a wide range of offers discounts. Also include
                restoration and improvisation packages.
              </p>
            </div>
          </div>
          <div className="whychooseus-section" data-aos="fade-left">
            <div className="whychooseus-sec dark-green">Most trusted</div>
            <div className="whychooseus-sec light-green">Warrenty</div>
            <div className="whychooseus-sec medium-green">Advanced diagnosis</div>
            <div className="whychooseus-sec dark-green">Quality service</div>
            <div className="whychooseus-sec dark-green">Certfied technicians</div>
            <div className="whychooseus-sec light-green">More</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
