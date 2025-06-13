import React from "react";
import ZigZagCard from "../cards/ZigZagCard.js";

let items = [
  {
    title: "Vision Statement",
    description:
      "To elevate clinical practices through personalized care solutions that enhance every patient journey.",
    image: "/images/aboutus-vision.png"
  },
  {
    title: "Mission Statement",
    description:
      "Our purpose is to empower dental professionals with evidence-based, personalized solutions that streamline clinical workflows, support continuous learning, and enhance patient outcomes through every stage of care.",
    image: "/images/aboutus-mission.png"
  },
];

const MissionNVision = () => {
  return (
    <section className="w-full">
      <div className="w-full flex flex-col bg-[#F6F6F3] items-center justify-center py-8 md:py-12 lg:py-16">
        <ZigZagCard items={items} />
      </div>
    </section>
  );
};

export default MissionNVision;
