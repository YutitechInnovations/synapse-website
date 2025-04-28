import React from "react";
import ZigZagCard from "../cards/ZigZagCard.js";

let items = [
  {
    title: "Vision Statement",
    description:
      "To redefine how dental practices grow and connect—by enabling a future where every patient journey is informed, personalized, and seamlessly supported through intelligent, integrated care.",
    image: "/images/bulb.png",
  },
  {
    title: "Mission Statement",
    description:
      "We are out on a mission to empower dental professionals with seamless support across clinical and practice needs—delivering reliable, innovative solutions that foster transparency, elevate patient experiences, and build enduring relationships through informed, personalized care.",
    image: "/images/hand-team.png",
  },
];

const MissionNVision = () => {
  return (
    <section className="w-full">
      <div className="w-full bg-(--background-dark) flex flex-col items-center justify-center p-6 md:p-12 lg:p-25">
        <ZigZagCard items={items} />
      </div>
    </section>
  );
};

export default MissionNVision;

{
  /* <div className="w-full bg-(--background-dark) flex flex-col items-center justify-center p-6 md:p-12 lg:p-25">
  <div className="card w-full max-w-[1240px] flex flex-col card-p-0 overflow-hidden card-gap-0 rounded-t-[20px]">
    <div className="w-full flex flex-col md:flex-row justify-end h-auto md:h-[424px] border-bottom overflow-hidden">
      <div className="w-full py-6 md:py-[125px] flex flex-col gap-6 md:gap-[30px] justify-center items-center px-6 md:px-[134px]">
        <h2 className="font-semibold text-2xl md:text-4xl">
          Vision Statement
        </h2>
        <p className="text-center text-base md:text-xl font-normal">
          To redefine how dental practices grow and connect—by enabling a
          future where every patient journey is informed, personalized,
          and seamlessly supported through intelligent, integrated care.
        </p>
      </div>
      <div className=" h-[424px]">
        <img
          src="/images/bulb.png"
          className="h-full w-full object-cover"
          alt="Vision"
        />
      </div>
    </div>
    <div className="w-full flex flex-col-reverse md:flex-row h-auto md:h-[424px] rounded-b-[20px]">
      <div className="h-[424px]">
        <img
          src="/images/hand-team.png"
          className="h-full w-full object-cover"
          alt="Mission"
        />
      </div>
      <div className="w-full py-6 md:py-[125px] flex flex-col gap-6 md:gap-[30px] justify-center items-center px-6 md:px-[134px]">
        <h2 className="font-semibold text-4xl">Mission Statement</h2>
        <p className="text-center text-base md:text-xl font-normal">
          We are out on a mission to empower dental professionals with
          seamless support across clinical and practice needs—delivering
          reliable, innovative solutions that foster transparency, elevate
          patient experiences, and build enduring relationships through
          informed, personalized care.
        </p>
      </div>
    </div>
  </div>
</div> */
}
