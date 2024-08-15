import React from "react";

import Slider from "react-infinite-logo-slider";

import {
  eleventh,
  fifth,
  first,
  fourth,
  ninth,
  second,
  seventh,
  sixth,
  tenth,
  third,
} from "../../../../constants/images";

const HeroSlider = () => {
  return (
    <div className="absolute h-full -z-10 w-full">
      <Slider width="250px" duration={40}>
        <Slider.Slide>
          <img src={first} className="md:w-5/6 w-[70%]" alt="" />
        </Slider.Slide>

        <Slider.Slide>
          <img src={third} className="md:w-5/6 w-[70%]" alt="" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={fourth} className="md:w-5/6 w-[70%]" alt="" />
        </Slider.Slide>

        <Slider.Slide>
          <img src={ninth} className="md:w-5/6 w-[70%]" alt="" />
        </Slider.Slide>
        {/* <Slider.Slide>
          <img src={tenth} className="md:w-5/6 w-[70%]" alt="" />
        </Slider.Slide> */}
        <Slider.Slide>
          <img src={seventh} className="md:w-5/6 w-[70%]" alt="" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={sixth} className="md:w-5/6 w-[70%]" alt="" />
        </Slider.Slide>
      </Slider>
    </div>
  );
};

export default HeroSlider;
