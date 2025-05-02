import React from "react";
import ZigZagCard from "../cards/ZigZagCard.js";

const items = [
  {
    title: "Treatment Planning",
    description:
      "Offered for both Direct Print and Thermoformed Aligners, delivering precise, customized treatment plans based on your material of choice",
    image: "/images/img5.jpg",
  },
  {
    title: "Manufacturing services",
    description:
      "Fabrication of 3D Solutions like aligners and surgical guides using best-in-class products, while also offering production transparency and dispatch visibility",
    image: "/images/img4.jpg",
  },
  {
    title: "Marketing Services",
    description:
      "OrthoSync™ for treatment management and RxTrack™ for patient compliance offering personalized customer engagement. Marketing support also offered as per orthodontist needs through branding and education.",
    image: "/images/img6.png",
  },
];

const Services = () => {
  return (
    <section className="w-full bg-[#F6F6F3] py-10 md:py-16 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-[100px] flex flex-col gap-6 md:gap-10">
        <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-[#004C44] mb-2 md:mb-4">Synapse - Services Offered</h2>
        <p className="text-base md:text-lg text-[#004C44] mb-2 md:mb-4 max-w-4xl">
          Our partnership does not stop at the product. We help you stay engaged with your patients through personalized treatment journeys and marketing support built on transparency and a shared commitment to better care. While you focus on your expertise, we shall take care of the rest
        </p>
        <p className="text-base md:text-lg text-[#004C44] mb-8 md:mb-12 max-w-4xl">
          We offer the below services and you can please feel free to reach out for more details !
        </p>
        <ZigZagCard items={items} />
      </div>
    </section>
  );
};

export default Services;
