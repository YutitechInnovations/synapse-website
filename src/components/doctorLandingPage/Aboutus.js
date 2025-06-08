import React from "react";
import Image from "next/image";
import SujithImage from '../../assets/sujit.png';
import PrabhakarImage from '../../assets/prabhakar.png';
import HarmeetImage from '../../assets/harmeet.png';
import AyushiImage from '../../assets/ayushi.png'


const team = [
  {
    name: "Sujit Hota",
    title: "CEO & Co-Founder",
    description: "IIM C Alum (>25 years of dental industry experience)",
    image: SujithImage,
  },
  {
    name: "Prabakar KP",
    title: "COO & Co-Founder",
    description: "IIML Alum (>15 years of dental + software experience)",
    image: PrabhakarImage,
  },
  {
    name: "Dr Harmeet Kaur",
    title: "Manager, Clinical & Education",
    description: "Orthodontist (>8 years of experience)",
    image: HarmeetImage,
  },
  {
    name: "Dr Ayushi",
    title: "Customer Success Manager",
    description: "Orthodontist (>3 years of experience)",
    image: AyushiImage,
  },
];

const Aboutus = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-white">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-0 text-[#184C3A] mt-[60px] max-w-4xl mx-auto px-4"
      >
        Synapse Core Team
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto px-2 md:px-0 mt-[32px] mb-[60px]"
      >
        {team.map((member, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-center bg-white border border-[#184C3A] rounded-2xl p-4 md:p-8 min-h-[240px] shadow-sm w-full">
            <div className="flex-shrink-0">
              <Image
                src={member.image}
                alt={member.name}
                width={100}
                height={100}
                className="rounded-lg object-cover w-24 h-24 md:w-[140px] md:h-[140px]"
              />
            </div>
            <div className="mt-4 md:mt-0 ml-0 md:ml-8 flex flex-col justify-center w-full">
              <div className="text-[#184C3A] text-xl md:text-2xl font-[600] mb-1">{member.name}</div>
              <div className="text-[#184C3A] text-lg font-[600] mb-1">{member.title}</div>
              <div className="text-[#184C3A] text-base font-[400]">{member.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Aboutus;
