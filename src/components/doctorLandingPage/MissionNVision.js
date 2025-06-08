import React from "react";
import ZigZagCard from "../cards/ZigZagCard.js";
import VisionImage from '../../assets/vision.png';
import MissionImage from '../../assets/mission.png'

let items = [
  {
    title: "Vision Statement",
    description:
      "To elevate clinical practices through personalized care solutions that enhance every patient journey.",
    image: VisionImage
  },
  {
    title: "Mission Statement",
    description:
      "Our purpose is to empower dental professionals with evidence-based, personalized solutions that streamline clinical workflows, support continuous learning, and enhance patient outcomes through every stage of care.",
    image: MissionImage
  },
];

const MissionNVision = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16">
      <div className="w-full flex flex-col items-center justify-center py-8 md:py-12 lg:py-16">
        <ZigZagCard items={items} />
      </div>
    </section>
  );
};

export default MissionNVision;
