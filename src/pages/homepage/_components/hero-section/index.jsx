import React from "react";
import { ReactTyped } from "react-typed";

import { lightIcon } from "../../../../constants/images";
import HeroSlider from "../slider";

const HeroSection = () => {
  return (
    <div className="bg-[#ebebeb] h-full relative w-full">
      <div className="absolute h-[100vh] w-full top-0">
        <div className="md:container container mx-auto lg:py-10 pt-[6rem] px-8 lg:px-24 w-full flex lg:flex-row flex-col items-center justify-between h-full">
          <div className="lg:w-[40%] lg:text-start text-center flex gap-y-4 lg:gap-y-2 flex-col">
            <span className="text-[#3a0ca3] md:text-3xl text-4xl lg:text-6xl font-bold ">
              {" "}
              Education <br className="lg:block hidden" /> Technology{" "}
              <br className="lg:block hidden" /> Summit
            </span>
            <span className="text-[#444] md:text-base text-sm">
              We stand as a vibrant community that delves into innovative
              solutions where <span className="font-semibold">education, entrepreneurship, and technology </span>
              converge. We delve deeply into pioneering methodologies where the
              realm of technology intersects with education, showcasing
              inventive resources and platforms that empower both educators and
              entrepreneurs to reshape and enhance learning journeys.
            </span>
            <span className="text-[#444] lg:hidden block md:text-base text-sm">
              By fostering collaboration among educators, entrepreneurs, and
              technologists, ETS drives forward a future where learning is not
              just transformed but revolutionized, opening new horizons for
              knowledge dissemination and societal advancement.
            </span>
          </div>

          <div className="lg:w-1/2 h-[55%] pt-4 lg:pt-0">
            <div className="lg:absolute flex items-center group top-[20%] cursor-pointer duration-200 transition-all ease-in hover:bg-[#3a0ca3] hover:text-[#fff] text-[#3a0ca3] py-4 px-3 left-1/2 right-0 h-[50px] w-fit">
              <img
                src={lightIcon}
                alt="light"
                className="md:w-[80px] w-[30px] h-[40px] group-hover:block hidden duration-500 animate-pulse transition-all easein-out"
              />
              <ReactTyped
                strings={["We cultivate tech talent, one mind at a time"]}
                typeSpeed={150}
                backSpeed={170}
                className=" font-semibold md:text-base text-xs lg:text-lg"
              ></ReactTyped>
            </div>
            <div className="lg:absolute left-[70vw] top-[30%] group flex items-center duration-200 h-[50px] right-0 w-fit cursor-pointer transition-all ease-in hover:bg-[#3a0ca3] hover:text-[#fff] text-[#3a0ca3] py-4 px-3">
              <img
                src={lightIcon}
                alt="light"
                className="md:w-[80px] w-[30px] h-[40px] group-hover:block hidden duration-500 animate-pulse transition-all easein-out"
              />
              <ReactTyped
                strings={["Innovate, collaborate, educate"]}
                typeSpeed={160}
                backSpeed={70}
                className="font-semibold md:text-base text-xs lg:text-lg"
              ></ReactTyped>
            </div>
            <div className="lg:absolute left-[55%] top-[60%] right-0 w-fit group flex items-center duration-200 h-[50px] cursor-pointer transition-all ease-in hover:bg-[#3a0ca3] hover:text-[#fff] text-[#3a0ca3] py-4 px-3">
              <img
                src={lightIcon}
                alt="light"
                className="md:w-[80px] w-[30px] h-[40px] group-hover:block hidden duration-500 animate-pulse transition-all easein-out"
              />
              <ReactTyped
                strings={["Unleashing potential, forging connections"]}
                typeSpeed={160}
                backSpeed={70}
                className="font-semibold md:text-base text-xs lg:text-lg"
              ></ReactTyped>
            </div>
            <div className="lg:absolute left-[60%] top-[45%] right-0 w-fit group flex items-center duration-200 h-[50px] cursor-pointer transition-all ease-in hover:bg-[#3a0ca3] hover:text-[#fff] text-[#3a0ca3] py-4 px-3">
              <img
                src={lightIcon}
                alt="light"
                className="md:w-[80px] w-[30px] h-[40px] group-hover:block hidden duration-500 animate-pulse transition-all easein-out"
              />
              <ReactTyped
                strings={[
                  "Igniting creativity, fostering innovation, shaping tomorrow",
                ]}
                typeSpeed={80}
                backSpeed={100}
                className="font-semibold md:text-base text-xs lg:text-lg"
              ></ReactTyped>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 -z-20 w-full">
        <HeroSlider />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
