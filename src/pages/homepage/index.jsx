import React from "react";
import { Navbar } from "../../components";
import { HeroSection, HeroSlider } from "./_components";

const HomePage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      {/* <HeroSlider /> */}
    </div>
  );
};

export default HomePage;
