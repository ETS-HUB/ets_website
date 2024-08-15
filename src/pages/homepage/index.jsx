import React from "react";
import { Navbar } from "../../components";
import { FirstSection, HeroSection, HeroSlider, SecondSection } from "./_components";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FirstSection />
      <SecondSection />
    </>
  );
};

export default HomePage;
