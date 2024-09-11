import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Solutions from "../Components/Solutions";
import WhyUs from "../Components/WhyUs";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Solutions />
      <AboutUs />
      <WhyUs />
      <Footer />
    </>
  );
};

export default Home;
