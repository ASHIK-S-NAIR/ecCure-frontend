import React from "react";
import BestDealsForYou from "./Components/BestDealsForYou";
import ContactUs from "./Components/ContactUs";
import CustomerStories from "./Components/CustomerStories";
import Hero from "./Components/Hero";
import HowDoesItWork from "./Components/HowDoesItWork";
import WhyChooseUs from "./Components/WhyChooseUs";

const Home = () => {
  return (
    <section className="home-section">
      {/* hero section starts */}
      <Hero />
      {/* hero section ends */}

      {/* howdoesitwork section starts */}
      <HowDoesItWork />
      {/* howdoesitwork section ends */}

      {/* bestdealsforyou section starts */}
      <BestDealsForYou />
      {/* bestdealsforyou section ends */}

      {/* whychooseus section starts */}
      <WhyChooseUs />
      {/* whychooseus section ends */}

      {/* customerStories section starts */}
      <CustomerStories />
      {/* customerStories section ends */}

      {/* contactUs section starts */}
      <ContactUs />
      {/* contactUs section ends */}
    </section>
  );
};

export default Home;
