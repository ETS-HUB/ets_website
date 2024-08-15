import React from "react";
import { ReactTyped } from "react-typed";

import { lightIcon } from "../../../../constants/images";
import HeroSlider from "../slider";
import { Button } from "../../../../components";

const HeroSection = () => {
  return (
    <div className="bg-[#3a0ca3] h-screen relative z-50 mb-24 w-full bg-heroImage">
      <div className="bg-secondary bg-opacity-90 absolute z- w-full top-0 h-screen" />
      <div className="w-full z-50 absolute animate-slide_up h-screen">
        <div className="md:container container mx-auto lg:py-10 pt-[6rem] px-8 lg:px-24 w-full flex lg:flex-row flex-col items-center justify-between h-full">
          <div className="lg:w-[40%] lg:text-start text-center flex gap-y-4 lg:gap-y-4 flex-col">
            <span className="text-primary font-tiro md:text-3xl text-4xl lg:text-7xl font-medium ">
              {" "}
              Bridging <span className="italic">Tech</span>  <br className="lg:block hidden" /> and{" "}
              <br className="lg:block hidden" /> <span className="italic">Education</span> Landscapes
            </span>
            <span className="text-[#fff] md:text-base tracking-wide font-normal text-sm">
              ETS stands as a vibrant community that delves into innovative
              solutions where{" "}
              <span className="font-semibold">
                education, entrepreneurship, and technology{" "}
              </span>
              converge. We delve deeply into pioneering methodologies where the
              realm of technology intersects with education, showcasing
              inventive resources and platforms that empower both educators and
              entrepreneurs to reshape and enhance learning journeys.
            </span>
            {/* <span className="text-[#444] lg:hidden block md:text-base text-sm">
              By fostering collaboration among educators, entrepreneurs, and
              technologists, ETS drives forward a future where learning is not
              just transformed but revolutionized, opening new horizons for
              knowledge dissemination and societal advancement.
            </span> */}
            <Button className="w-fit mt-4 mx-auto uppercase lg:mx-0" border="none">
              Join Community
            </Button>
          </div>

          <div className="lg:w-1/2 h-[55%] pt-4 lg:pt-0">
            <div className="lg:absolute flex items-center group top-[20%] text-[#fff] py-4 px-3 left-1/2 right-0 h-[50px] w-fit">
              <div className="w-[30px]">
                <img
                  src={lightIcon}
                  alt="light"
                  className="md:w-[80px] w-[30px] h-[40px] duration-500 animate-pulse transition-all ease-in-out"
                />
              </div>
              <ReactTyped
                strings={["We cultivate tech talent, one mind at a time"]}
                typeSpeed={150}
                backSpeed={170}
                showCursor={false}
                className=" font-semibold md:text-base text-xs"
              ></ReactTyped>
            </div>
            <div className="lg:absolute left-[70vw] top-[30%] group flex items-center duration-200 h-[50px] right-0 w-fit text-[#fff] py-4 px-3">
              <div className="w-[30px]">
                <img
                  src={lightIcon}
                  alt="light"
                  className="md:w-[80px] w-[30px] h-[40px] duration-500 animate-pulse transition-all easein-out"
                />
              </div>
              <ReactTyped
                strings={["Innovate, collaborate, educate"]}
                typeSpeed={160}
                backSpeed={70}
                showCursor={false}
                className="font-semibold md:text-base text-xs"
              ></ReactTyped>
            </div>
            <div className="lg:absolute left-[55%] top-[60%] right-0 w-fit group flex items-center duration-200 h-[50px] text-[#fff] py-4 px-3">
              <div className="w-[30px]">
                <img
                  src={lightIcon}
                  alt="light"
                  className="md:w-[80px] w-[30px] h-[40px] duration-500 animate-pulse transition-all easein-out"
                />
              </div>
              <ReactTyped
                strings={["Unleashing potential, forging connections"]}
                typeSpeed={160}
                backSpeed={70}
                showCursor={false}
                className="font-semibold md:text-base text-xs"
              ></ReactTyped>
            </div>
            <div className="lg:absolute left-[60%] top-[45%] right-0 w-fit group flex items-center duration-200 h-[50px] text-[#fff] py-4 px-3">
              <div className="w-[30px]">
                {" "}
                <img
                  src={lightIcon}
                  alt="light"
                  className="md:w-[80px] w-[30px] h-[40px] duration-500 animate-pulse transition-all easein-out"
                />
              </div>
              <ReactTyped
                strings={[
                  "Igniting creativity, fostering innovation, shaping tomorrow",
                ]}
                typeSpeed={80}
                backSpeed={100}
                showCursor={false}
                className="font-semibold md:text-base text-xs"
              ></ReactTyped>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="absolute bottom-[15%] -z-0 w-full">
        <HeroSlider />
      </div>
    </div>
  );
};

export default HeroSection;
