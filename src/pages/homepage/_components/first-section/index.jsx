import React from "react";
import { first_section, spiral } from "../../../../constants/images";

const FirstSection = () => {
  return (
    <div className="md:container container mx-auto px-8 lg:px-24 relative mb-24 h-full">
      <img
        src={spiral}
        alt="spiral"
        className="absolute z-50 top-[-2rem] left-[-2rem]"
      />
      <div className="flex w-full lg:flex-row flex-col gap-6 item-center justify-between">
        <div className="lg:w-1/2">
          <div className="w-full gap-y-2 mb-4 flex flex-col justify-start items-start">
            <span className="text-sm uppercase tracking-[4.2px] text-lightblue font-semibold">
              Our mission
            </span>
            <span className="md:text-[40px] text-2xl font-tiro capitalize text-secondary font-semibold">
              Journey to Impact Lives.
            </span>
          </div>
          <span className="text-sm md:text-base text-lightgray">
            Our aim is to bridge the gap between technology and education,
            fostering a collaborative environment where cutting-edge innovations
            reshape educational practices and extend transformative impact
            across diverse sectors. By elevating student outcomes and equipping
            learners with essential skills for success in a swiftly evolving
            digital landscape, we strive to empower individuals and
            organizations to excel in an increasingly tech-driven world
            <br />
            <br />
            The technology sector presents unparalleled prospects with notably
            higher rewards in contrast to other fields. Studies reveal that
            individuals in tech roles earn between two to five times more than
            their non-tech peers. However, despite the evident benefits of
            pursuing a career in technology, financial obstacles frequently
            impede the progress of young people, particularly in regions like
            Africa where many struggle to attain basic living standards. This
            scenario underscores the urgency to empower the next generation with
            innovative solutions, enabling them to address challenges and drive
            positive change across Africa.
            <br />
            <br />
            Our mission is to provide a dynamic platform for collaboration, idea
            exchange, and the showcasing of cutting-edge, tech-inclined
            solutions that revolutionize educational practices and extend
            innovation across diverse sectors
          </span>
        </div>
        <div className="lg:w-[35%]">
          <img src={first_section} className="w-full" alt="workshop" />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
