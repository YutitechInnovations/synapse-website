import React from 'react';
import ZigZagCard from '../cards/ZigZagCard';

const services = [
  {
    title: "Treatment Planning",
    description: "Offered for both Direct Print and Thermoformed Aligners, delivering precise, customized treatment plans based on your material of choice",
    image: "/images/img5.jpg",
  },
  {
    title: "Manufacturing services",
    description: "Fabrication of 3D Solutions like aligners and surgical guides using best-in-class products, while also offering production transparency and dispatch visibility",
    image: "/images/img4.jpg",
  },
  {
    title: "Marketing Services",
    description: "OrthoSync™ for treatment management and RxTrack™ for patient compliance offering personalized customer engagement. Marketing support also offered as per orthodontist needs through branding and education.",
    image: "/images/img6.png",
  },
];

export default function ServicesOffered() {
  return (
    <section className="w-full bg-[#F6F6F3] py-8 md:py-14 lg:py-20 px-4 sm:px-6 md:px-[100px]">
      <div className="w-full flex flex-col gap-4 md:gap-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#004C44] mb-2 md:mb-4">Synapse - Services Offered</h2>
        <p className="text-sm md:text-base lg:text-lg text-[#004C44] mb-2 md:mb-4 w-full">
          Our partnership does not stop at the product. We help you stay engaged with your patients through personalized treatment journeys and marketing support built on transparency and a shared commitment to better care. While you focus on your expertise, we shall take care of the rest
        </p>
        <p className="text-sm md:text-base lg:text-lg text-[#004C44] mb-8 md:mb-12 w-full">
          We offer the below services and you can please feel free to reach out for more details !
        </p>
        <ZigZagCard items={services} />
      </div>
    </section>
  );
} 