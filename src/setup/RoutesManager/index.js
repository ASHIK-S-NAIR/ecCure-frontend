import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../../pages/Components/Footer";
import Nav from "../../pages/Components/Nav";
import Home from "../../pages/Home";
import AOS from "aos";

const RoutesManager = () => {
     // animate on scroll start
     AOS.init();
     // animate on scroll end
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default RoutesManager;
