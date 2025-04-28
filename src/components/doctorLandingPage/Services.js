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
      "OrthoSyncTM for treatment management and RxTrackTM for patient compliance offering personalized customer engagement. Marketing support also offered as per orthodontist needs through branding and education",
    image: "/images/inte-market.png",
  },
];
const Services = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center p-4 md:p-8 lg:p-25 gap-4 md:gap-8 lg:gap-[50px]">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 px-4 md:px-8 lg:px-[116px]">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">Our Services</h1>
          <p className="text-sm md:text-base font-normal text-center">
            We offer a comprehensive suite of services designed to support dental practices in their growth and success
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full max-w-[1240px] px-4 md:px-8 lg:px-0">
          <div className="card w-full p-4 md:p-6 flex flex-col gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">Practice Management</h2>
            <p className="text-sm md:text-base">
              Streamline your practice operations with our comprehensive management solutions
            </p>
          </div>

          <div className="card w-full p-4 md:p-6 flex flex-col gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">Education & Training</h2>
            <p className="text-sm md:text-base">
              Enhance your skills with our specialized dental education programs
            </p>
          </div>

          <div className="card w-full p-4 md:p-6 flex flex-col gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple-100 flex items-center justify-center">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
        </div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">Security & Compliance</h2>
            <p className="text-sm md:text-base">
              Ensure your practice meets all regulatory requirements with our security solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
