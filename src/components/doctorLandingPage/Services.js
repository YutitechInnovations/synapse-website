import React from "react";
import ZigZagCard from "../cards/ZigZagCard.js";

let items = [
  {
    title: "Treatment Planning",
    description:
      "Offered for both Direct Print and Thermoformed Aligners, delivering precise, customized treatment plans based on your material of choice",
    image: "/images/treatment.jpg",
  },
  {
    title: "Aligner Manufacturing",
    description:
      "Fabrication of 3D Solutions like aligners and surgical guides using best-in-class products, while also offering production transparency and dispatch visibility",
    image: "/images/aligner.png",
  },
  {
    title: "Integrated Marketing",
    description:
      "OrthoSyncTM for treatment management and RxTrackTM for patient compliance offering personalized customer engagement. Marketing support also offered as per orthodontist needs through branding and education",
    image: "/images/inte-market.png",
  },
];
const Services = () => {
  return (
    <>
      <section className="w-full bg-(--background-dark) flex flex-col items-center justify-center p-6 md:p-12 lg:p-25">
        <div className="justify-center text-center lg:px-[124px] md:px-[100px] sm-px5] px-20 mb-[50px]">
          <h2 className="lg:text-4xl sm:text-[36px] text-[30px] font-semibold mb-[20px]">
            Synapse - Your Partner in Ortho
          </h2>
          <p className="text-xl font-normal">
            Our partnership does not stop at the product. We help you stay
            engaged with your patients through personalized treatment journeys
            and marketing support built on transparency and a shared commitment
            to better care. While you focus on your expertise, we shall take
            care of the rest.
          </p>
        </div>
        <ZigZagCard items={items} />
      </section>

      <div className="relative w-full overflow-hidden">
        <div className="absolute w-full h-[200px] md:h-[308px]">
          <img
            src="/images/teeth.png"
            className="h-full w-full object-cover opacity-30"
            alt="Landing Page"
          />
        </div>
        <div className="relative w-full h-[200px] md:h-[308px] flex flex-row item-center justify-between top-0 lg:p-25 md:p-19 sm:p-10 p-6">
          <h1 className="lg:text-4xl md:text-2xl sm:text-sm font-semibold text-left">
            With a commitment to transparency, innovation, and ongoing
            collaboration.
          </h1>
          <p className="lg:text-xl md:text-lg sm:text-sm text-xs font-normal text-left">
            We’re here to ensure that both you and your patients experience care
            that’s thoughtful, informed, and consistently excellent.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
